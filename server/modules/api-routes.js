var db = require('../dao');
var api = require('express').Router();
module.exports =
 function mountApiRoutes(app){
    app.use("/api",api);
}

function handleError(res,err,msg){
    console.log(err);
    res.json({status:false,msg:msg});
}

function handleOk(res,data){
    res.json({status:true,data:data});
}

api.get("/",(req,res)=>{
    res.json({status:200,data:'Api'});
});


api.get("/admin/fetch-client",(req,res)=>{
    db.client.find({active:true},(err,docs)=> {
        if(err) handleError(res,err,"Failed to fetch client");
      
        handleOk(res,docs);
    });
});
api.post("/admin/save-client",(req,res)=>{
    var body = req.body;
    console.log(body);

    body.active = true;
    body.createdDate = new Date();

    db.client.insert(body,(err,doc)=>{
        if(err) handleError(res,err,"Failed to save client");
        console.log('saved client');
        handleOk(res,doc);
    });
});


