import { CardContent } from "@mui/joy";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import * as React from "react";
import { BrazilFlag, GlobeFlag, UsaFlag } from "./CustomIcons";

const data = [
  { label: "India", value: 50000 },
  { label: "USA", value: 35000 },
  { label: "Brazil", value: 10000 },
  { label: "Other", value: 5000 },
];

const countries = [
  {
    name: "USA",
    value: 35,
    flag: <UsaFlag />,
    color: "hsl(220, 25%, 45%)",
  },
  {
    name: "Brazil",
    value: 10,
    flag: <BrazilFlag />,
    color: "hsl(220, 25%, 30%)",
  },
  {
    name: "Other",
    value: 5,
    flag: <GlobeFlag />,
    color: "hsl(220, 25%, 20%)",
  },
];

interface StyledTextProps {
  variant: "primary" | "secondary";
}

const StyledText = styled("text", {
  shouldForwardProp: (prop) => prop !== "variant",
})<StyledTextProps>(({ theme }) => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fill: theme.palette.text.secondary,
  variants: [
    {
      props: {
        variant: "primary",
      },
      style: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
    {
      props: ({ variant }) => variant !== "primary",
      style: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    {
      props: {
        variant: "primary",
      },
      style: {
        fontWeight: theme.typography.h5.fontWeight,
      },
    },
    {
      props: ({ variant }) => variant !== "primary",
      style: {
        fontWeight: theme.typography.body2.fontWeight,
      },
    },
  ],
}));

interface PieCenterLabelProps {
  primaryText: string;
  secondaryText: string;
}

function PieCenterLabel({ primaryText, secondaryText }: PieCenterLabelProps) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <React.Fragment>
      <StyledText variant="primary" x={left + width / 2} y={primaryY}>
        {primaryText}
      </StyledText>
      <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
        {secondaryText}
      </StyledText>
    </React.Fragment>
  );
}

const colors = ["hsl(220, 20%, 65%)", "hsl(220, 20%, 42%)", "hsl(220, 20%, 35%)", "hsl(220, 20%, 25%)"];

export default function NodesByCountry() {
  return (
    <Card variant="outlined" sx={{ height: "100%", flexGrow: 1 }}>
      <CardContent>
        <Typography level="title-lg" gutterBottom>
          KYC Verifed by Country
        </Typography>

        <div>
          <PieChart
            colors={colors}
            margin={{
              left: 80,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            series={[
              {
                data,
                innerRadius: 55,
                outerRadius: 80,
                paddingAngle: 0,
                highlightScope: { faded: "global", highlighted: "item" },
              },
            ]}
            height={260}
            width={260}
            slotProps={{
              legend: { hidden: true },
            }}
          >
            <PieCenterLabel primaryText="500" secondaryText="Total" />
          </PieChart>
        </div>

        <div>
          {countries.map((country) => (
            <Stack key={country.name} direction="row" sx={{ alignItems: "center", gap: 2, pb: 2 }}>
              {country.flag}
              <Stack sx={{ gap: 1, flexGrow: 1 }}>
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography sx={{ fontWeight: "500" }}>{country.name}</Typography>
                  <Typography sx={{ color: "text.secondary" }}>{country.value}%</Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  aria-label="Number of users by country"
                  value={country.value}
                  sx={{
                    [`& .${linearProgressClasses.bar}`]: {
                      backgroundColor: country.color,
                    },
                  }}
                />
              </Stack>
            </Stack>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
