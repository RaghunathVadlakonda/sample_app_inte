const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

console.log('Running');


app.listen(port, (req, res) => {
    console.log("server started on port: 5000");
});