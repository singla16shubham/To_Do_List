const express=require('express');
const app=express();
const port=8000;
const path=require('path');

// Adding Database
const db = require('./config/mongoose');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assets'));

// Using the schema for database
const TaskList = require('./models/list');

// var tasklist=[
//     {
//         taskName:"Complete Project",
//         Date:'16/02/1999',
//         description:'Build the to do list',
//         category:'Professional',
        
//     },
//     {
//         taskName:"run project",
//         Date:'05/06/2000',
//         description:'Run the to do list',
//         category:'Professional',
//     }
// ]

app.get('/',function(req,res){
  
    TaskList.find({},function(err,task){
        if(err){
            console.log('Error in fetching list from db');
            return;
        }
        return res.render('home',{
            // title : "Doo Itt!", 
            task_list : task
         });
    });

    // return res.render('home',{
    //     task_list:tasklist
    // });
})

app.post('/create-task',function(req,res){
//    console.log(req.body);
//    tasklist.push(req.body);
//    return res.redirect('/')
TaskList.create(req.body,function(err,task){
    if(err){console.log('error in creating the list');return;}
    console.log(task);
    return res.redirect('/');
});
})

app.get('/delete-task',function(req,res){
//     let taskName=req.query.taskName;
//    tasklist= tasklist.filter(function(task){
//        return task.taskName!=taskName;
//    })
//    return res.redirect('/');
console.log(req.query);
let id=req.query;
let checkboxlength=Object.keys(id).length;
console.log(checkboxlength);
// console.log(id);
for(let i=0;i<checkboxlength;i++)
{
TaskList.findByIdAndDelete(Object.keys(id)[i],function(err){
    if(err){
        console.log("Error");
        return;
    }
    // else
    //  { return res.redirect('back');}
})
}
return res.redirect('back');
})


app.listen(port,function(err)
{
    if(err)
    {
        console.log("Sorry There is some error");

    }
    console.log("Server is running on port",port);
})