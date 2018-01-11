var fs = require('fs');

console.log("Going to open file!");

fs.open('demofile.txt', 'w+', function (err, data) {
   console.log('opening file!');
   if (err) {
       console.log(err);
   }
   else {
       fs.write(data, 'Ilyas file', {encoding: 'utf-8'}, function (err, writed, string) {
          console.log('writing to file!');

          if (err) throw err;

          console.log(writed);
          console.log(string);
       });

       fs.readFile('demofile.txt', function (err, data) {

           console.log("reading file!")

           if (err) {
               console.log(err);
           }
          console.log(data);
       });
   }
});