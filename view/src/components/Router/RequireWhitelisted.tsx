import { useQuery } from "@apollo/client";
import { Alert } from "@mantine/core";
import type React from "react";
import { type PropsWithChildren, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAccount } from "wagmi";
import Loading from "../../screens/Loading";
import { ALL_WHITELISTED_QUERY, parseWhitelistData } from "../../services/api/whitelisted/parseWhitelist";

const RequireWhitelisted: React.FC<PropsWithChildren> = () => {
  const { data, loading } = useQuery<{
    whitelists?: {
      account: string;
      whitelisted: boolean;
      blockTimestamp: string;
    }[];
  }>(ALL_WHITELISTED_QUERY, {
    fetchPolicy: "network-only",
    pollInterval: 1000,
  });
  const account = useAccount();

  const [allow, setAllow] = useState(false);
  const parsedData = parseWhitelistData(data);

  useEffect(() => {
    if (parsedData?.whitelists) {
      setAllow(
        parsedData.whitelists.some((item) => {
          return item.account.toLocaleLowerCase() === account.address?.toLocaleLowerCase();
        }),
      );
    }
  }, [parsedData, account.address]);

  if (loading) return <Loading />;

  if (!allow)
    return (
      <div>
        <Alert variant="light" color="yellow">
          You are not in the whitelist. Please contact the admin.
        </Alert>
      </div>
    );

  return <Outlet />;
};

export default RequireWhitelisted;
