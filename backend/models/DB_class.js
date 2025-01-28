// db.js
const { MongoClient,ServerApiVersion } = require('mongodb');
require('dotenv').config();

const client =new MongoClient(process.env.MONGO_DB_URI, {
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }

})
const connect=async()=>{
    await client.connect();
    //Connect database __name__
    //Connect database __name__
    db1 = client.db('Icons');
    db2 = client.db('Users');
    
    }


const getDb1=()=> {
        return db1;
}
const getDb2=()=> {
        return db2;
    }
const close_connection= async ()=> {
        try {
            await client.close();
            console.log('Connection closed');
    
        } catch (error) {
          
          console.error('There is an error in close OP',error);  
    
        }
    
        }     
const set_schema_db1=async()=>{
   try {
        
        await db1.command({ping: 1});
        await db1.command({
            collMod: coll_name,
            validator:{
                $jsonSchema:{
                    //Validation Rules
                    bsonType: "object",
                    required: ['SVGname','SVGclass','d'],
                    properties: {
                        SVGname:{
                            bsonType:'string',
                            description: 'name should be string',
                        },
                        SVGclass:{
                            bsonType:'array',
                            description: 'SVGclass starts with a,b,c followed numeral',
                            
                            items: {
                                bsonType: "string",
                             },
                        },
                        d:{
                            bsonType:'array',
                            description: 'd should be array',
                           
                            items: {
                                bsonType: "string",
                             }
                        },
                    }
                }
            
            
            
            }
        });    
    } catch (error) {
        
    }
}
const set_schema_db2=async()=>{
    try {
        
        await db2.command({ping: 1});
        await db2.command({
            collMod: coll_name,
            validator:{ $jsonSchema:{
                //Validation Rules
                bsonType: "object",
                required: ['name','age','charge','task'],
                properties: {
                    name:{
                        bsonType:'string',
                        minLength: 15,
                        description: 'class starts with a,b,c followed numeral',
                    },
                    age:{
                        bsonType:'int',
                        minimum:15,
                        maximum:99,
                        description: 'age should be int',
                    },
                    charge:{
                        bsonType:'string',
                        minLength: 8,
                        description: 'charge should be string ',
            
                    },
                    task:{
                        
                        bsonType:'string',
                        description: 'task should be string ',
            
                    }
                }
              }
            }
        });    
    } catch (error) {
        
    }
}

module.exports={connect,getDb1,getDb2,close_connection,set_schema_db2,set_schema_db1}
