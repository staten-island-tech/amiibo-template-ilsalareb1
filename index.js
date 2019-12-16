const path = require("path");
const express = require("express");
const app = express();



app.get("/this is so cool", (req, res)=>{
    res.send("Is this working?Lets see");
});
app.listen(3000, ()=> {
    console.log("Listening on Port 3000");
});