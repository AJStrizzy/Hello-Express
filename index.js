const express = require('express');
const app = express();


app.get('/', function(reg, res) {
    res.send('Hello, SEI World');
});

app.listen(8000);


