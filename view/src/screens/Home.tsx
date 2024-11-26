import type React from "react";
import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import StatCard from "../components/Dashboard/StatCard";
import Banner from "../components/Home/Banner";
import { contracts } from "../config";
import { api, getServices } from "../services/api";
import type { ServiceResponse } from "../services/api/types";
import NodeFeeManagerABI from "../services/eth/abi/NodeFeeManager.json";
import Nodes from "./Nodes/Nodes";

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
        <Nodes />
      </div>
    </div>
  );
};

export default Home;
