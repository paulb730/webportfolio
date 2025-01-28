const express= require('express');
const tasksroutes= require("./routes/restapitask");
const frontroutes=require("./routes/restapifront");
const { connect,set_schema_db1,set_schema_db2 } = require('../backend/models/DB_class');
require('dotenv').config();
const app =express();


//middleware
app.use(express.json())

app.use((req,res,next )=>{
console.log(req.path,req.method)
next()
})



app.use('/api/tasks',tasksroutes)
app.use('/api/front',frontroutes)


const PORT = process.env.PORT || 5000;


connect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}).catch(error=>{
    console.error('Error conecting to MONGO DB',error)
})

set_schema_db1()
set_schema_db2()




