const express = require("express");
const app = express();

app.use(bodyParser);
app.get("/",function(req,res){
    res.send("Hello this is Rabin");
})

//creating our server in port 3000
app.listen(3000,function(){
    console.log("Server started at port 3000");
})