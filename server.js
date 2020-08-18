// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/build')); //__dir and not _dir
app.all('*', function (req, res) {
    res.redirect('/');
});
const port = 8080; // you can use any port
app.listen(port);
console.log('server on: ' + port);
