const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello aws!')
})

app.listen(3000,()=>{
    console.log('start server port 3000')    
})