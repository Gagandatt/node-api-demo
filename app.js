const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Hello World!')
=======

    res.send('Hello World from gagan side')

>>>>>>> 69c27b0d041b0d46e5021bd065e189af9e99bde0
    res.end()
})

app.get('/search', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.resolve('data.json'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
