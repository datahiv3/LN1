import { Card, Stack, Typography } from "@mui/joy";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { ethers } from "ethers";
import lodash from "lodash";
import type React from "react";
import { NumericFormat } from "react-number-format";
import { v4 } from "uuid";
import { useAccount, useReadContract, useReadContracts } from "wagmi";
import DefaultPage from "../../components/Layout/DefaultPage";
import { contracts } from "../../config";
import NodeStakingABI from "../../services/eth/abi/NodeStaking.json";
import { tiers } from "./tiers";

const MyNodes: React.FC = () => {
  const account = useAccount();

  const { data: userStakeIndex } = useReadContract({
    address: contracts.NodeStaking,
    abi: NodeStakingABI,
    functionName: "userStakeIndex",
    args: [account.address],
  });

  const nodeIds = new Array(Number(userStakeIndex || 0))
    .fill({
      address: contracts.NodeStaking,
      abi: NodeStakingABI as [],
      functionName: "userStakeNodeId",
      args: [0],
    })
    .map((_, id) => ({
      address: contracts.NodeStaking,
      abi: NodeStakingABI as [],
      functionName: "userStakeNodeId",
      args: [account.address, id],
    }));

  const { data: nodeIdsData } = useReadContracts({
    contracts: nodeIds,
    query: {
      enabled: userStakeIndex !== undefined && nodeIds.length > 0,
    },
  });

  const { data: stakedAmounts } = useReadContracts({
    contracts: nodeIds.map((_, index) => {
      return {
        address: contracts.NodeStaking,
        abi: NodeStakingABI as [],
        functionName: "userStakeNodeIdAmount",
        args: [account.address, index],
      };
    }),
    query: {
      enabled: userStakeIndex !== undefined && nodeIdsData !== undefined,
    },
  });

  const columns: GridColDef<{ nodeId: number; id: string }[][number]>[] = [
    {
      field: "nodeId",
      headerName: "Node ID",
      sortable: false,
      minWidth: 100,
    },
    {
      field: "stage",
      headerName: "Stage",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "tier",
      headerName: "Tier",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "fee",
      headerName: "Fee Paid",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "allocation",
      headerName: "Allocation",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "stakingFactor",
      headerName: "Staking Factor",
      sortable: false,
      minWidth: 150,
    },
    {
      field: "stakedAmount",
      headerName: "Staked Amount",
      sortable: false,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            $<NumericFormat value={params.value} displayType="text" thousandSeparator decimalScale={2} />
          </>
        );
      },
    },
    {
      field: "maxStaking",
      headerName: "Max Staking",
      sortable: false,
      minWidth: 150,
    },
  ];

  const parsedNodeIdsData = nodeIdsData?.map((item, index) => {
    const nodeId = Number(item?.result);

    let tier = 0;
    let allocation = 0;

    for (const itemTier of tiers) {
      allocation += itemTier.allocation;
      if (nodeId < allocation) {
        break;
      }
      tier++;
    }

    const current = tiers[tier];

    return {
      id: v4(),
      nodeId,
      fee: lodash.ceil(current.fee),
      tier: current.tier,
      stage: current.stage,
      allocation: current.allocation,
      stakingFactor: current.stakingFactor,
      stakedAmount: ethers.formatEther(stakedAmounts?.[index]?.result || "0").toString() || 0,
      maxStaking: lodash.ceil(current.fee) * current.stakingFactor || 0,
    };
  });

  return (
    <DefaultPage>
      <Stack spacing={2}>
        <Card>
          <Typography level="title-lg">My Nodes</Typography>

          <div>
            <DataGrid
              rows={parsedNodeIdsData || []}
              getRowId={(row) => row.id}
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
        </Card>
      </Stack>
    </DefaultPage>
  );
};

export default MyNodes;
