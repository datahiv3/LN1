import { useQuery } from "@apollo/client";
import { Alert, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FormControl, FormHelperText, FormLabel, Textarea } from "@mui/joy";
import { useStore } from "@nanostores/react";
import type { AxiosError } from "axios";
import type React from "react";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { useAccount, useSignMessage } from "wagmi";
import { useAppDispatch } from "../../app/hooks";
import { config } from "../../config";
import { hasWhitelistRequest, whitelistRequest } from "../../features/user";
import Loading from "../../screens/Loading";
import { api, getServices } from "../../services/api";
import { getWhitelistRequest } from "../../services/api/profile/getProfiles";
import type { ServiceResponse } from "../../services/api/types";
import { ALL_WHITELISTED_QUERY, parseWhitelistData } from "../../services/api/whitelisted/parseWhitelist";
import FormError from "../Form/FormError";
import { setToast } from "../Toast/toastReducer";

type UserWhitelistRequest = {
  additional: string;
  captcha: string;
};

const RequireWhitelisted: React.FC<PropsWithChildren> = () => {
  const { data, loading } = useQuery<{
    whitelists?: {
      account: string;
      whitelisted: boolean;
      blockTimestamp: string;
    }[];
  }>(ALL_WHITELISTED_QUERY, {
    fetchPolicy: "network-only",
    pollInterval: 5000,
  });
  const account = useAccount();

  const { signMessage } = useSignMessage();

  const [allow, setAllow] = useState(false);
  const parsedData = parseWhitelistData(data);

  const $hasWhitelistRequest = useStore(hasWhitelistRequest);
  const $whitelistRequest = useStore(whitelistRequest);

  const [opened, { open, close }] = useDisclosure(false);
  const [submitLoading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserWhitelistRequest>({ defaultValues: { additional: $whitelistRequest?.data?.additional || "" } });

  const captchaRef = useRef<ReCAPTCHA | null>(null);
  const captcha = watch("captcha");

  const onSubmit: SubmitHandler<UserWhitelistRequest> = async (data) => {
    setLoading(true);

    const services = getServices();
    const message = JSON.stringify({ additional: data.additional });

    signMessage(
      { message },
      {
        onSuccess: async (signed) => {
          try {
            const { data: response } = await api.post<ServiceResponse<string>>(getServices().user.whitelistRequest, { captcha, message, signed });

            if (!response.status) {
              dispatch(
                setToast({
                  show: true,
                  title: "",
                  message: response.error || "Failed to request",
                  type: "error",
                }),
              );

              return;
            }

            await getWhitelistRequest(services);
            captchaRef.current?.reset();

            dispatch(
              setToast({
                show: true,
                title: "",
                message: "Request successfully",
                type: "success",
              }),
            );

            close();

            setLoading(false);
          } catch (error: unknown) {
            const e = error as AxiosError<ServiceResponse<string>>;

            dispatch(
              setToast({
                show: true,
                title: "",
                message: e.response?.data?.error || "Failed to add whitelist request",
                type: "error",
              }),
            );

            setLoading(false);
            captchaRef.current?.reset();

            close();
          }
        },
      },
    );
  };

  useEffect(() => {
    getWhitelistRequest(getServices());
  }, []);

  useEffect(() => {
    if (parsedData?.whitelists) {
      setAllow(
        parsedData.whitelists.some((item) => {
          return item.account.toLocaleLowerCase() === account.address?.toLocaleLowerCase();
        }),
      );
    }
  }, [parsedData, account.address]);

  if (loading) return <Loading />;

  if (!allow)
    return (
      <div>
        <Modal opened={opened} onClose={close} title="Whitelist Request">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Additional Information (option)</FormLabel>
            <FormControl error={!!errors.additional}>
              <Textarea minRows={5} {...register("additional")} placeholder="Additional Information" />
              <FormHelperText>{errors.additional?.message}</FormHelperText>
            </FormControl>
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
              <FormError label={errors.captcha} />
            </div>

            <Button type="submit" loading={submitLoading}>
              Request
            </Button>
          </form>
        </Modal>

        <Alert variant="light" color="yellow">
          You are not in the whitelist.{" "}
          {!$hasWhitelistRequest ? (
            <>
              <Button type="submit" onClick={open}>
                Apply Here
              </Button>{" "}
              to join or reach out if you need further assistance.
            </>
          ) : (
            "Your request is being processed."
          )}
        </Alert>
      </div>
    );

  return <Outlet />;
};

export default RequireWhitelisted;
