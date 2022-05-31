var shell = require('shelljs');

//  --localSchemaFile=src/dev-server/schema.json

shell.exec(`npx apollo codegen:generate --localSchemaFile=server/schema.json --namespace=db --endpoint http://localhost:5000/graphql --target=typescript --includes=client/src/app/**/*.ts --tagName=gql --no-addTypename --watch --globalTypesFile=client/src/app/core/types/graphql-global-types.ts types`);

