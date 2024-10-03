export const stage = process.env.STAGE!;
export const env = process.env.ENV!;

export const isProduction = stage === "production";
export const isStaging = env === "staging";

export const mongodbUrl = process.env.MONGODB_URL!;
