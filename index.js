//  Select Input Box for Add Todo List 
const inputBox=document.getElementById("input-box");

// Select List container for add todo list in List Container
const listContainer=document.getElementById("list-container");

// Select completeAll for all Checked in Todo List
const completeAll=document.getElementById("complete-all-task");

// for delete todo list which completed
const clearCompleted=document.getElementById("clear-completed");

// Total Task count=Completed(Checked) Todo List + Uncompleted Todo List
const taskCounter=document.getElementById("task-counter");

// create array of li objects elements for adding in listContainer
let tasks=[];

// Render function is use for all li element add  in Todo List from tasks array
const render=()=>{
    listContainer.innerHTML="";
    tasks.map((task)=>{
        listContainer.appendChild(task);
        return null;
    });
    // Counter will be increase after add a list in array
    taskCounter.innerHTML=tasks.length;
}

// addTask in todoListContainer
function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        tasks.unshift(li);
        render();
    }
    inputBox.value="";
}

// for delete a task and checked also unchecked
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        let removeEle=e.target.parentElement;
        tasks=tasks.filter((ele)=>ele!==removeEle);
        render();
    }
},false);

// Complete all tasks(Checked all Task)
completeAll.addEventListener("click",function(e){
   tasks= tasks.map((li)=>{
        li.classList.add("checked");
        return li;
    });
    render();
},false);

// Clear only Completed Tasks
clearCompleted.addEventListener("click",function(){
    // console.log(tasks[0].className==="checked");
    tasks=tasks.filter((task)=>task.className!=="checked");
    render();
})

// Render All tasks(Completed+Uncompleted)
function renderAll(){
    // This code for Select all and remove select from uncomplete and completed
    const all=document.getElementById("all");
    all.classList.add("select");
    const uncomplete=document.getElementById("uncomplete");
    uncomplete.classList.remove("select");
    const completed=document.getElementById("completed");
    completed.classList.remove("select");

    // Render All tasks
    listContainer.innerHTML="";
    tasks.map((task)=>{
        listContainer.appendChild(task);
        return null;
    })
}


// This code for Select Uncomplete and remove select from all and completed
function renderUncomplete(){
    const all=document.getElementById("all");
    all.classList.remove("select");
    const uncomplete=document.getElementById("uncomplete");
    uncomplete.classList.add("select");
    const completed=document.getElementById("completed");
    completed.classList.remove("select");


    // render uncomplete todo list
    listContainer.innerHTML="";
    tasks.map((task)=>{
        if(task.className!=="checked"){
            listContainer.appendChild(task);
        }
        return null;
    })

}

// This code for Select Completed todo list and remove select from all and uncomplete
function renderCompleted(){
    const all=document.getElementById("all");
    all.classList.remove("select");
    const uncomplete=document.getElementById("uncomplete");
    uncomplete.classList.remove("select");
    const completed=document.getElementById("completed");
    completed.classList.add("select");

    // render only Completed Todo list
    listContainer.innerHTML="";
    tasks.map((task)=>{
        if(task.className==="checked"){
            listContainer.appendChild(task);
        }
        return null;
    })

}

