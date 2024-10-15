import { Alert, Button } from "@mantine/core";
import { Card } from "@mui/joy";
import { useStore } from "@nanostores/react";
import { formatEther } from "ethers";
import type React from "react";
import { useState } from "react";
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
        functionName: "fee",
        args: [contracts.DataHiveToken],
      },
      {
        address: contracts.DataHiveToken,
        abi: DataHiveTokenABI,
        functionName: "balanceOf",
        args: [account.address],
      },
    ],
  });

  if (isLoading || loading) {
    return <Card>Loading...</Card>;
  }

  let allow = false;

  if (data) {
    const fee = data?.[0].result as number;
    const balance = data?.[1].result as number;

    if (balance >= fee) {
      allow = true;
    }
  }

  return (
    <DefaultPage>
      <div className="flex flex-col gap-3">
        {!$isVerified && (
          <Alert variant="light" color="yellow">
            You don't have verified profile. Please create one first. Go to <Link to="/profile">Get Started</Link>
          </Alert>
        )}
        {$isVerified && (
          <Alert variant="light" color="green">
            You have verified KYC profile.
          </Alert>
        )}

        <Card>
          <div>
            <div>Current Fee: {formatEther(data?.[0].result as number)} DH</div>
            <div>Current DH Balance: {formatEther(data?.[1].result as number)} DH</div>
            {!allow && (
              <div className="mt-2">
                Insufficient balance. Please <Link to="/faucet">Faucet</Link>
              </div>
            )}
          </div>
          <div>
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
                          functionName: "payFee",
                          args: [contracts.DataHiveToken],
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
        </Card>
      </div>
    </DefaultPage>
  );
};

export default Create;
