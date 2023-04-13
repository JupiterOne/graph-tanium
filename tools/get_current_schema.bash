#!/usr/bin/env bash

set -euo pipefail

URL=$1
TOKEN=$2

# This is script is to guide the updating of the SDL schema from the current
# introspection queries from the API.

# The primary value of this script in its current form is a guide for the
# steps for getting the necessary SDL that go graphql client generators
# seem to use as input

if [ -f "introspection_result.json" ]; then
    echo "Using already downloaded results, delete introspection_result.json to force a fetch"
else
    curl --fail --location --request POST "${URL}/plugin/products/gateway/graphql" \
    --header "session: ${TOKEN}" \
    --header 'Content-Type: application/json' \
    --output introspection_result.json \
    --data-raw '{"query":"fragment FullType on __Type {\n  kind\n  name\n  fields(includeDeprecated: false) {\n    name\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\nfragment InputValue on __InputValue {\n  name\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\nquery IntrospectionQuery {\n  __schema {\n    queryType {\n      name\n    }\n    mutationType {\n      name\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      locations\n      args {\n        ...InputValue\n      }\n    }\n  }\n}","variables":{}}'
fi

jq '.data' introspection_result.json > schema.json

# https://www.apollographql.com/blog/backend/schema-design/three-ways-to-represent-your-graphql-schema/#introspection-query-result-to-sdl
node <<EOF
    const { buildClientSchema, printSchema } = require("graphql");
    const fs = require("fs");

    const introspectionSchemaResult = JSON.parse(fs.readFileSync("schema.json"));
    const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult);
    const sdlString = printSchema(graphqlSchemaObj);
    fs.writeFileSync("schema.graphql", sdlString)
EOF