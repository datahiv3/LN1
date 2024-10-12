import { Alert, Button } from "@mantine/core";
import { Typography } from "@mui/joy";
import { useStore } from "@nanostores/react";
import type React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { currentKycStatus, isVerified, profiles } from "../../features/user";
import { getKycPendingColor } from "../../services/profile/KycPendingBadge";
import DefaultPage from "./DefaultPage";

const ProfileLayout: React.FC = () => {
  const $profiles = useStore(profiles);
  const $isVerified = useStore(isVerified);
  const $currentKycStatus = useStore(currentKycStatus);

  const navigate = useNavigate();
  const location = useLocation();

  if ($profiles.loading) {
    return null;
  }

  return (
    <DefaultPage>
      <div>
        <div className="flex flex-col gap-6">
          <Typography level="title-lg">Add Your Profile to KYC</Typography>

          {location.pathname === "/profile" && (
            <div className="flex flex-col gap-1">
              <div className="pb-3">
                <Alert variant="light" color={getKycPendingColor($currentKycStatus)}>
                  {$currentKycStatus === "pending" && <div>Your KYC is pending, please wait for approval from admins</div>}

                  {$currentKycStatus === "approved" && <div>Your KYC is approved</div>}

                  {$currentKycStatus === "rejected" && <div>Your KYC is rejected</div>}

                  {$currentKycStatus === "cancelled" && <div>Your KYC is cancelled</div>}

                  {$currentKycStatus === "not started yet" && <div>You don't have verified profile</div>}
                </Alert>
              </div>
            </div>
          )}
        </div>

        <Outlet />

        {location.pathname === "/profile" && (
          <div className="mt-6">
            {["not started yet", "rejected", "cancelled"].includes($currentKycStatus) && (
              <div className="flex items-center gap-2">
                <Button
                  size="md"
                  onClick={() => {
                    navigate("/profile/create");
                  }}
                >
                  Add Profile
                </Button>
              </div>
            )}

            {$isVerified && (
              <div className="flex items-center gap-2">
                <Button
                  size="md"
                  onClick={() => {
                    navigate("/profile/create");
                  }}
                >
                  Update Profile
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </DefaultPage>
  );
};

export default ProfileLayout;
