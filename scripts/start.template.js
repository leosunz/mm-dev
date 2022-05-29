var shell = require('shelljs');


shell.env['SQL_USER'] = "postgres";
shell.env['SQL_PASSWORD'] = "postgres";
shell.env['SQL_DATABASE'] = "mm-dev";
shell.env['SQL_HOST'] = "localhost";
shell.env['SQL_PORT'] = "5432";
shell.env['PORT'] = "8081"; 

shell.exec('node server/dist/dev/index.js');
