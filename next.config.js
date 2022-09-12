const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "anzemator",
        mongodb_password: "CHELmen11",
        mongodb_cluster: "cluster0",
        mongodb_database: "my-blog-database-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "anzemator",
      mongodb_password: "CHELmen11",
      mongodb_cluster: "cluster0",
      mongodb_database: "my-blog-database",
    },
  };
};
