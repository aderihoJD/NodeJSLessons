var event = require('events').EventEmitter;

var ev = new event();

ev.on('myEvent', test);
console.log('Listener added');

ev.emit('myEvent');

ev.removeListener('myEvent', test);
console.log("Listener removed!");

ev.emit('myEvent');


function test() {
    console.log("Test function!");
}