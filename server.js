const express=require("express");
const app=express();
require('dotenv').config()
const dbconnect=require("./databaseconnect/dbconnect");
app.use(express.json());
const usersroutes=require('./routes/usersroutes');

const adminroutes = require("./routes/adminroutes");

app.use('/api/user',usersroutes);
app.use("/api/admin", adminroutes);
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Node server started at the port ${port}`));
