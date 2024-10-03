import koaCash from "koa-cash";
import { LRUCache } from "lru-cache";
import { cacheOptions } from "../utils/cache";

const cache = new LRUCache(cacheOptions);

export const cacheMiddleware = koaCash({
  get: async (key) => {
    return cache.get(key);
  },
  set: async <T>(key: string, value: T) => {
    cache.set(key, value);
  },
});
