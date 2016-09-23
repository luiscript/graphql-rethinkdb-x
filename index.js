const { graphql } = require('graphql');
const readline = require('readline');

const mySchema = require('./schema/main');

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rli.question('Client Request: ', inputQuery => {
  graphql(mySchema, inputQuery).then(result => {
    console.log('Server Anwswer: ', result.data);
  });
  rli.close();
});
