// (function(){
    
//     let tasks = [];
//     const taskList = document.getElementById('list');
//     const addTaskInput = document.getElementById('add');
//     const tasksCounter = document.getElementById('task-counter');
    
//     console.log('Working');
    
//     async function fetchToDo()
//     {
       
//         try{
//             const response= await fetch("https://jsonplaceholder.typicode.com/todos");
//             const data= await response.json();
//             tasks=data.slice(0,10);
//             renderList();
//         }
//         catch(error){
//             console.log('error',error);
    
//         }
       
//     }
    
    
//     function addTaskToDOM(task)
//     {  const li=document.createElement('li');
//        li.innerHTML=
//                     `
//                      <input type = "checkbox" id="${task.id}" ${task.completed ? 'checked': ''} class="custom-checkbox">
//                     <label for="${task.id}">${task.title}</label>
//                     <img src="trash.png" class="delete" data-id="${task.id}"/>
    
//                     `;
//         taskList.append(li);
//     }
    
//     function renderList () {
//         taskList.innerHTML='';
//         for(let i=0;i<tasks.length;i++)
//         {
//             addTaskToDOM(tasks[i]);
//         }
//         tasksCounter.innerHTML=tasks.length;
//     }
    
    
//     function toggleTsk(taskId)
//     {
//         const task=tasks.filter(function(task)
//         { console.log(tasks.id);
//             return task.id=== Number(taskId);
//         })
//         if(task.length>0)
//         {
//             const currentTask=task[0];
//             currentTask.completed=!currentTask.completed;
//             renderList();
//             showNotification("Toggled Successfully");
//             return;
//         }
//         showNotification("cannot toggle");
//     }
    
//     function deleteTask (taskId) {
//         const newtasks=tasks.filter(function(task)
//         { console.log(tasks);
          
//             return task.id!==Number(taskId);
//         })
      
       
//         tasks=newtasks;
//         // console.log(newtasks);
//         renderList();
//         showNotification("Task Deleted Successfully");
//         return;
//     }
    
//     function addTask (task) {
//         if(task)
//         {
        
//           tasks.push(task);
//         renderList();
//         showNotification("Task added Successfully");
//         return;
      
//         }
        
//         showNotification("Task cannot be added");
      
//     }
    
//     function showNotification(text) {
//         alert(text);
//     }
    
//     function handleInputKeypress(e)
//     { if(e.key==="Enter")
//     {
//         const text=e.target.value;
//         console.log(text);
//         if(!text)
//         {
//             showNotification("Task cannot be Empty");
//             return;
//         }
//         const task={
//            title: text,
//             id:Date.now(),
//             completed:false
//         }
//         e.target.value='';
//         addTask(task);
    
//     }
    
//     }
//     function handleClickListener(e)
//     {
//         const target=e.target;
//         console.log(target);
//         if(target.className==="delete")
//         {
//             //  console.log(target.dataset.id);
//           const taskId=target.dataset.id;
//           deleteTask(taskId);
//           return;
//         }
//         else if(target.className==="custom-checkbox")
//         {
//             const taskId=target.id;
//             console.log(taskId);
//             toggleTsk(taskId);
//             return;
//         }
         
    
//     }
//     function initializeApp()
//     {   fetchToDo();
//         addTaskInput.addEventListener("keyup",handleInputKeypress);
//         document.addEventListener('click',handleClickListener);
    
//     }
//     initializeApp();
    
//     })();
    
    