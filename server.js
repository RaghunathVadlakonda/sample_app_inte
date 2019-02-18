const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

console.log('Running');

app.get('/api/customers', (req, res) => {
    const customers = [
        { id : 1 , 'firstname' : 'Raghu', 'lastname': 'nath'},
        { id : 2 , 'firstname' : 'Rajani', 'lastname': 'Bale'},
        { id : 3 , 'firstname' : 'Ajji', 'lastname': 'Gadu'},
        { id : 4 , 'firstname' : 'Radha', 'lastname': 'Vadla'},
    ];
    res.json(customers);
});

app.listen(port, (req, res) => {
    console.log("server started on port: 5000");
});