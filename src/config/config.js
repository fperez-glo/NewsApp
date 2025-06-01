const config = {
  api: {
    // baseEndpoint: 'https://jsonplaceholder.typicode.com', // process.env.EXPO_PUBLIC_API_URL,
    baseEndpoint: 'https://www.jsonplaceholder.org',
  },
  ui: {
    componentsConfig: {
      searchInputDebounceTime: 300,
    },
    users: {
      pageSize: 20,
      recordsPerRequest: 200,
    },
  },
};

export default config;
