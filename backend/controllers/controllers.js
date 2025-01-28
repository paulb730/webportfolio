const {connect,getDb2,close_connection}=require('../models/DB_class')
const ObjectId=require('mongodb').ObjectId;


let coll1='Name'

//get all 
module.exports.get_tasks=async(req,res)=>{
    try {
        
        const db1 = getDb2();
        const collection1 = db1.collection(coll1);
        const data = await collection1.find({}).limit(20).toArray();
        console.log("data",data)
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
   }

//getsingle

module.exports.get_task_byID=async(req,res)=>{

    try {
        const {id}=req.params;
        const query = { _id: new ObjectId(id) };
        const data= await getDb2().collection(coll1).findOne(query);
        console.log(data)    
        res.status(200).json(data)
     
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
     
}
//post

exports.post_tasks= async (req,res)=>{

    try {
        const {name,age,charge,task}=req.body;
        const db2=getDb2();
        const collection1 = db2.collection(coll1);
        const result=await collection1.insertOne({name,age,charge,task});
        console.log('Task created:', result);
        res.status(200).send(result);
        } 
        catch (error) {
        res.status(400).json({error:error.message})
        
    }
  

}



//update 
exports.update_task=async(req,res)=>{
    const {id}=req.params 
    const db2=getDb2();
    const collection=db2.collection(coll1)
    const update=await collection.findOneAndUpdate({"_id": new ObjectId(id)},{$set:req.body});
    if (!update) {
        res.status(400).json({error:"there is no task to update"})
        
    } 
    res.json(update)
    
}


//delete
exports.delete_task=async(req, res)=>{
    const db2=getDb2();
    const {id}=req.params;
    const collection=db2.collection(coll1)
    const deleted=await collection.findOneAndDelete({"_id": new ObjectId(id)})
    if (!deleted){
        res.status(400).json({error: 'There is no deleted task to delete '})
    }
    res.json(deleted);
 }

 



