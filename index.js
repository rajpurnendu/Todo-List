const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

const completeAll=document.getElementById("complete-all-task");

const clearCompleted=document.getElementById("clear-completed");
const taskCounter=document.getElementById("task-counter");


let tasks=[];
const render=()=>{
    listContainer.innerHTML="";
    tasks.map((task)=>{
        listContainer.appendChild(task);
        return null;
    });
    taskCounter.innerHTML=tasks.length;
}

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

// Complete all tasks
completeAll.addEventListener("click",function(e){
   tasks= tasks.map((li)=>{
        li.classList.add("checked");
        return li;
    });
    render();
},false);

// Clear Completed
clearCompleted.addEventListener("click",function(){
    // console.log(tasks[0].className==="checked");
    tasks=tasks.filter((task)=>task.className!=="checked");
    render();
})

// Render All tasks
function renderAll(){
    const all=document.getElementById("all");
    all.classList.add("select");
    const uncomplete=document.getElementById("uncomplete");
    uncomplete.classList.remove("select");
    const completed=document.getElementById("completed");
    completed.classList.remove("select");



    listContainer.innerHTML="";
    tasks.map((task)=>{
        listContainer.appendChild(task);
        return null;
    })
}

function renderUncomplete(){
    const all=document.getElementById("all");
    all.classList.remove("select");
    const uncomplete=document.getElementById("uncomplete");
    uncomplete.classList.add("select");
    const completed=document.getElementById("completed");
    completed.classList.remove("select");





    listContainer.innerHTML="";
    tasks.map((task)=>{
        if(task.className!=="checked"){
            listContainer.appendChild(task);
        }
        return null;
    })

}

function renderCompleted(){
    const all=document.getElementById("all");
    all.classList.remove("select");
    const uncomplete=document.getElementById("uncomplete");
    uncomplete.classList.remove("select");
    const completed=document.getElementById("completed");
    completed.classList.add("select");


    listContainer.innerHTML="";
    tasks.map((task)=>{
        if(task.className==="checked"){
            listContainer.appendChild(task);
        }
        return null;
    })

}

