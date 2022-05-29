const mongoose=require('mongoose');
const listSchema= new mongoose.Schema({

    taskName:{
        type:String,
        required:true
    },
       // for description of the task
       description: {
        type: String,
        required: true
    },

    // for category of the task
    category: {
        type: String,
        required: true
    },

    // for due date of the task
    Date:
    {
        type:String,
        required:true
    },

    

})

const TaskList = mongoose.model('TaskList',listSchema);

module.exports = TaskList;

