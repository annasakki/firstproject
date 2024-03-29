const taskbox = document.getElementById("taskbox");
const tasklist =  document.getElementById("task-container")

const addTask = () => {
    if(taskbox.value === ''){
        alert("be productive, write a task")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = taskbox.value;
        tasklist.appendChild(li);
        //cross eleemnt
        let span = document.createElement("span")
        span.innerHTML ="\u00d7"
        li.appendChild(span);
    }
    taskbox.value = " ";
    saveData();
} 
// check where the user is clicking on
tasklist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//save our tasks even after closing browser
function saveData(){
    localStorage.setItem("data", tasklist.innerHTML);

}
function showTasks(){
    tasklist.innerHTML=localStorage.getItem("data");
}
showTasks();