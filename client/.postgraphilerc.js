module.exports = {
  options: {
    connection: "postgres://postgres:d1wqse@localhost/mm-dev",
    schema: ["app_public"],
    // jwtSecret: "myJwtSecret",
    defaultRole: "myapp_anonymous",
    // jwtTokenIdentifier: "myApp.jwt_token",
    watch: true,
  },
};
