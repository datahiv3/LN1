import { Card, Stack } from "@mui/joy";
import type React from "react";
import Link from "../../components/Layout/Link";

const Overview: React.FC = () => {
  return (
    <>
      <Stack spacing={2}>
        <Card>
          <div>
            <div>
              Go to <Link to="/admin/whitelisted">Whitelisted</Link>
            </div>
            <div>
              Go to <Link to="/admin/kyc">KYC</Link>
            </div>
          </div>
        </Card>
      </Stack>
    </>
  );
};

export default Overview;
