'use strict'

var count = 0;

var print = function(){
    count++;
    console.log('Click - ', count, '\n');
}

var event = require('events');

var ev = new event.EventEmitter;

ev.on('click', print);
ev.addListener('click', print);
ev.once('click', print);


ev.emit('click');
ev.emit('click');




