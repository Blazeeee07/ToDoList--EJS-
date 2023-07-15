const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');


var items= ["Buy Food", "Cook Food", "Eat Food"];
var item="";
app.post("/",(req,res)=>{
    item=req.body.inp1;
    items.push(item);

    res.redirect("/");

})

app.get("/",(req,res)=>{


    var today= new Date();
    var currentDay = today.getDay();
    

    var options ={
        weekday: "long",
        day: "numeric",
        month: "short"
    };

    var day =today.toLocaleDateString("en-US", options);

    

    res.render("list", {kindOfDay:day, newListItem:items});

})
app.listen(3000,()=>{
    console.log("Server is running on 3000...");
})