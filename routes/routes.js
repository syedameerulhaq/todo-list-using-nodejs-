import express from "express";
import  {todoList}  from "../models/todo.models.js";
const routs = express();


routs.get("/", async(req,res)=>{
   const  alltodo = await todoList.find();
    res.render("index",{todo:alltodo})
})

routs.post("/add",(req,res)=>{
   const todo = req.body.data
   const newtodo = new todoList({task:todo})

   // save todo
  newtodo.save().then(() => {
   console.log("Successfully added todo!");
   res.redirect("/");
 }).catch((err) => console.log(err));

 })

// Delete Todo
routs.post('/delete/:id', async (req, res) => {
   try {
     await todoList.findByIdAndDelete(req.params.id);
    console.log(req.params)
     res.redirect('/');
   } catch (err) {
     console.error(err);
     res.redirect('/');
   }
 });

 // Mark Todo as Completed
routs.post('/complete/:id', async (req, res) => {
   try {
     const todo = await todoList.findById(req.params.id);

     todo.completed = !todo.completed;
     await todo.save();

     res.redirect('/');
   } catch (err) {
     console.error(err);
     res.redirect('/');
   }
 });
 


export default routs

