var mssql = require('mssql');
var connection = require('./config');

module.exports = {
    tableRows: '',
    getAllItems: function(req, res){
        var self = this;
        self.tableRows = '';

        var request = new mssql.Request(connection);

        request.query('select * from TodoList');

        request.stream = true;

        request.on('row', function (row) {
           self.tableRows += '<tr>' + '<td>' + row.value + '</td>' + '<td>' + row.description + '</td>' + '<td>' + (row.complete === 1 ? 'yes' : 'no') + '</td>' + '</tr>'
        });

        request.on('done', function () {
           res.render('index', {data: self.tableRows});
        });
    }
}