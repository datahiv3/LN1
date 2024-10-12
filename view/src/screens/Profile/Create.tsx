import { Button } from "@mantine/core";
import { Alert, Card, FormControl, FormHelperText, FormLabel, Input, Stack } from "@mui/joy";
import type { AxiosError } from "axios";
import React from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignMessage } from "wagmi";
import { useAppDispatch } from "../../app/hooks";
import CountrySelector, { countries, type CountryType } from "../../components/Form/CountrySelector";
import { setToast } from "../../components/Toast/toastReducer";
import { api, getServices } from "../../services/api";
import { getProfiles } from "../../services/api/profile/getProfiles";
import type { ServiceResponse } from "../../services/api/types";
import type { Profile } from "../../types/Profile";

const Create: React.FC = () => {
  const [updated, setUpdated] = React.useState(false);
  const dispatch = useAppDispatch();
  const { signMessage } = useSignMessage();
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Profile>({ defaultValues: { country: "US", countryCode: "+1" } });

  const onSubmit: SubmitHandler<Profile> = async (data) => {
    const services = getServices();
    const message = JSON.stringify(data);

    signMessage(
      { message },
      {
        onSuccess: async (signed) => {
          try {
            const { data: response } = await api.post<ServiceResponse<string>>(getServices().user.profile, { message, signed });
            if (!response.status) {
              dispatch(
                setToast({
                  show: true,
                  title: "",
                  message: response.error || "Failed to update profile",
                  type: "error",
                }),
              );

              return;
            }

            setUpdated(true);
            await getProfiles(services);

            dispatch(
              setToast({
                show: true,
                title: "",
                message: "Profile updated successfully",
                type: "success",
              }),
            );

            navigate("/profile");
          } catch (error: unknown) {
            const e = error as AxiosError<ServiceResponse<string>>;

            dispatch(
              setToast({
                show: true,
                title: "",
                message: e.response?.data?.error || "Failed to add profile",
                type: "error",
              }),
            );
          }
        },
      },
    );
  };

  return (
    <Card className="mt-6 max-w-[800px]">
      <Stack spacing={2}>
        {updated && (
          <Alert variant="solid" color="success">
            Profile added successfully
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <FormLabel>First Name *</FormLabel>
                <FormControl error={!!errors.firstName}>
                  <Input {...register("firstName", { required: { value: true, message: "First name is required" } })} placeholder="First Name" />
                  <FormHelperText>{errors.firstName?.message}</FormHelperText>
                </FormControl>
              </div>

              <div className="flex flex-col gap-1">
                <FormLabel>Last Name *</FormLabel>
                <FormControl error={!!errors.lastName}>
                  <Input {...register("lastName", { required: { value: true, message: "Last name is required" } })} placeholder="Last Name" />
                  <FormHelperText>{errors.lastName?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <FormLabel>Email *</FormLabel>
              <FormControl error={!!errors.email}>
                <Input {...register("email", { required: { value: true, message: "Email is required" } })} placeholder="Email" type="email" />
                <FormHelperText>{errors.email?.message}</FormHelperText>
              </FormControl>
            </div>

            <div className="flex flex-col gap-1">
              <FormLabel>Phone Number *</FormLabel>
              <div className="flex gap-2">
                <FormControl error={!!errors.countryCode} className="w-[80px]">
                  <Input disabled {...register("countryCode", { required: { value: true, message: "Country Code is required" } })} />
                  <FormHelperText>{errors.countryCode?.message}</FormHelperText>
                </FormControl>

                <FormControl error={!!errors.phoneNumber} className="flex-1">
                  <Input {...register("phoneNumber", { required: { value: true, message: "Phone Number is required" } })} placeholder="Phone Number" />
                  <FormHelperText>{errors.phoneNumber?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <FormLabel>Addresss *</FormLabel>
                <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.address}>
                  <Input {...register("address", { required: { value: true, message: "Address is required" } })} placeholder="Address" />
                  <FormHelperText>{errors.address?.message}</FormHelperText>
                </FormControl>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <FormLabel>City *</FormLabel>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.city}>
                    <Input {...register("city", { required: { value: true, message: "City is required" } })} placeholder="City" />
                    <FormHelperText>{errors.city?.message}</FormHelperText>
                  </FormControl>
                </div>
                <div>
                  <FormLabel>State / Province *</FormLabel>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.state}>
                    <Input {...register("state", { required: { value: true, message: "State / Province is required" } })} placeholder="State / Province" />
                    <FormHelperText>{errors.state?.message}</FormHelperText>
                  </FormControl>
                </div>
                <div>
                  <FormLabel>ZIP / Postal code *</FormLabel>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.zipCode}>
                    <Input {...register("zipCode", { required: { value: true, message: "ZIP / Postal code is required" } })} placeholder="ZIP / Postal code" />
                    <FormHelperText>{errors.zipCode?.message}</FormHelperText>
                  </FormControl>
                </div>
              </div>
            </div>

            <Stack spacing={1}>
              <Controller
                control={control}
                name="country"
                render={({ field: { onChange, onBlur } }) => (
                  <CountrySelector
                    isError={!!errors.country}
                    updateValue={(value: CountryType) => {
                      onChange();
                      setValue("country", value.code);
                      const countryCode = `+${countries.find((country) => country.code === value.code)?.phone}`;
                      setValue("countryCode", countryCode);
                    }}
                    onBlur={onBlur}
                  />
                )}
              />
              <FormHelperText>{errors.country?.message}</FormHelperText>
            </Stack>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Stack>
    </Card>
  );
};

export default Create;
