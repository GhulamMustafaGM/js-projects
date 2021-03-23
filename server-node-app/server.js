
const express = require('express')
const bodyParser=require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('This is home page in node javascript')
});

app.get('/services', (req, res) => {
    res.send('This is data from backend which is written in node javascript application');
});

app.post('/login', (req, res)=>{
    var username=req.body.username
    var password=req.body.password

    if(username=='javascript' && password=='password')
    {
        res.send('Login Successful');
    }
    else{
        res.send('Login Failed');
    }
});

app.listen(5000, () => {
    console.log(`Server started on port`);
});



// npm init
// npm i express
// npm i nodemon 