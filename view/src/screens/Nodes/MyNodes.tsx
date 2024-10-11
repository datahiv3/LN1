import { Button } from "@material-tailwind/react";
import { Card, Stack, Typography } from "@mui/joy";
import { useStore } from "@nanostores/react";
import type React from "react";
import { useNavigate } from "react-router-dom";
import BodyMd from "../../components/Layout/BodyMd";
import DefaultPage from "../../components/Layout/DefaultPage";
import { profile } from "../../features/user";

const MyNodes: React.FC = () => {
  const $profile = useStore(profile);
  const navigate = useNavigate();

  return (
    <DefaultPage>
      <Stack spacing={2}>
        <Card>
          <Typography level="title-lg">My Nodes</Typography>

          {!$profile.loading && !$profile.data && (
            <BodyMd>
              <Stack spacing={1}>
                <div>You haven't completed KYC yet. Please complete KYC before creating a node.</div>

                <Button
                  onClick={() => {
                    navigate("/profile/edit");
                  }}
                >
                  Add your profile
                </Button>
              </Stack>
            </BodyMd>
          )}
        </Card>

        <Card>
          {$profile.data && (
            <BodyMd>
              <Stack spacing={1}>
                <div>Use your profile to create a node. You can create multiple nodes with different configurations.</div>
                <Button
                  onClick={() => {
                    navigate("/create");
                  }}
                >
                  Create a Legalese Node
                </Button>
              </Stack>
            </BodyMd>
          )}
        </Card>
      </Stack>
    </DefaultPage>
  );
};

export default MyNodes;
