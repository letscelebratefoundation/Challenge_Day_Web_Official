var bodyParser=require("body-parser"),
express=require("express"),
app=express();
app.set("view engine","ejs");
const sgMail = require("@sendgrid/mail");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
sgMail.setApiKey("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");
app.get("/",(req,res)=>{
    res.redirect("/home");
})
app.get("/home",(req,res)=>{
    res.render("index");
})
app.get("/programs/challenge_day_india",(req,res)=>{
    res.render("challenge_day_india");
})
app.get("/programs/pankh_udaan",(req,res)=>{
    res.render("pankh_udaan");
})
app.get("/programs/sewing_hope",(req,res)=>{
    res.render("sewing_hope");
})
app.get("/get_involved",(req,res)=>{
    res.render("get_involved");
})
app.get("/celebrity_wall",(req,res)=>{
    res.render("celebrity_wall");
})
app.post("/get_involved",(req,res)=>{
    
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port,process.env.IP,()=>{
    console.log("started at "+port);

});