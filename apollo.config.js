module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "unurshop",
      url: "https://core.unurshop.com/graphql/",
    },
  },
};
