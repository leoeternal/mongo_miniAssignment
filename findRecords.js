var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/employee_database";
MongoClient.connect(url,function(err,client){
    if(err)throw err;
    const db=client.db("employee_database");
    db.collection("employee").find({}).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        client.close();
    })
})