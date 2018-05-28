const PORT = 3000;

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function() {
    console.log("Server up and listening on port: " + PORT);
});