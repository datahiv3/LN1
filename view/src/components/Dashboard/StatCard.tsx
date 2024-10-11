import { Card, CardContent, Chip, Stack, Typography } from "@mui/joy";
import type React from "react";

const StatCard: React.FC<{ title: string; value: string }> = ({ title, value }) => {
  const trendValues = { up: "+25%", down: "-25%", neutral: "+5%" };

  return (
    <Card variant="outlined" sx={{ height: "100%", flexGrow: 1 }}>
      <CardContent>
        <Typography level="title-lg" gutterBottom>
          {title}
        </Typography>
        <Stack direction="column" sx={{ justifyContent: "space-between", flexGrow: "1", gap: 1 }}>
          <Stack sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
              <Typography>{value}</Typography>
              <Chip size="sm">{trendValues.up}</Chip>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatCard;
