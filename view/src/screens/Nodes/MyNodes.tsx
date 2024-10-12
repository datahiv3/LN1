import { Card, Stack, Typography } from "@mui/joy";
import type React from "react";
import DefaultPage from "../../components/Layout/DefaultPage";

const MyNodes: React.FC = () => {
  return (
    <DefaultPage>
      <Stack spacing={2}>
        <Card>
          <Typography level="title-lg">My Nodes</Typography>

          <div>Implementing</div>
        </Card>
      </Stack>
    </DefaultPage>
  );
};

export default MyNodes;
