import { Button, Input } from "@material-tailwind/react";
import { Alert, Card, Stack, Typography } from "@mui/joy";
import { ethers } from "ethers";
import _ from "lodash";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { useAccount, useBalance, useTransactionConfirmations, useWriteContract } from "wagmi";
import { useAppDispatch } from "../app/hooks";
import FormError from "../components/Form/FormError";
import BodyMd from "../components/Layout/BodyMd";
import Code from "../components/Layout/Code";
import DefaultPage from "../components/Layout/DefaultPage";
import { setToast } from "../components/Toast/toastReducer";
import { config, contracts } from "../config";
import { api, getServices } from "../services/api";
import type { ServiceResponse } from "../services/api/types";
import TestnetFaucetABI from "../services/eth/abi/TestnetFaucet.json";

type Faucet = {
  captcha: string;
};

const Faucet: React.FC = () => {
  const account = useAccount();
  const { writeContract } = useWriteContract();
  const dispatch = useAppDispatch();
  const [tx, setTx] = React.useState<`0x${string}` | undefined>(undefined);
  const balance = useBalance({ address: account.address });

  const result = useTransactionConfirmations({ hash: tx });

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Faucet>();

  const [loading, setLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const captchaRef = React.useRef<ReCAPTCHA | null>(null);

  const captcha = watch("captcha");

  const onSubmit: SubmitHandler<Faucet> = async (data) => {
    setLoading(true);

    const { data: response } = await api.post<ServiceResponse<{ signature: string; hash: string }>>(getServices().token.faucet, {
      address: account.address,
      ...data,
    });
    captchaRef.current?.reset();

    writeContract(
      {
        abi: TestnetFaucetABI,
        address: contracts.TestnetFaucet,
        functionName: "proofFaucet",
        args: [response.data.hash, response.data.signature],
      },
      {
        onSuccess: (res) => {
          setTx(res);

          setIsSuccess(true);
          setLoading(false);
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
          <Typography level="title-lg">Step 1: Faucet OP Sepolia</Typography>
          <BodyMd>
            <a href="https://docs.optimism.io/builders/tools/build/faucets" target="_blank" rel="noopener noreferrer" className="underline">
              Faucet OP Sepolia
            </a>
            <div>
              Your OP Sepolia ETH balance: {balance.data?.value !== undefined ? _.round(Number.parseFloat(ethers.formatEther(balance.data?.value || "0")), 6) : "Loading.."}
            </div>
          </BodyMd>
        </Card>

        <Card>
          <Typography level="title-lg">Step 2: Request the DataHive Token</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BodyMd>
              <div>
                <div>
                  Request the <span className="font-bold">DataHive Token</span>. You can use it to pay fee for the Legalese Node.
                </div>
                <div>You can faucet the token up to 5 times every 24 hours.</div>

                <div className="mt-12 flex flex-col gap-3">
                  <div className="flex gap-2">
                    <Input placeholder="Recipient Wallet Address" value={account.address} disabled crossOrigin={undefined} />

                    <Button disabled={loading || !captcha} type="submit" placeholder="">
                      Faucet
                    </Button>
                  </div>

                  <div>
                    <Controller
                      control={control}
                      name="captcha"
                      rules={{
                        required: { value: true, message: "Please complete the reCAPTCHA" },
                      }}
                      render={({ field: { onChange } }) => (
                        <ReCAPTCHA
                          ref={(e) => {
                            captchaRef.current = e;
                          }}
                          sitekey={config.googleRecaptcha}
                          onChange={(value) => {
                            const data = value?.toString() || "";

                            if (data) {
                              onChange(data);
                            }
                          }}
                        />
                      )}
                    />
                  </div>

                  <div>
                    <FormError label={errors.captcha} />
                  </div>

                  <div>{loading && <div>Loading...</div>}</div>

                  <div>
                    {tx && (
                      <div>
                        <Alert variant="solid" color="primary">
                          {result ? "Transaction confirmed!" : "Waiting for confirmation from the blockchain..."}
                        </Alert>

                        <div className="mt-3">
                          {result ? (
                            <>
                              You have claimed the faucet at transaction hash: <Code copy={tx}>{tx}</Code>
                            </>
                          ) : (
                            <>
                              You are claiming the faucet at transaction hash: <Code copy={tx}>{tx}</Code>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    {isSuccess && (
                      <div className="mt-12">
                        To see the balance, add <span className="font-bold">DataHive Token Contract</span> Address:{" "}
                        <Code copy={contracts.DataHiveToken}>{contracts.DataHiveToken}</Code> to your Wallet
                        {/* or just{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() => {
                      client?.request({
                        jsonrpc: "2.0",
                        id: 1,
                        method: "wallet_watchAsset",
                        params: {
                          type: "ERC20",
                          options: {
                            address: contracts.DataHiveToken,
                            symbol: "DH",
                            decimals: 18,
                          },
                        },
                      });
                    }}
                  >
                    click
                  </span> */}
                        .
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </BodyMd>
          </form>
        </Card>
      </Stack>
    </DefaultPage>
  );
};

export default Faucet;
