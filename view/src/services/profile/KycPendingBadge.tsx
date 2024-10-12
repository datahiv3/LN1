import { Badge } from "@mantine/core";
import type { KYCStatus } from "../../types/Profile";

export const kycPendingBadge = (kycStatus: KYCStatus) => {
  switch (kycStatus) {
    case "pending":
      return <Badge color="yellow">Pending</Badge>;
    case "approved":
      return <Badge color="green">Approved</Badge>;
    case "rejected":
      return <Badge color="red">Rejected</Badge>;
    case "cancelled":
      return <Badge color="gray">Cancelled</Badge>;
    default:
      return <Badge color="gray">Not Started Yet</Badge>;
  }
};

export const getKycPendingColor = (kycStatus: KYCStatus) => {
  switch (kycStatus) {
    case "pending":
      return "yellow";
    case "approved":
      return "green";
    case "rejected":
      return "red";
    case "cancelled":
      return "gray";
    default:
      return "gray";
  }
};
