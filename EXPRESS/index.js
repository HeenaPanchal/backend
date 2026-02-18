const express = require("express")
const app = express()
app.use(express.json()) //middelware
app.get("/",(req,res)=>{
    const obj = {
        name:"Heena",
        age:23,
        from:"Ahmedabad"
    }
    res.send(obj)
})

app.post("/login",(req,res)=>{
const {userID,password} =req.body
    res.status(200).json({ name:"Heena",
        age:23,
        from:"Ahmedabad",
        data:{
            userID,
            password
        }
    })
})


app.get("/products",(req,res)=>{
    const {uuid,password} = req.query
    res.send({
        uuid,
        password
    })
})

app.get("/product/:id",(req,res)=>{
const {id} = req.params
res.send({
    id,
    name:`Product ${id}`,
    price:500
})
})
app.listen("8000",()=>console.log("SERVER RUNNIGN ON PORT 8000"))