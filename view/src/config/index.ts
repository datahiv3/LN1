const stage = import.meta.env.STAGE! as string;
const googleGA = import.meta.env.GOOGLE_GA! as string;

export const isProduction = stage === "production";

export const config = { isProduction,googleGA };
