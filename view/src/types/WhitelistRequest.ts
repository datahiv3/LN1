export type UserWhitelistRequest = {
  _id?: string;

  evmAddress: string;
  additional: string;

  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};
