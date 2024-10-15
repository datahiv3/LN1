import { Button } from "@mantine/core";
import { Card, Stack, Typography } from "@mui/joy";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type React from "react";
import { useAccount, useReadContract, useReadContracts } from "wagmi";
import DefaultPage from "../../components/Layout/DefaultPage";
import { contracts } from "../../config";
import NodeFeeManagerABI from "../../services/eth/abi/NodeFeeManager.json";

const MyNodes: React.FC = () => {
  const account = useAccount();

  const { data } = useReadContract({
    address: contracts.NodeFeeManager,
    abi: NodeFeeManagerABI,
    functionName: "nodeId",
    args: [],
  });

  const ownerContracts = new Array(Number(data || 0))
    .fill({ address: contracts.NodeFeeManager, abi: NodeFeeManagerABI as [], functionName: "nodeOwner", args: [0] })
    .map((_, id) => ({
      address: contracts.NodeFeeManager,
      abi: NodeFeeManagerABI as [],
      functionName: "nodeOwner",
      args: [id],
    }));

  const { data: nodeOwners } = useReadContracts({
    contracts: ownerContracts,
    query: {
      enabled: data !== undefined && ownerContracts.length > 0,
    },
  });

  const greatherThanZero = nodeOwners?.[0]?.result !== "0x0000000000000000000000000000000000000000";

  const columns: GridColDef<{ id: number; owner: string }[][number]>[] = [
    {
      field: "id",
      headerName: "ID",
      sortable: false,
      minWidth: 100,
    },
    {
      field: "owner",
      headerName: "Owner",
      sortable: false,
      minWidth: 370,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      minWidth: 120,
      renderCell: () => {
        return (
          <Button color="blue" variant="outline" size="xs" onClick={() => {}}>
            Stake
          </Button>
        );
      },
    },
  ];

  return (
    <DefaultPage>
      <Stack spacing={2}>
        <Card>
          <Typography level="title-lg">My Nodes</Typography>

          {greatherThanZero && (
            <div>
              <DataGrid
                rows={
                  nodeOwners
                    ?.map((item, id) => ({ id, owner: item?.result as unknown as string }))
                    ?.filter((item) => item.owner.toLocaleLowerCase() === account?.address?.toLocaleLowerCase()) || []
                }
                columns={columns}
                disableColumnResize
                density="compact"
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 50,
                    },
                  },
                }}
                pageSizeOptions={[50, 100]}
                disableRowSelectionOnClick
              />
            </div>
          )}
        </Card>
      </Stack>
    </DefaultPage>
  );
};

export default MyNodes;
