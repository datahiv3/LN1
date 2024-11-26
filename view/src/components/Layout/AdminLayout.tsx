import { Stack, Tab, TabList, Tabs } from "@mui/joy";
import { tabClasses } from "@mui/joy/Tab";
import type React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DefaultPage from "./DefaultPage";

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <DefaultPage>
      <Stack spacing={2}>
        <Tabs
          value={location.pathname}
          onChange={(_, value) => {
            navigate(value as string);
          }}
        >
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
            <Tab disableIndicator value="/admin">
              Overview
            </Tab>

            <Tab disableIndicator value="/admin/kyc">
              KYC
            </Tab>
          </TabList>
        </Tabs>
        <div>
          <Outlet />
        </div>
      </Stack>
    </DefaultPage>
  );
};

export default AdminLayout;
