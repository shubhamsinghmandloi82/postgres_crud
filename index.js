const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const bodyParser = require('body-parser')
const router = require('./src/routes/index')
const client = require('./src/config/db')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/v1',router)
app.get('/test',(req,res)=>{
    res.json("test")
})

app.listen(port,()=>{
    console.log("Port is running at port", port)
})
