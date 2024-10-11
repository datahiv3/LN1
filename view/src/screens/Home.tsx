import type React from "react";
import DataGrid from "../components/Dashboard/DataGrid";
import NodesByCountry from "../components/Dashboard/NodesByCountry";
import StatCard from "../components/Dashboard/StatCard";
import Banner from "../components/Home/Banner";

const Home: React.FC = () => {
  return (
    <div className="p-12 pr-0">
      <div className="mb-6">
        <Banner />
      </div>

      <span className="italic">(mocked up, implementing Oct 12)</span>
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Nodes" value="100" />
        <StatCard title="Whitelisted" value="500" />
        <StatCard title="Verified KYC" value="100" />
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <span className="italic">(mocked up, implementing Oct 12)</span>
            <DataGrid />
          </div>
          <div className="col-span-1">
            <span className="italic">(mocked up, Oct 12)</span>
            <NodesByCountry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
