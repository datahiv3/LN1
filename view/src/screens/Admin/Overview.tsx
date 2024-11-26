import { Card, Stack } from "@mui/joy";
import type React from "react";
import Link from "../../components/Layout/Link";

const Overview: React.FC = () => {
  return (
    <>
      <Stack spacing={2}>
        <Card>
          <ul>
            <li>
              <Link to="/admin/kyc">KYC</Link>
            </li>
          </ul>
        </Card>
      </Stack>
    </>
  );
};

export default Overview;
