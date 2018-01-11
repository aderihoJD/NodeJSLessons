
var fs = require('fs');

var utils = require('util');

user = {
    fname: "Ilya",
    lname: "Aderiho",
    age: "21",
    position: "developer"
}

console.log("File writing...");

fs.writeFile('text.txt', utils.format('%j', user), function (err) {
   if (err){
       console.log(err);
       return;
   }
   console.log("File was wrote!");
});