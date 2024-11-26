import { Alert, Button } from "@mantine/core";
import { Card } from "@mui/joy";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useStore } from "@nanostores/react";
import { ethers, formatEther } from "ethers";
import lodash from "lodash";
import type React from "react";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { useAccount, useReadContracts, useWriteContract } from "wagmi";
import { useAppDispatch } from "../../app/hooks";
import Code from "../../components/Layout/Code";
import DefaultPage from "../../components/Layout/DefaultPage";
import Link from "../../components/Layout/Link";
import { setToast } from "../../components/Toast/toastReducer";
import { contracts } from "../../config";
import { isVerified } from "../../features/user";
import DataHiveTokenABI from "../../services/eth/abi/DataHiveToken.json";
import NodeFeeManagerABI from "../../services/eth/abi/NodeFeeManager.json";
import { tiers } from "./tiers";

const tableData = tiers;

const columns: GridColDef<{ tier: string; fee: number; stakingFactor: number }[][number]>[] = [
  {
    field: "stage",
    headerName: "Stage",
    sortable: false,
    minWidth: 100,
  },
  {
    field: "tier",
    headerName: "Tier",
    sortable: false,
    minWidth: 100,
  },
  {
    field: "fee",
    headerName: "Fee",
    sortable: false,
    minWidth: 100,
    renderCell: (params) => {
      return (
        <>
          $<NumericFormat value={ethers.formatEther(lodash.ceil(params.value))} displayType="text" thousandSeparator decimalScale={2} />
        </>
      );
    },
  },
  {
    field: "allocation",
    headerName: "Allocation",
    sortable: false,
    minWidth: 100,
  },
  {
    field: "percentage",
    headerName: "Percentage",
    sortable: false,
    minWidth: 100,
  },
  {
    field: "stakingFactor",
    headerName: "Staking Factor",
    sortable: false,
    minWidth: 120,
  },
  {
    field: "maxStake",
    headerName: "Max Stake Per Node",
    sortable: false,
    minWidth: 170,
    renderCell: (params) => {
      return (
        <>
          $<NumericFormat value={params.row.fee * params.row.stakingFactor} displayType="text" thousandSeparator decimalScale={2} />
        </>
      );
    },
  },
];

const Create: React.FC = () => {
  const $isVerified = useStore(isVerified);

  const account = useAccount();
  const { writeContract } = useWriteContract();
  const dispatch = useAppDispatch();

  const [tx, setTx] = useState<`0x${string}` | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { data, isLoading, refetch } = useReadContracts({
    contracts: [
      {
        address: contracts.NodeFeeManager,
        abi: NodeFeeManagerABI,
        functionName: "getFee",
        args: [],
      },
      {
        address: contracts.DataHiveToken,
        abi: DataHiveTokenABI,
        functionName: "balanceOf",
        args: [account.address],
      },
      {
        address: contracts.NodeFeeManager,
        abi: NodeFeeManagerABI,
        functionName: "nodeId",
        args: [],
      },
      {
        address: contracts.NodeFeeManager,
        abi: NodeFeeManagerABI,
        functionName: "getCurrentTier",
        args: [],
      },
    ],
  });

  if (isLoading || loading) {
    return <Card>Loading...</Card>;
  }

  let allow = false;
  let insufficient = true;

  const fee = (data?.[0].result as number) || 0;
  const balance = (data?.[1].result as number) || 0;
  const nodeId = (data?.[2].result as number) || 0;
  const currentTier = (data?.[3].result as number) || 0;

  if (data) {
    if (balance >= fee) {
      insufficient = false;
    }

    if (balance >= fee && $isVerified) {
      allow = true;
    }
  }

  return (
    <DefaultPage>
      <div className="flex flex-col gap-3">
        {$isVerified && (
          <Alert variant="light" color="green">
            You have verified KYC profile.
          </Alert>
        )}

        <Card>
          <div>
            <div>
              Current DH Balance: {formatEther((data?.[1]?.result as number) || 0)} DH. <span className="italic">(Suppose 1DH = 1USD)</span>
            </div>
            {insufficient && (
              <div className="mt-2">
                Insufficient balance. Please <Link to="/faucet">Faucet</Link>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6">
              <div className="mt-3">
                <div>
                  Current Tier: <span className="font-bold">Tier {Number(currentTier)}</span>
                </div>
                <div>
                  Current Fee: <span className="font-bold">${ethers.formatEther(fee)}</span>
                </div>
                <div>
                  Total Node: <span className="font-bold">{Number(nodeId)}</span>
                </div>

                <div>
                  {!$isVerified && (
                    <Alert variant="light" color="yellow" className="mb-6">
                      You don't have verified profile. Please create one first. Go to <Link to="/profile">Get Started</Link>
                    </Alert>
                  )}

                  <Button
                    disabled={!allow}
                    onClick={() => {
                      writeContract(
                        {
                          abi: DataHiveTokenABI as [],
                          address: contracts.DataHiveToken,
                          functionName: "approve",
                          args: [contracts.NodeFeeManager, data?.[0].result as number],
                        },
                        {
                          onSuccess: () => {
                            writeContract(
                              {
                                abi: NodeFeeManagerABI as [],
                                address: contracts.NodeFeeManager,
                                functionName: "buyNode",
                                args: [],
                              },
                              {
                                onSuccess: (res) => {
                                  setTx(res as `0x${string}`);

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
                    }}
                  >
                    Create Node
                  </Button>
                </div>

                <div>
                  <div>
                    {isSuccess && (
                      <div>
                        Action Tx: <Code copy={tx}>{tx}</Code>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  {isSuccess && (
                    <Alert variant="light" color="green">
                      Created Success. Go to <Link to="/nodes">My Nodes</Link> to stake to your node.
                    </Alert>
                  )}
                </div>
              </div>
              <div>
                <DataGrid rows={tableData} columns={columns} getRowId={(row) => row.tier} density="compact" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DefaultPage>
  );
};

export default Create;
