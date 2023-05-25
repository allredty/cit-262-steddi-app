
const express = require("express");
const app = express();

app.get("/tyler", (req, res)=>{
    res.send("Hello Tyler! You LOSER!!!")
})

app.get("/", (req, res)=>{
    
    res.send("Welcome to my backend API! Loser!!!")
})

app.listen(3000, ()=> {

    console.log("Listening");
})