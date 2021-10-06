var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/employee_database";
MongoClient.connect(url,function(err,client){
    if(err)throw err;
    const db=client.db("employee_database");
    db.collection("employee").updateOne({name:"Mohit Sharma"},{$set:{email:"mohitsharma99@gmail.com"}},function(err,updatedElement){
        if(err)throw err;
        console.log(updatedElement);
        client.close();
    })
})