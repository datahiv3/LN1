import { Button } from "@material-tailwind/react";
import { Card, Stack, Typography } from "@mui/joy";
import { useStore } from "@nanostores/react";
import type React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../../features/user";
import BodyMd from "./BodyMd";
import DefaultPage from "./DefaultPage";

const ProfileLayout: React.FC = () => {
  const $profile = useStore(profile);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <DefaultPage>
      <Stack spacing={2}>
        <Card>
          <Typography level="title-lg">Profile</Typography>

          {!$profile.loading && !$profile.data && (
            <BodyMd>
              <Stack spacing={1}>
                <div>To complete KYC Basic 1, you must update your profile.</div>
                {location.pathname === "/profile" && (
                  <Button
                    placeholder=""
                    onClick={() => {
                      navigate("/profile/edit");
                    }}
                  >
                    Add your profile
                  </Button>
                )}
              </Stack>
            </BodyMd>
          )}
        </Card>
        <Outlet />
      </Stack>
    </DefaultPage>
  );
};

export default ProfileLayout;
