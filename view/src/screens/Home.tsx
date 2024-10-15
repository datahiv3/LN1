import { Button } from "@mantine/core";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type React from "react";
import { useEffect, useState } from "react";
import { useReadContract, useReadContracts } from "wagmi";
import StatCard from "../components/Dashboard/StatCard";
import Banner from "../components/Home/Banner";
import { contracts } from "../config";
import { api, getServices } from "../services/api";
import type { ServiceResponse } from "../services/api/types";
import NodeFeeManagerABI from "../services/eth/abi/NodeFeeManager.json";

const Home: React.FC = () => {
  const [profileCount, setProfileCount] = useState<number | "Loading...">("Loading...");
  const [pendingCount, setPendingCount] = useState<number | "Loading...">("Loading...");
  const [verifiedCount, setVerifiedCount] = useState<number | "Loading...">("Loading...");

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

  useEffect(() => {
    api.get<ServiceResponse<number>>(getServices().user.getProfileCount).then(({ data }) => {
      setProfileCount(data.data);
    });
    api.get<ServiceResponse<number>>(getServices().user.getProfileCountPending).then(({ data }) => {
      setPendingCount(data.data);
    });
    api.get<ServiceResponse<number>>(getServices().user.getProfileCountVerified).then(({ data }) => {
      setVerifiedCount(data.data);
    });
  }, []);

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
    <div className="flex flex-col gap-6">
      <div className="mb-6">
        <Banner />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Total Profiles" value={profileCount.toString()} />
        <StatCard title="Pending KYC" value={pendingCount.toString()} />
        <StatCard title="Verified KYC" value={verifiedCount.toString()} />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Total Nodes" value={Number(data as string).toString()} />
        <StatCard title="Staked Nodes" value="" />
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            {greatherThanZero && (
              <div>
                <DataGrid
                  rows={nodeOwners?.map((item, id) => ({ id, owner: item?.result as unknown as string })) || []}
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
            {/* <DataGrid /> */}
          </div>
          <div className="col-span-1">{/* <NodesByCountry /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
