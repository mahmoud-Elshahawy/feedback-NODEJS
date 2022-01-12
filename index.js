const express = require('express');
const res = require('express/lib/response');
// Create Express APP 
const app = express(); 

app.get('/', (req,res) =>{
    res.send({hi: 'there'});
});

// Constant Port number assigned dynamically through deployment enviroment or 5000 through development enviroment
const PORT = process.env.PORT || 5000;
app.listen(PORT);