// Para inicial el Servidor --- npm run star

const { create } = require("domain");
const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path")
const app = express();
const db = new sqlite3.Database('mi_base_datos.db');// INCOMPLETO!!!!


app.get("/",(req,res)=>{

res.sendFile(path.join(__dirname+"/index.html"));

})
app.listen(3000,()=>{
    console.log("Server running on port ", 3000);
});