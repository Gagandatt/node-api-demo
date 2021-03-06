const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(' <h1> Hello World from gagan side </h1>')
    res.end()
})

app.get('/search', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.resolve('data.json'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
