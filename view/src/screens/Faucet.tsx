import { Button, Input } from "@material-tailwind/react";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAccount, useWriteContract } from "wagmi";
import DefaultPage from "../components/Layout/DefaultPage";
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

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Faucet>();

  const captchaRef = React.useRef<ReCAPTCHA | null>(null);

  const captcha = watch("captcha");

  const onSubmit: SubmitHandler<Faucet> = async (data) => {
    const { data: response } = await api.post<ServiceResponse<{ signature: string; random: string }>>(getServices().token.faucet, {
      address: account.address,
      ...data,
    });
    captchaRef.current?.reset();

    writeContract(
      {
        abi: TestnetFaucetABI,
        address: contracts.testnetFaucet,
        functionName: "proofFaucet",
        args: [response.data.random, response.data.signature],
      },
      {
        onSuccess: () => {
          console.log("success");
        },
        onSettled: () => {
          console.log("settled");
        },
        onError: (er) => {
          console.log(er);
        },
      },
    );

    console.log(response);
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

              <Button disabled={!captcha} type="submit" placeholder="">
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
          </div>
        </div>
      </form>
    </DefaultPage>
  );
};

export default Faucet;
