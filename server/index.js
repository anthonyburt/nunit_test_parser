import request from 'graphql-request';

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


// example of connecting to graphcool
request(end_point, query).then(data => console.log(data));

// example of reading test_results.xml file then outputting a specific node from the xml file
var xml2js = require('xml2js');
var xml;

var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'test_results.xml');
var extractedData = '';

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
            var parser = new xml2js.Parser();
            parser.parseString(data, function(err,result){
                 var extractedData = result['test-run']['passed'];
                 console.log(extractedData);
            });
    } else {
        console.log(err);
    }
});

