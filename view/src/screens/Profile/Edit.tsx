import { Button } from "@material-tailwind/react";
import { Alert, Card, FormControl, FormHelperText, FormLabel, Input, Stack } from "@mui/joy";
import { useStore } from "@nanostores/react";
import React from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { useSignMessage } from "wagmi";
import { useAppDispatch } from "../../app/hooks";
import CountrySelector, { type CountryType } from "../../components/Form/CountrySelector";
import { setToast } from "../../components/Toast/toastReducer";
import { profile } from "../../features/user";
import { api, getServices } from "../../services/api";
import { getProfile } from "../../services/api/profile/getProfile";
import type { ServiceResponse } from "../../services/api/types";
import type { Profile } from "../../types/Profile";

const Edit: React.FC = () => {
  const $profile = useStore(profile);
  const $$profile = $profile.data;

  const [updated, setUpdated] = React.useState(false);
  const dispatch = useAppDispatch();
  const { signMessage } = useSignMessage();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Profile>({ defaultValues: { country: "US" }, values: $$profile });

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
            await getProfile(services);
          } catch (error) {}
        },
      },
    );
  };

  return (
    <Card>
      <Stack spacing={2}>
        {updated && (
          <Alert variant="solid" color="success">
            Profile updated successfully
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <Stack spacing={1}>
              <FormLabel>Name *</FormLabel>
              <FormControl error={!!errors.name}>
                <Input defaultValue="" {...register("name", { required: { value: true, message: "Name is required" } })} placeholder="Full Name" />
                <FormHelperText>{errors.name?.message}</FormHelperText>
              </FormControl>
            </Stack>

            <Stack spacing={1}>
              <FormLabel>Email *</FormLabel>
              <FormControl error={!!errors.email}>
                <Input defaultValue="" {...register("email", { required: { value: true, message: "Email is required" } })} placeholder="Email" />
                <FormHelperText>{errors.email?.message}</FormHelperText>
              </FormControl>
            </Stack>

            <Stack spacing={1}>
              <FormLabel>Phone Number *</FormLabel>
              <FormControl error={!!errors.phoneNumber}>
                <Input defaultValue="" {...register("phoneNumber", { required: { value: true, message: "Phone Number is required" } })} placeholder="Phone Number" />
                <FormHelperText>{errors.phoneNumber?.message}</FormHelperText>
              </FormControl>
            </Stack>

            <Stack spacing={1} sx={{ flexGrow: 1 }}>
              <FormLabel>Addresss *</FormLabel>
              <Stack spacing={1}>
                <Stack spacing={2}>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.address}>
                    <Input defaultValue="" {...register("address", { required: { value: true, message: "Address is required" } })} placeholder="Address" />
                    <FormHelperText>{errors.address?.message}</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.city}>
                    <Input defaultValue="" {...register("city", { required: { value: true, message: "City is required" } })} placeholder="City" />
                    <FormHelperText>{errors.city?.message}</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.state}>
                    <Input defaultValue="" {...register("state", { required: { value: true, message: "State is required" } })} placeholder="State" />
                    <FormHelperText>{errors.state?.message}</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.zipCode}>
                    <Input defaultValue="" {...register("zipCode", { required: { value: true, message: "ZIP Code is required" } })} placeholder="ZIP Code" />
                    <FormHelperText>{errors.zipCode?.message}</FormHelperText>
                  </FormControl>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={1}>
              <Controller
                control={control}
                name="country"
                render={({ field: { onChange, onBlur } }) => (
                  <CountrySelector
                    defaultValue={$$profile?.country}
                    isError={!!errors.country}
                    updateValue={(value: CountryType) => {
                      onChange();
                      setValue("country", value.code);
                    }}
                    onBlur={onBlur}
                  />
                )}
              />
              <FormHelperText>{errors.country?.message}</FormHelperText>
            </Stack>
            <Button type="submit">Save</Button>
          </Stack>
        </form>
      </Stack>
    </Card>
  );
};

export default Edit;
