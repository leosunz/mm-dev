var shell = require('shelljs');

//  --localSchemaFile=src/dev-server/schema.json

shell.exec(`npx apollo codegen:generate --namespace=db --endpoint http://localhost:8081/graphql --target=typescript --includes=client/src/app/**/*.ts --tagName=gql --no-addTypename --watch --globalTypesFile=client/src/app/core/types/graphql-global-types.ts types `);

