var event = require('events').EventEmitter;

var ev = new event();

var count = 0;


ev.on('newListener', function (event, listener) {
    if(event == 'myEvent'){
        console.log('myEvent was be added to ev.');
    }
});

ev.on('removeListener', function (event, listener) {
   if(event == 'myEvent'){
       console.log('myEvent was be removed from ev.');
   }
});


ev.on('myEvent', test);

console.log(ev.listenerCount('myEvent'));

ev.removeListener('myEvent', test);

console.log(ev.listenerCount('myEvent'));

function test(){
    console.log("My event!");
}