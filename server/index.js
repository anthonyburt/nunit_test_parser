import GraphQLClient  from 'graphql-request';
import test from './test';

test('PRODUCTION IS STILL WORKING!!!');

// use this instead for cookie support
global['fetch'] = require('fetch-cookie/node-fetch')(require('node-fetch'))

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjdz30buh2px90159fuptggd5')

const query = `{
    allTestResultses(orderBy: createdAt_DESC) {
        id
        createdAt
        products {name}
        os
        browser
        testname
        buildNumber
        testStatus
  }
}`

client.request(query).then(data => console.log(data))