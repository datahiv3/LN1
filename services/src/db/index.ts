import { MongoClient } from "mongodb";
import { mongodbUrl } from "../config";

export const client = new MongoClient(mongodbUrl);
