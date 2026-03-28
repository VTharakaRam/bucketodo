const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const methodOverride = require("method-override");
const db = require('./db');


app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));


//home page
app.get("/" , (req,res)=>{

    let q = `select * from wishes order by created_at desc`;
    
    db.query(q , (err,wishes)=>{
        if(err){
            return res.send("Something went Wrong! Try Again Later.");
        }

        res.render("main.ejs", {wishes});
    });
});


//add wish page
app.get("/add", (req,res)=>{
    res.render("add.ejs");
});


//add wish post request
app.post("/add" , (req,res)=>{
    let newWish = req.body.title;

    let q = `insert into wishes (title) values (?)`;

    db.query(q , newWish , (err,results)=>{
        if(err){
            return res.send("Sorry. Cannot add the wish!");
        }
        res.redirect("/");
    });
});


//mark as done
app.get("/done/:id" , (req,res)=>{
    let id = req.params.id;

    let q = `update wishes set is_done = true where id = '${id}'`;
    db.query(q , (err,result)=>{
        if(err){
            return res.send("cannot mark as done! Try Again");
        }
        res.redirect("/");
    });
});


//edit a title page
app.get("/edit/:id" , (req,res)=>{
    let id = req.params.id;
    let q = `select * from wishes where id = '${id}'`;

    db.query(q , (err,wishes) =>{
        if(err){
            return res.send("Sorry, Cannot Process Now!");
        }
        
        let wish = wishes[0];
        res.render("edit.ejs", {wish});
    });
});


//edit patch request
app.patch("/edit/:id" , (req,res)=>{
    let id = req.params.id;
    
    let newTitle = req.body.title;

    let q = `update wishes set title = '${newTitle}' , is_done = false where id = '${id}'`;

    db.query(q , (err,result)=>{
        if(err){
            return res.send("Cannot Update, Please TryAgain!");
        }
        res.redirect("/");
    });
});


//delete request
app.delete("/wishes/:id" , (req,res)=>{
    let id  = req.params.id;

    let q= `delete from wishes where id = '${id}'`;
    db.query(q, (err,result)=>{
        if(err){
            res.send("cannot delete now ! TryAgain Later")
        }
        res.redirect("/");
    });
});


app.listen(port , ()=>{
    console.log(`listening to the port ${port}`);
});