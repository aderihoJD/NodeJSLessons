var event = require('events');

var emitter = new event.EventEmitter();

emitter.on('create', function () {
    console.log('Folder was created!');
});

emitter.emit('create');
