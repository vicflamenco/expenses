const express = require('express');
//const path = require('path');
const appRouter = require('./routes/appRouter');

const PORT = process.env.PORT || 8080;
const app = express();

//app.use(express.static('public'));
appRouter(app);

app.listen(PORT, () => {
    console.log("Server up and listening on port: " + PORT);
});