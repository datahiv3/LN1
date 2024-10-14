import { gql } from "@apollo/client";
import _ from "lodash";

export const parseWhitelistData = (data?: {
  whitelists?: {
    account: string;
    whitelisted: boolean;
    blockTimestamp: string;
  }[];
}) => {
  if (!data?.whitelists) {
    return data as undefined;
  }

  const whitelists = _.uniqBy(
    data.whitelists.map((item) => ({ ...item, blockTimestamp: Number(item.blockTimestamp) })).sort((a, b) => b.blockTimestamp - a.blockTimestamp),
    "account",
  ).filter((item) => item.whitelisted);

  return { whitelists };
};

export const ALL_WHITELISTED_QUERY = gql`
 query WhitelistedQuery {
    whitelists {
      account
      whitelisted
      blockTimestamp
    }
  }
`;

export type AddWhitelist = {
  address: string;
};
