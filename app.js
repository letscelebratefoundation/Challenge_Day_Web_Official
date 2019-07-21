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
app.get("/get_involved/sponsor",(req,res)=>{
    res.render("form",{role:"sponsor"});
});
app.get("/get_involved/partner",(req,res)=>{
    res.render("form",{role:"partner"});
});
app.get("/get_involved/volunteer",(req,res)=>{
    res.render("form",{role:"volunteer"});
});
app.post("/get_involved",(req,res)=>{
    console.log(req.details);
    const msg = {
        to:"challengedayindia@gmail.com",
        from: 'mayankkapur2000@gmail.com',
        subject: 'Someone is interested in our organisation',
        text: "Name: "+req.body.details.name+"Email: "+req.body.details.email+"Role: "+req.body.details.role+"Message: "+req.body.details.message,
        html:"<b>Name:</b> "+req.body.details.name+"<br><b>Email:</b> "+req.body.details.email+"<br><b>Role:</b> "+req.body.details.role+"<br><b>Message:</b> "+req.body.details.message
        
      };

      sgMail.send(msg);  
      res.redirect("/get_involved")
      
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8090;
}

app.listen(port,process.env.IP,()=>{
    console.log("started at "+port);

});