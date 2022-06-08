import bodyParser = require("body-parser");
const express = require("express");
const { postgraphile } = require("postgraphile");
// const { NodePlugin } = require("graphile-build");
const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");
const enforce = require("express-sslify");

require("dotenv").config();

// import * as postgraphile_tags from "./postgraphile-tags";
const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  // app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

const db_url = 
  process.env.NODE_ENV === "production" ? 
    "postgres://postgres:aaksBakwy23@mm-pre.cea22jn08dga.eu-central-1.rds.amazonaws.com/mmpredb" : 
    "postgres://postgres:postgres@localhost/mmpredb";

console.log('DB_URL => ', db_url);
const { exec } = require("child_process");
exec(
  `postgraphile --connection ${db_url} --schema app_public --watch --cors --host 0.0.0.0`,
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
