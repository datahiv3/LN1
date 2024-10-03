import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <nav className="border-r border-color-[#ddd] lg:w-[320px] py-6">
      <div className="pt-8 flex flex-col justify-between h-[100%]">
        <div className="flex flex-col gap-3">
          <div className="text-3xl font-bold">Legalese Node</div>
          <div>
            Lorem ipsum dolor sit, <br /> amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="pt-12 flex-1">
          <ul className="">
            <li className="underline">
              <Link to="/">+ Nodes</Link>
            </li>
            <li className="underline">
              <Link to="/my-nodes">+ My Nodes</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="underline">
              <a href="http://datahive.network" target="_blank" rel="noopener noreferrer">
                Back to Home
              </a>
            </li>
            <li className="underline">
              <a href="https://www.datahive.network/resources" target="_blank" rel="noopener noreferrer">
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
