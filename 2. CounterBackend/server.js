const express=require('express')
const app=express()
const HOSTNAME = "localhost"
const PORT = 3000
let counter=0
app.get("/", (req, res) => {
    res.json({ 'counter':counter })
})
app.get("/increment", (req, res) => {
    counter++
    res.json({ 'counter':counter })
})
app.get("/decrement", (req, res) => {
    counter--
    res.json({ 'counter':counter })
})
app.listen(PORT,(err)=>{
    if(err){
        console.log('Error in Starting Server')
    }else{
        console.log(`The Server is Running on ${HOSTNAME}:${PORT}`)
    }
})