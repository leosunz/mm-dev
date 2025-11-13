module.exports = {
  flywayArgs: {
    url: "jdbc:postgresql://localhost/mm-dev",
    schemas: "app_public",
    locations: "filesystem:mm-sql-migrations/",
    user: "postgres",
    password: "del1996",
    sqlMigrationSuffixes: ".sql",
  },
};
