import { Button } from "@mantine/core";
import { Card, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormHelperText, FormLabel, Input, Modal, ModalDialog, Stack, Typography } from "@mui/joy";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { ethers } from "ethers";
import lodash from "lodash";
import type React from "react";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { useAccount, useReadContract, useReadContracts, useWriteContract } from "wagmi";
import { useAppDispatch } from "../../app/hooks";
import DefaultPage from "../../components/Layout/DefaultPage";
import { setToast } from "../../components/Toast/toastReducer";
import { contracts } from "../../config";
import { useKeyWithClickEvents } from "../../hooks/useKeyWithClickEvents";
import DataHiveTokenABI from "../../services/eth/abi/DataHiveToken.json";
import NodeFeeManagerABI from "../../services/eth/abi/NodeFeeManager.json";
import NodeStakingABI from "../../services/eth/abi/NodeStaking.json";
import { tiers } from "./tiers";

export type Staking = {
  amount: string;
};

const MyNodes: React.FC = () => {
  const account = useAccount();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [row, setRow] = useState<{ nodeId: number; maxStaking: number; stakedAmount: number }>();
  const { writeContract } = useWriteContract();
  const [, setTx] = useState<`0x${string}` | undefined>(undefined);
  const [, setIsSuccess] = useState<boolean>(false);
  const [, setLoading] = useState<boolean>(false);

  const { data: maxNodeIndex } = useReadContract({
    address: contracts.NodeFeeManager,
    abi: NodeFeeManagerABI,
    functionName: "userMaxNodeIndex",
    args: [account.address],
  });

  const nodeIds = new Array(Number(maxNodeIndex || 0))
    .fill({ address: contracts.NodeFeeManager, abi: NodeFeeManagerABI as [], functionName: "nodeOwner", args: [0] })
    .map((_, id) => ({
      address: contracts.NodeFeeManager,
      abi: NodeFeeManagerABI as [],
      functionName: "userNodes",
      args: [account.address, id],
    }));

  const { data: nodeIdsData } = useReadContracts({
    contracts: nodeIds,
    query: {
      enabled: maxNodeIndex !== undefined && nodeIds.length > 0,
    },
  });

  const { data: stakedAmounts, refetch } = useReadContracts({
    contracts: nodeIds.map((item) => {
      return {
        address: contracts.NodeStaking,
        abi: NodeStakingABI as [],
        functionName: "stakedAmount",
        args: [item.args[1]],
      };
    }),
    query: {
      enabled: maxNodeIndex !== undefined && nodeIds.length > 0,
    },
  });

  const columns: GridColDef<{ nodeId: number }[][number]>[] = [
    {
      field: "nodeId",
      headerName: "Node ID",
      sortable: false,
      minWidth: 100,
    },
    {
      field: "stage",
      headerName: "Stage",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "tier",
      headerName: "Tier",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "fee",
      headerName: "Fee Paid",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "allocation",
      headerName: "Allocation",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "stakingFactor",
      headerName: "Staking Factor",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "stakedAmount",
      headerName: "Staked Amount",
      sortable: false,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            $<NumericFormat value={params.value} displayType="text" thousandSeparator decimalScale={2} />
          </>
        );
      },
    },
    {
      field: "maxStaking",
      headerName: "Max Staking",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      minWidth: 120,
      renderCell: (params) => {
        return (
          <Button
            color="blue"
            variant="outline"
            size="xs"
            onClick={() => {
              setOpen(true);
              setRow(params.row as unknown as { nodeId: number; maxStaking: number; stakedAmount: number });
            }}
          >
            Stake
          </Button>
        );
      },
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Staking>({ defaultValues: {} });

  const parsedNodeIdsData = nodeIdsData?.map((item, index) => {
    const nodeId = Number(item?.result);

    let tier = 0;
    let allocation = 0;

    for (const itemTier of tiers) {
      allocation += itemTier.allocation;
      if (nodeId < allocation) {
        break;
      }
      tier++;
    }

    const current = tiers[tier];

    return {
      nodeId,
      fee: lodash.ceil(current.fee),
      tier: current.tier,
      stage: current.stage,
      allocation: current.allocation,
      stakingFactor: current.stakingFactor,
      stakedAmount: ethers.formatEther(stakedAmounts?.[index]?.result || "0").toString() || 0,
      maxStaking: lodash.ceil(current.fee) * current.stakingFactor || 0,
    };
  });

  const onSubmit: SubmitHandler<Staking> = async (data) => {
    writeContract(
      {
        abi: DataHiveTokenABI as [],
        address: contracts.DataHiveToken,
        functionName: "approve",
        args: [contracts.NodeStaking, ethers.parseEther(data.amount)],
      },
      {
        onSuccess: () => {
          writeContract(
            {
              address: contracts.NodeStaking,
              abi: NodeStakingABI as [],
              functionName: "stake",
              args: [row?.nodeId, ethers.parseEther(data.amount)],
            },
            {
              onSuccess: (res) => {
                setTx(res);

                dispatch(
                  setToast({
                    show: true,
                    title: "",
                    message: "Action successfully",
                    type: "success",
                  }),
                );

                setOpen(false);
                reset();

                setIsSuccess(true);
                setLoading(false);

                refetch();
              },

              onSettled: () => {},

              onError: (er) => {
                setLoading(false);

                console.error(er);

                dispatch(
                  setToast({
                    show: true,
                    title: "",
                    message: er.message.split("\n")?.[0] || er.message,
                    type: "error",
                  }),
                );
              },
            },
          );

          refetch();
        },

        onSettled: () => {},

        onError: (er) => {
          setLoading(false);

          console.error(er);

          dispatch(
            setToast({
              show: true,
              title: "",
              message: er.message.split("\n")?.[0] || er.message,
              type: "error",
            }),
          );
        },
      },
    );
  };

  return (
    <DefaultPage>
      <Stack spacing={2}>
        <Card>
          <Typography level="title-lg">My Nodes</Typography>

          <div>
            <DataGrid
              rows={parsedNodeIdsData || []}
              getRowId={(row) => row.nodeId}
              columns={columns}
              disableColumnResize
              density="compact"
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 50,
                  },
                },
              }}
              pageSizeOptions={[50, 100]}
              disableRowSelectionOnClick
            />
          </div>
        </Card>
      </Stack>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalDialog variant="outlined" role="alertdialog">
            <DialogTitle>Staking</DialogTitle>
            <Divider />
            <DialogContent>
              <div className="w-full">
                <FormLabel>Amount *</FormLabel>

                <FormControl error={!!errors.amount}>
                  <Input
                    {...register("amount", {
                      required: { value: true, message: "Amount is required" },
                      max: { value: row?.maxStaking.toString() || "0", message: `value cannot be greater than ${((row?.maxStaking || 0) - (row?.stakedAmount || 0)).toString()}` },
                    })}
                  />
                  <div className="mt-2 text-sm">
                    Max:{" "}
                    <span
                      className="cursor-pointer underline"
                      {...useKeyWithClickEvents(() => {
                        setValue("amount", ((row?.maxStaking || 0) - (row?.stakedAmount || 0)).toString());
                      }, "Enter")}
                    >
                      {((row?.maxStaking || 0) - (row?.stakedAmount || 0)).toString()}
                    </span>
                  </div>
                  <FormHelperText>{errors.amount?.message}</FormHelperText>
                </FormControl>
              </div>
            </DialogContent>
            <DialogActions>
              <Button type="submit" variant="solid" color={"primary"}>
                Stake
              </Button>
              <Button
                variant="outline"
                color="neutral"
                onClick={async () => {
                  setOpen(false);
                  reset();
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </ModalDialog>
        </form>
      </Modal>
    </DefaultPage>
  );
};

export default MyNodes;
