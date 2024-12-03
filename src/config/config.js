const config = {
  api: {
    baseEndpoint: 'https://jsonplaceholder.typicode.com', // process.env.EXPO_PUBLIC_API_URL,
  },
  ui: {
    componentsConfig: {
      searchInputDelay: 300,
      dataTableRecordsLimit: 200,
      dataTablePageSize: 20,
    },
    users: {
      pageSize: 20,
      recordsPerRequest: 200,
      profilePicture: {
        width: 1280,
        height: 720,
      },
    },
  },
};

export default config;
