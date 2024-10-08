import { Button, Input } from "@material-tailwind/react";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAccount, useWriteContract } from "wagmi";
import { useAppDispatch } from "../app/hooks";
import FormError from "../components/Form/FormError";
import Code from "../components/Layout/Code";
import DefaultPage from "../components/Layout/DefaultPage";
import { setToast } from "../components/Toast/toastReducer";
import { config, contracts } from "../config";
import { api, getServices } from "../services/api";
import { ServiceResponse } from "../services/api/types";
import TestnetFaucetABI from "../services/eth/abi/TestnetFaucet.json";

type Faucet = {
  captcha: string;
};

const Faucet: React.FC = () => {
  const account = useAccount();
  const { writeContract } = useWriteContract();
  const dispatch = useAppDispatch();
  // const client = useClient();

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
        onSuccess: () => {
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
    <DefaultPage className="w-[100%] h-[100%] flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  required: { value: false, message: "Please complete the reCAPTCHA" },
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
              {isSuccess && (
                <div>
                  To see the balance, add <span className="font-bold">DataHive Token Contract</span> Address: <Code copy={contracts.DataHiveToken}>{contracts.DataHiveToken}</Code>{" "}
                  to your Wallet
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
      </form>
    </DefaultPage>
  );
};

export default Faucet;
