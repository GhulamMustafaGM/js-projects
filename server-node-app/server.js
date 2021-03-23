
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('This is home page in node javascript')
});

app.get('/services', (req, res) => {
    res.send('This is data from backend which is written in node javascript application');
});

app.listen(5000, () => {
    console.log(`Server started on port`);
});



// npm init
// npm i express
// npm i nodemon 