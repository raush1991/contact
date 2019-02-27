var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to database
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log("Conneted to mongodb on port 27017");
})

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log("Error in connection" + err);
    }
})


//port no
const port = 3000;

//app.use('/api',route);

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

//testing server
app.get('/',(req,res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log("Sever started at port : " + port);
});