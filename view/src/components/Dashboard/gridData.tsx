import Chip from "@mui/material/Chip";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import type { GridCellParams, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { v4 } from "uuid";

type SparkLineData = number[];

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params: GridCellParams<SparkLineData, number[]>) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={["hsl(210, 98%, 42%)"]}
        xAxis={{
          scaleType: "band",
          data,
        }}
      />
    </div>
  );
}

function renderStatus(status: "Online" | "Offline") {
  const colors: { [index: string]: "success" | "default" } = {
    Online: "success",
    Offline: "default",
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export const columns: GridColDef[] = [
  { field: "nodeId", headerName: "Node ID", flex: 1.5, minWidth: 200 },
  {
    field: "status",
    headerName: "Status",
    flex: 0.5,
    minWidth: 100,
    renderCell: (params) => renderStatus(params.value),
  },
  {
    field: "region",
    headerName: "Region",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 80,
  },
  {
    field: "respond",
    headerName: "Respond",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 60,
  },
  {
    field: "uptime",
    headerName: "Uptime",
    flex: 1,
    minWidth: 150,
    renderCell: renderSparklineCell,
  },
];

export const rows: GridRowsProp = [
  {
    id: 1,
    nodeId: v4(),
    status: "Online",
    respond: "0.1s",
    region: "US",
    uptime: [
      469172, 488506, 592287, 617401, 640374, 632751, 668638, 807246, 749198, 944863, 911787, 844815, 992022, 1143838, 1446926, 1267886, 1362511, 1348746, 1560533, 1670690,
      1695142, 1916613, 1823306, 1683646, 2025965, 2529989, 3263473, 3296541, 3041524, 2599497,
    ].map(() => 100),
  },
  {
    id: 2,
    nodeId: v4(),
    status: "Online",
    respond: "0.1s",
    region: "SG",
    uptime: [
      469172, 488506, 592287, 617401, 640374, 632751, 668638, 807246, 749198, 944863, 911787, 844815, 992022, 1143838, 1446926, 1267886, 1362511, 1348746, 1560533, 1670690,
      1695142, 1916613, 1823306, 1683646, 2025965, 2529989, 3263473, 3296541, 3041524, 2599497,
    ].map(() => 100),
  },
  {
    id: 3,
    nodeId: v4(),
    status: "Online",
    respond: "0.1s",
    region: "VN",
    uptime: [
      469172, 488506, 592287, 617401, 640374, 632751, 668638, 807246, 749198, 944863, 911787, 844815, 992022, 1143838, 1446926, 1267886, 1362511, 1348746, 1560533, 1670690,
      1695142, 1916613, 1823306, 1683646, 2025965, 2529989, 3263473, 3296541, 3041524, 2599497,
    ].map(() => 100),
  },
  {
    id: 4,
    nodeId: v4(),
    status: "Online",
    respond: "0.1s",
    region: "JP",
    uptime: [
      469172, 488506, 592287, 617401, 640374, 632751, 668638, 807246, 749198, 944863, 911787, 844815, 992022, 1143838, 1446926, 1267886, 1362511, 1348746, 1560533, 1670690,
      1695142, 1916613, 1823306, 1683646, 2025965, 2529989, 3263473, 3296541, 3041524, 2599497,
    ].map(() => 100),
  },
  {
    id: 5,
    nodeId: v4(),
    status: "Online",
    respond: "0.1s",
    region: "UK",
    uptime: [
      469172, 488506, 592287, 617401, 640374, 632751, 668638, 807246, 749198, 944863, 911787, 844815, 992022, 1143838, 1446926, 1267886, 1362511, 1348746, 1560533, 1670690,
      1695142, 1916613, 1823306, 1683646, 2025965, 2529989, 3263473, 3296541, 3041524, 2599497,
    ].map(() => 100),
  },
];
