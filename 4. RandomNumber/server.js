const express=require('express')
const app=express()
const HOSTNAME = "localhost"
const PORT = 3000
app.get("/random", (req, res) => {
    res.json({ random: Math.floor(Math.random()*10) })
})
app.listen(PORT,(err)=>{
    if(err){
        console.log('Error in Starting Server')
    }else{
        console.log(`The Server is Running on ${HOSTNAME}:${PORT}`)
    }
})