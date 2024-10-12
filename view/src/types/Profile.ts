export type Profile = {
  _id?: string;

  firstName: string;
  lastName: string;

  email: string;

  countryCode: string;
  phoneNumber: string;

  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  kycStatus: KYCStatus;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  evmAddress: string;
  version: number;
};

export type KYCStatus = "pending" | "approved" | "rejected" | "cancelled" | "not started yet";
