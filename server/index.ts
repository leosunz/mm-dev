import bodyParser = require("body-parser");
const express = require("express");
// const { postgraphile } = require("postgraphile");
// const { NodePlugin } = require("graphile-build");
// const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");
const enforce = require("express-sslify");

// import * as postgraphile_tags from "./postgraphile-tags";
const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// const config = {
// Reads from pm2.config.js ENVs - or /script/env_dev.sh
// user: process.env.SQL_USER,
// password: process.env.SQL_PASSWORD,
// database: process.env.SQL_DATABASE,
// host: process.env.SQL_HOST,
// port: +process.env.SQL_PORT,
// firebaseProject: process.env.FIREBASE_PROJECT,
// };
// console.log("Running as user: " + config.user);
// console.log("Running as pwd: " + config.password.substring(0, 4) + "*****");
// console.log("Running on db: " + config.database);
// console.log("Running on db: " + config.database);

// const opts = {
//   subscriptions: true,
//   watchPg: true,
//   dynamicJson: true,
//   setofFunctionsContainNulls: false,
//   ignoreRBAC: false,
//   ignoreIndexes: false,
//   showErrorStack: true,

//   extendedErrors: ["hint", "detail", "errcode"],
//   // skipPlugins: [NodePlugin],
//   skipPlugins: [],
//   appendPlugins: [
//     require("@graphile-contrib/pg-simplify-inflector"),
//     ConnectionFilterPlugin,
//     postgraphile_tags,
//   ],
//   exportJsonSchemaPath: "schema.json",
//   exportGqlSchemaPath: "schema.graphql",
//   graphiql: true,
//   enhanceGraphiql: true,
//   enableQueryBatching: true,
// };
// console.log(opts);
// app.use(postgraphile(config, "app_public", opts));
// app.use(
//   postgraphile(config, "app_public", {
// appendPlugins: [ConnectionFilterPlugin],
//     watchPg: true,
//     graphiql: true,
//     enhanceGraphiql: true,
//   })
// );
const { exec } = require("child_process");
exec(
  "postgraphile  \
  --connection postgres://ansctiyfxsvwbh:6c0a2d83ac99ab7a987f0911a19683bddbdb3a1f227a640f5ce21c4b847ef399@ec2-52-30-67-143.eu-west-1.compute.amazonaws.com:5432/d7jbstt4jqjh8m --schema app_public --watch --cors",
  (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
);
app.use(express.static(__dirname + "/client"));
app.use("/*", express.static(__dirname + "/client"));

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log("app running: http://localhost:" + port);
});

module.exports = app;
