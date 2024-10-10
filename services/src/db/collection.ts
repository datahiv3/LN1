import type { Document } from "mongodb";
import { client } from "./index";

export const dbCollection = async <T extends Document>(databaseName: string, collectionName: string) => {
  const db = client.db(databaseName);
  const collection = db.collection<T>(collectionName);

  return { collection };
};

export const dbCreateTimeCollection = async <T extends Document>(databaseName: string, collectionName: string) => {
  const db = client.db(databaseName);

  const collections = await db.listCollections({ name: collectionName }, { nameOnly: true }).toArray();
  const existed = collections.some((name) => name.name === collectionName);

  if (!existed) {
    return await db.createCollection<T>(collectionName, {
      timeseries: {
        timeField: "timestamp",
        metaField: "metadata",
        granularity: "seconds",
      },
    });
  }

  return db.collection<T>(collectionName);
};
