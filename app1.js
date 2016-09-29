var express=require('express');

var app=express();
app.set("PORT", process.env.PORT || 3001);

app.get('/',function(req,res){
  res.end("hey this is express server");
});

app.get('/shyam',function(req,res){
  res.end("hey this is express server shyam");
});

app.listen(app.get("PORT"),function(){
  console.log("server is running on 3001");
});
