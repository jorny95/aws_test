const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded(
    {extended:false,}
))

app.get('/',(req,res)=>{
    res.send('hello aws!')
})

app.post('/',(req,res)=>{
    console.log('POSTMAN으로 실행함!')
    res.json(req.body) 
})

app.listen(3000,()=>{
    console.log('start server port 3000')    
})