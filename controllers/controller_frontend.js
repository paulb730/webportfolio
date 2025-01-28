const {connect,getDb1,close_connection}=require('../models/DB_class')
const ObjectId=require('mongodb').ObjectId;
let coll2='SVGs'


exports.get_data_frontend=async(req,res)=>{
    try {
        const data = await getDb1().collection(coll2).find({}).limit(20).toArray();
        res.json(data);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   


exports.get_SVG_byID=async(req,res)=>{
    try {
        const {id}=req.params
        const query = { _id: new ObjectId(id) };
        const selected=await getDb1().collection(coll2).findOne(query);
        res.status(200).json(selected)
    } catch (error) {
        res.status(500).json({ error: error.message });
    
    }
    
}

exports.get_SVG_by_name=async(req,res)=>{
try {
    const {SVGname}=req.params
    const query ={SVGname:SVGname}
    const projection = { _id: 0, SVGname: 1, SVGclass: 1,d:1};
    const selected= await getDb1().collection(coll2).findOne(query,{projection:projection});
    res.status(200).json(selected)
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

exports.post_SVG= async (req,res)=>{
    try {
        
        const {d,SVGname,SVGclass}=req.body;
        const body={d,SVGname,SVGclass}
        const result=await getDb1().collection(coll2).insertOne(body);
        console.log('SVG created:', result);
        res.status(200).send(result);
        } 
        catch (error) {
        res.status(400).json({error:error.message})
    }
}

exports.delete_SVG=async(req, res)=>{

    try {
    const {id}=req.params;
    const query={"_id": new ObjectId(id)}
    const deleted=await getDb1().collection(coll2).findOneAndDelete(query);
    res.status(200).send(deleted);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
        
   
 }

exports.update_SVG=async(req,res)=>{

        try {
            const {id}=req.params
            const query={"_id": new ObjectId(id)}
            const seter={$set:req.body}
            const update=await getDb1().collection(coll2).findOneAndUpdate(query,seter);
            res.status(200).send(update);
        } catch (error) {
            res.status(400).json({error:error.message})
        }

} 