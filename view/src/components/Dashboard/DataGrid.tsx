import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./gridData";

export default function CustomizedDataGrid() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd")}
      initialState={{
        pagination: { paginationModel: { pageSize: 15 } },
      }}
      pageSizeOptions={[15, 30, 50, 100]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: "outlined",
              size: "small",
            },
            columnInputProps: {
              variant: "outlined",
              size: "small",
              sx: { mt: "auto" },
            },
            operatorInputProps: {
              variant: "outlined",
              size: "small",
              sx: { mt: "auto" },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: "outlined",
                size: "small",
              },
            },
          },
        },
      }}
    />
  );
}
