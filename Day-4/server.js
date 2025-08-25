const express = require('express')

const app = express()

// notes- title and description
// get , post , patch , delete
// req-body,query,params

let notes = []

// Middleware to parse JSON
app.use(express.json())

app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.json({
       msg : "notes is created successfully",
       notes : notes
    })
})
app.listen(3000,()=>{
    console.log("Server is running at 3000 port")
})