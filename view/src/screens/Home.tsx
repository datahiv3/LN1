import type React from "react";
import NodesByCountry from "../components/Dashboard/NodesByCountry";
import StatCard from "../components/Dashboard/StatCard";
import Banner from "../components/Home/Banner";

const Home: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <Banner />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Profiles" value="100" />
        <StatCard title="Pending KYC" value="500" />
        <StatCard title="Verified KYC" value="100" />
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">{/* <DataGrid /> */}</div>
          <div className="col-span-1">
            <NodesByCountry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
