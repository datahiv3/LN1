import { useQuery } from "@apollo/client";
import { Button, Input } from "@mantine/core";
import { Card, FormControl, FormHelperText, Stack, Typography } from "@mui/joy";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useStore } from "@nanostores/react";
import type React from "react";
import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useWriteContract } from "wagmi";
import { useAppDispatch } from "../../app/hooks";
import Code from "../../components/Layout/Code";
import { setToast } from "../../components/Toast/toastReducer";
import { contracts } from "../../config";
import { allWhitelistRequests } from "../../features/user";
import { getServices } from "../../services/api";
import { getAllWhitelistRequests } from "../../services/api/profile/getProfiles";
import { ALL_WHITELISTED_QUERY, type AddWhitelist, parseWhitelistData } from "../../services/api/whitelisted/parseWhitelist";
import WhitelistedABI from "../../services/eth/abi/Whitelisted.json";

const Whitelisted: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddWhitelist>();

  const { data, refetch } = useQuery<{
    whitelists?: {
      account: string;
      whitelisted: boolean;
      blockTimestamp: string;
    }[];
  }>(ALL_WHITELISTED_QUERY, {
    fetchPolicy: "network-only",
    pollInterval: 5000,
  });

  useEffect(() => {
    getAllWhitelistRequests(getServices());
  }, []);

  const $allWhitelistRequests = useStore(allWhitelistRequests);
  const dispatch = useAppDispatch();
  const { writeContract } = useWriteContract();

  const [tx, setTx] = useState<`0x${string}` | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<AddWhitelist> = async (data) => {
    setLoading(true);

    writeContract(
      {
        abi: WhitelistedABI,
        address: contracts.Whitelisted,
        functionName: "addWhitelist",
        args: [data.address],
      },
      {
        onSuccess: (res) => {
          setTx(res);

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
  };

  const columns: GridColDef<{ account: string; whitelisted: boolean; blockTimestamp: number; id: number }[][number]>[] = [
    {
      field: "blockTimestamp",
      headerName: "Time",
      sortable: false,
      minWidth: 200,
    },
    {
      field: "account",
      headerName: "EVM Address",
      sortable: false,
      minWidth: 370,
    },
    {
      field: "whitelisted",
      headerName: "Whitelisted",
      sortable: false,
      minWidth: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      minWidth: 120,
      renderCell: (params) => {
        return (
          <Button
            color="red"
            variant="outline"
            size="xs"
            onClick={() => {
              writeContract(
                {
                  abi: WhitelistedABI,
                  address: contracts.Whitelisted,
                  functionName: "removeWhitelist",
                  args: [params.row.account],
                },
                {
                  onSuccess: (res) => {
                    setTx(res);

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
            }}
          >
            Remove
          </Button>
        );
      },
    },
  ];

  const whitelistRequestColumns: GridColDef<{ evmAddress: string; additional: string; id: number }[][number]>[] = [
    {
      field: "evmAddress",
      headerName: "EVM Address",
      sortable: false,
      minWidth: 370,
    },
    {
      field: "additional",
      headerName: "Additional",
      sortable: false,
      minWidth: 200,
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
              writeContract(
                {
                  abi: WhitelistedABI,
                  address: contracts.Whitelisted,
                  functionName: "addWhitelist",
                  args: [params.row.evmAddress],
                },
                {
                  onSuccess: (res) => {
                    setTx(res);

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
            }}
          >
            Approve
          </Button>
        );
      },
    },
  ];

  return (
    <Stack spacing={2}>
      <Card>
        <Typography level="title-lg">Whitelist</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-start gap-2 max-w-[800px]">
            <FormControl error={!!errors.address} className="flex-1">
              <Input placeholder="Address" {...register("address", { required: { value: true, message: "Address is required" } })} />
              <FormHelperText>{errors.address?.message}</FormHelperText>
            </FormControl>

            <Button disabled={loading} type="submit">
              Add
            </Button>
          </div>
        </form>

        <div>
          <DataGrid
            rows={parseWhitelistData(data)?.whitelists?.map((item, index) => ({ ...item, id: index })) || []}
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

        <div>Whitelist Requests</div>

        <div>
          <DataGrid
            rows={
              $allWhitelistRequests.data
                .map((item, index) => {
                  const wl = parseWhitelistData(data)?.whitelists;
                  if (wl) {
                    if (wl.some((i) => i.account.toLocaleLowerCase() === item.evmAddress.toLocaleLowerCase())) {
                      return null;
                    }
                  }

                  return { ...item, id: index };
                })
                .filter((item) => !!item) || []
            }
            columns={whitelistRequestColumns}
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

        <div>
          {isSuccess && (
            <div>
              Action Tx: <Code copy={tx}>{tx}</Code>
            </div>
          )}
        </div>
      </Card>
    </Stack>
  );
};

export default Whitelisted;
