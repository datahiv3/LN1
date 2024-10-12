import { Code, Group } from "@mantine/core";
import { useStore } from "@nanostores/react";
import { LinkSquare } from "@styled-icons/fluentui-system-regular";
import { IconCirclePlus, IconKey, IconNetwork, IconSettings, IconTable } from "@tabler/icons-react";
import type React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isAdmin, isConnected } from "../../features/auth";
import { currentKycStatus } from "../../features/user";
import { kycPendingBadge } from "../../services/profile/KycPendingBadge";
import classes from "./Navbar.module.css";

const data = [
  { link: "/profile", label: "Get Started", icon: IconKey },
  { link: "/create", label: "Create a New Nodes", icon: IconCirclePlus },
  { link: "/nodes", label: "My Nodes", icon: IconNetwork },
  { link: "/", label: "Nodes Explorer", icon: IconTable, direct: true },
  { link: "/admin", label: "Administrator", icon: IconSettings, isAdmin: true },
];

const Sidebar: React.FC = () => {
  const $isAdmin = useStore(isAdmin);
  const $currentKycStatus = useStore(currentKycStatus);
  const connected = useStore(isConnected);
  const location = useLocation();
  const navigate = useNavigate();

  const links = data.map((item) => {
    if (item.isAdmin && !$isAdmin) return;

    return (
      <a
        className={classes.link}
        data-active={(item.direct ? item.link === location.pathname : location.pathname.startsWith(item.link)) || undefined}
        href={item.link}
        key={item.label}
        onClick={(event) => {
          event.preventDefault();
          navigate(item.link);
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    );
  });

  return (
    <div className="flex flex-col justify-between h-[100%]">
      {/* head */}

      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <div className="text-3xl font-bold">Legalese Node</div>
          {connected && <div className="flex items-center gap-2">KYC {kycPendingBadge($currentKycStatus)}</div>}
          <Code fw={700}>v0.1.0</Code>
        </Group>
        {links}
      </div>

      {/*  */}
      <div className="pt-12">
        <ul>
          <li className="underline">
            <a href="http://datahive.network" target="_blank" rel="noopener noreferrer">
              <LinkSquare size={16} /> Back to Home
            </a>
          </li>
          <li className="underline">
            <a href="https://www.datahive.network/resources" target="_blank" rel="noopener noreferrer">
              <LinkSquare size={16} /> Blogs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
