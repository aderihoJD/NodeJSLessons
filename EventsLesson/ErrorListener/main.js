var event = require('events').EventEmitter;

var ev = new event();

ev.on('error', (err) => {
    console.log('Processing error!');
    console.log(err);
});

ev.emit('error', new Error('Test error'));