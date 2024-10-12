import { Card, Stack, Typography } from "@mui/joy";
import type React from "react";

const Whitelist: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Card>
        <Typography level="title-lg">Whitelist</Typography>
        <div>Implementing</div>
      </Card>
    </Stack>
  );
};

export default Whitelist;
