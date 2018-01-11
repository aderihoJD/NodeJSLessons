var event = require('events');

function ReadFile() {
    this.file = '';
}

ReadFile.prototype = new event.EventEmitter();

ReadFile.prototype.readDataFromFile = function (path, callback) {
    this.file = path;
    if (typeof callback == 'function') {
        this.on('readData', callback)
    }
    this._read();
};

ReadFile.prototype._read = function () {
    console.log('Loading...');
    var someDataFromFile = 'Text text text';
    console.log('Data was read');
    this.emit('readData', someDataFromFile);
}

module.exports.Reader = ReadFile;