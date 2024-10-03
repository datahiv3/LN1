export const cacheOptions = {
  max: 500,

  maxSize: 50_000,
  sizeCalculation: () => {
    return 1;
  },

  ttl: 1000 * 60 * 1, // 1 minutes

  allowStale: false,

  updateAgeOnGet: false,
  updateAgeOnHas: false,
};
