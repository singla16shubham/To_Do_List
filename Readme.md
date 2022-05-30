# TO-DO-List 
 ## Port is created at 8000
## Index File
- Path and Db is set up for use
- / will take you to home page. It sends the home page the tasklist Fetched from the data base
- /create-task is used to add the task fetched from the page which is entered.. by req.body.
- /delete-task require the id which is being set when user click on delete task and id is being set/ That id is used by req.query.id and then it is deleted from the db.
- Also all the commented code in index.js is the code which was written when database was not connected with it.
## Home.ejs
- It contains all the content of our to do list.
- A container is made for all the content
- An form is present which will take the data like title and description of task.
- Then there is category and due-date. All these are styled with the css file
- For category card select tag is used
- Then there is submit button. In the form action /create-task is written.
- So that when submit button is pressed then it will do whatever is written in /create-task.
- There is a Delete button also
- This delete button works just like add task.
Only differece is that you have to click on checkbox whichever task you want to delete.

After that All the tasks are shown below.
## Important
- Mongoose will create the databse with the name final_todolistapp
- Robo3T is sued to visualise the database.
### Folder Description
- Varoius folders are created so that there is less confusion
- config contains mongoose.js
- assets contain css files
- models contain list.js which is the schema
- views contain the home.ejs file
- nodemon index.js on the terminal will run the project on the local host 8000.