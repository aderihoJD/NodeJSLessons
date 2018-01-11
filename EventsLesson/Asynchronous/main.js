var event = require('events').EventEmitter;

var ev = new event();

ev.on('event', function () {
    setImmediate(function () {
        console.log("Listener # 1");
    });
});


ev.on('event', function () {
        console.log("Listener # 2");
});

ev.on('event', function () {
    setImmediate(function () {
        console.log("Listener # 3");
    });
});

ev.emit('event');