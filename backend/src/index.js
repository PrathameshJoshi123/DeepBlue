const express = require('express')
const cors = require('cors')
const { connectDb } = require('./connectDb/connectDb')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


connectDb().then(()=>{
    try{
        app.listen(1000, ()=>{
            console.log("Server connected successfully")
        })
    } catch(err){
        console.log("Server connection error", err)
    }
})