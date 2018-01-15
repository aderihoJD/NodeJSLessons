var mssql = require('mssql');
var displayHandler = require('./displayHandler');

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
           self.tableRows += '<tr>' + '<td>' + row.value + '</td>' + '<td>' + row.description + '</td>' + '<td>' + (row.complete  ? 'yes' : 'no') + '</td>' + '</tr>'
        });

        request.on('done', function (affected) {
            console.log('show items!');
           res.render('index', {data: self.tableRows});
        });
    },

    insertItem: function (data, req, res) {
        var inserts = {
            value: data.value,
            description: data.description,
            complete: data.complete
        }

        var ps = new mssql.PreparedStatement(connection);

        ps.input('value', mssql.Text);
        ps.input('description', mssql.Text);
        ps.input('complete', mssql.Int);

        ps.prepare("insert into TodoList (value, description, complete) values (@value, @description, @complete)", function (err) {
           if (err) console.log(err);
           var request = ps.execute(inserts, function (err) {
              if (err) console.log(err);
              console.log('add item');
              ps.unprepare();
           });
        });
    }
}