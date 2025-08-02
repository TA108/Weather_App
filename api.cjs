const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.urlencoded({extended:true}));

app.listen(3000, function(){
    console.log("Server Started")
})

app.get('/', (req, res) => {
    res.sendFile( __dirname + '/Hello.html');
})

app.get('/about', (req, res) => {
    res.send('about section');
})

app.get('/services', (req, res) => {
    res.send('services');
})


app.post("/", (req, res) => {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    console.log(result);
})