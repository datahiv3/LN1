import { Card, FormControl, FormLabel, Input, Stack } from "@mui/joy";
import { useStore } from "@nanostores/react";
import type React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { isAdmin } from "../../features/auth";
import { viewProfile } from "../../features/user";
import { api, getServices } from "../../services/api";
import type { ServiceResponse } from "../../services/api/types";
import { kycPendingBadge } from "../../services/profile/KycPendingBadge";
import type { Profile } from "../../types/Profile";
import NotFound from "../NotFound";

const View: React.FC = () => {
  const $viewProfile = useStore(viewProfile);
  const $isAdmin = useStore(isAdmin);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api.get<ServiceResponse<Profile>>($isAdmin ? getServices().admin.getUserProfile(id) : getServices().user.getProfile(id)).then(({ data }) => {
        if (!data.status) {
          return;
        }

        viewProfile.set(data.data);
      });
    }
  }, [$isAdmin, id]);

  const {
    register,

    formState: { errors },
  } = useForm<Profile>({ defaultValues: { country: "US", countryCode: "+1" }, values: $viewProfile });

  if (!$viewProfile) return <NotFound />;

  return (
    <Card className="mt-6 max-w-[800px]">
      <Stack spacing={2}>
        <form>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <FormLabel>First Name *</FormLabel>
                <FormControl error={!!errors.firstName}>
                  <Input disabled {...register("firstName", { required: { value: true, message: "First name is required" } })} placeholder="First Name" />
                </FormControl>
              </div>

              <div className="flex flex-col gap-1">
                <FormLabel>Last Name *</FormLabel>
                <FormControl error={!!errors.lastName}>
                  <Input disabled {...register("lastName", { required: { value: true, message: "Last name is required" } })} placeholder="Last Name" />
                </FormControl>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <FormLabel>Email *</FormLabel>
              <FormControl error={!!errors.email}>
                <Input disabled {...register("email", { required: { value: true, message: "Email is required" } })} placeholder="Email" type="email" />
              </FormControl>
            </div>

            <div className="flex flex-col gap-1">
              <FormLabel>Phone Number *</FormLabel>
              <div className="flex gap-2">
                <FormControl error={!!errors.countryCode} className="w-[80px]">
                  <Input disabled {...register("countryCode", { required: { value: true, message: "Country Code is required" } })} />
                </FormControl>

                <FormControl error={!!errors.phoneNumber} className="flex-1">
                  <Input disabled {...register("phoneNumber", { required: { value: true, message: "Phone Number is required" } })} placeholder="Phone Number" />
                </FormControl>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <FormLabel>Addresss *</FormLabel>
                <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.address}>
                  <Input disabled {...register("address", { required: { value: true, message: "Address is required" } })} placeholder="Address" />
                </FormControl>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <FormLabel>City *</FormLabel>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.city}>
                    <Input disabled {...register("city", { required: { value: true, message: "City is required" } })} placeholder="City" />
                  </FormControl>
                </div>
                <div>
                  <FormLabel>State / Province *</FormLabel>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.state}>
                    <Input disabled {...register("state", { required: { value: true, message: "State / Province is required" } })} placeholder="State / Province" />
                  </FormControl>
                </div>
                <div>
                  <FormLabel>ZIP / Postal code *</FormLabel>
                  <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.zipCode}>
                    <Input disabled {...register("zipCode", { required: { value: true, message: "ZIP / Postal code is required" } })} placeholder="ZIP / Postal code" />
                  </FormControl>
                </div>
              </div>
            </div>

            <div>
              <FormLabel>Country *</FormLabel>
              <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.country}>
                <Input disabled {...register("country", { required: { value: true, message: "Country is required" } })} placeholder="Country" />
              </FormControl>
            </div>

            <div>
              <FormLabel>KYC Status *</FormLabel>
              <FormControl sx={{ display: { sm: "flex-column", md: "flex-row" } }} error={!!errors.kycStatus}>
                {kycPendingBadge($viewProfile.kycStatus)}
              </FormControl>
            </div>
          </div>
        </form>
      </Stack>
    </Card>
  );
};

export default View;
