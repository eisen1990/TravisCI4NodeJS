/**
 * Travis CI Test
 *  build passing
 */
/*
console.log('Travis CI Test');
var test_var = 123;
console.log(test_var, 'variable');
*/

var http = require('http');

var server = http.createServer(function (req, res) {
    //console.log('test');
} 
);

server.listen(8080);
