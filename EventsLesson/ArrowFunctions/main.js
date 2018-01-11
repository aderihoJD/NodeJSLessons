var event = require('events').EventEmitter;

var ev = new event();

ev.on('myEvent', function(){
   console.log('Ordinary function: ');
   console.log(this);
});

exports.x = 10;

ev.on('myEvent', () => {
    console.log('Arrow function: ');
    console.log(this);
});


ev.emit('myEvent');