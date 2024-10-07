import { adminAddresses } from "../config";

export const isAdmin = (address: string) => {
  const admins = adminAddresses.map((item) => item.toLocaleLowerCase());

  if (admins.includes(address.toLocaleLowerCase())) {
    return true;
  }

  return false;
};
