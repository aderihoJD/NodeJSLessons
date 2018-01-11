
var url = require('url');

var mockUrl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

var mockUrlObj = url.parse(mockUrl);

console.log(mockUrlObj);

var formattedUrl = url.format(mockUrlObj);

console.log(formattedUrl);

var resolvedUrl = url.resolve('http://example.com/one/two', '/two/three');
console.log(resolvedUrl);