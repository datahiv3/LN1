import type { Db } from "mongodb";
import { client } from ".";
import { stage } from "../config";

export const createDBCollName = (prefix: string, name: string) => {
  return `${prefix}__${name}`;
};

export class DbModel {
  public databaseName: string;
  public db: Db;

  public constructor(databaseName: string) {
    this.databaseName = `datahive__${databaseName}__${stage}`;
    this.db = client.db(this.databaseName);
  }

  private createCollectionName(collectionName: string) {
    return createDBCollName(this.databaseName, collectionName);
  }

  public async createCollection<T>(collectionName: string, isTimeSeries = false) {
    if (isTimeSeries) {
      const collections = await this.db.listCollections({ name: collectionName }, { nameOnly: true }).toArray();
      const existed = collections.some((name) => name.name === collectionName);

      if (!existed) {
        return await this.db.createCollection<T>(collectionName, {
          timeseries: {
            timeField: "timestamp",
            metaField: "metadata",
            granularity: "seconds",
          },
        });
      }

      return this.db.collection<T>(collectionName);
    }

    const collection = this.db.collection<T>(this.createCollectionName(collectionName));

    return collection;
  }
}
