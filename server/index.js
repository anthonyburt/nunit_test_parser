import GraphQLClient  from 'graphql-request';
import test from './test';

test('PRODUCTION IS STILL WORKING!!!');

// use this instead for cookie support
global['fetch'] = require('fetch-cookie/node-fetch')(require('node-fetch'))

const client = new GraphQLClient('my-endpoint')

const query = `{
  Movie(title: "Inception") {
    releaseDate
    actors {
      name
    }
  }
}`

client.request(query).then(data => console.log(data))