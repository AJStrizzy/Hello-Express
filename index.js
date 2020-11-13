const express = require('express');
const app = express();


app.get('/', function(reg, res) {
    res.send('Hello, SEI World');
});

app.get('/about', function(reg, res) {
    res.send('This is the about page.');

});


app.get('/blog', (reg, res) => {
    res.send('Welcome to my blog');
});

app.listen(8000);