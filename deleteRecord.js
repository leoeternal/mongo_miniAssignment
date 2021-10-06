var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/employee_database";
MongoClient.connect(url,function(err,client){
    if(err) throw err;
    const db=client.db("employee_database");
    db.collection("employee").deleteOne({name:"Vedansh Singh"},function(err,deletedElement){
        if(err)throw err;
        console.log(deletedElement);
        client.close();
    })
})