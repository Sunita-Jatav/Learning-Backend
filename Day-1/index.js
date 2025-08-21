console.log("Hello World");
// run without browser using cmd node file_name

// sharing of variables between two files
const accepted = require('./demo');
console.log(accepted);

// use of packages 
// first go to npmjs.com
// then install using npm i pack_name
//then do as per readme instruction
var catMe = require('cat-me');
console.log(catMe() );