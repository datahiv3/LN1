import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import { tabClasses } from "@mui/joy/Tab";
import type React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DefaultPage from "./DefaultPage";

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <DefaultPage>
      <Tabs defaultValue={0}>
        <TabList
          disableUnderline
          size="md"
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: "xl",
            bgcolor: "background.level1",
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: "sm",
              bgcolor: "background.surface",
            },
          }}
        >
          <Tab
            disableIndicator
            onChange={() => {
              navigate("/admin/whitelist");
            }}
          >
            Whitelist
          </Tab>
          <Tab disableIndicator>Fee</Tab>
          <Tab disableIndicator>Staking</Tab>
          <Tab disableIndicator>Nodes</Tab>
        </TabList>
        <TabPanel value={0}>
          <Outlet />
        </TabPanel>
        <TabPanel value={1}>
          <Outlet />
        </TabPanel>
        <TabPanel value={2}>
          <Outlet />
        </TabPanel>
        <TabPanel value={3}>
          <Outlet />
        </TabPanel>
      </Tabs>
    </DefaultPage>
  );
};

export default AdminLayout;
