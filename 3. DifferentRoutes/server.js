const express=require('express')
const app=express()
const HOSTNAME = "localhost"
const PORT = 3000
app.get("/", (req, res) => {
    res.json({ msg:`I Am Homepage` })
})
app.get("/about", (req, res) => {
    res.json({ msg:`I Am About Page` })
})
app.get("/contact", (req, res) => {
    res.json({ email: "support@pwskills.com" })
})
app.listen(PORT,(err)=>{
    if(err){
        console.log('Error in Starting Server')
    }else{
        console.log(`The Server is Running on ${HOSTNAME}:${PORT}`)
    }
})