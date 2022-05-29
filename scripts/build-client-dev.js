var shell = require('shelljs');

shell.exec('(cd client && ng build --output-path ../server/dist/dev/client --watch)')