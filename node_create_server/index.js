const http = require("http")
const server =  http.createServer((req,res)=>{
    //http.incommingmessage 
    //http.serverresponse
    if(req.url == "/"){
        res.end("This is home page")
    }
    if(req.url == "/product"){
        res.end(("This is product page"))
    }
})

server.listen("8000",()=> {
    //port , host name
    console.log("Server listening...")
})