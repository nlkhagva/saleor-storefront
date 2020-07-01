module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "unurshop",
      url: "http://localhost:8000/graphql/",
    },
  },
};
