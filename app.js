var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/employee_database";
MongoClient.connect(url,function(err,client){
    if(err)throw err;
    var myobj=[
        {empID:1,name:"Nikhil Jindal",email:"nikhiljindal79@gmail.com"},
        {empID:2,name:"Siddharth Boora",email:"siddharth79@gmail.com"},
        {empID:3,name:"Vedansh Singh",email:"vedansh79@gmail.com"},
        {empID:4,name:"Aryan Awasthi",email:"aryan79@gmail.com"},
        {empID:5,name:"Mohit Sharma",email:"mohit79@gmail.com"},
        {empID:6,name:"Annanya Singh",email:"annanya79@gmail.com"},
    ];

    const db=client.db("employee_database");
    db.collection("employee").insertMany(myobj,function(err,res){
        if(err) throw err;
        console.log("No. of records inserted: "+res.insertedCount);
        client.close();
    })
})