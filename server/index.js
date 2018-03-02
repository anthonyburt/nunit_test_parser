import request from 'graphql-request';
import test from './test';

test('PRODUCTION IS STILL WORKING!!!');

const end_point = 'https://api.graph.cool/simple/v1/cjdz30buh2px90159fuptggd5'

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

request(end_point, query).then(data => console.log(data))