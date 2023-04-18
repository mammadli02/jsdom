let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks")
let containerDiv = document.querySelector(".container")
let deleteAll = document.querySelector(".delete-all");
let count = document.querySelector(".count")
let arrayOfTasks = [];
let errorMsg = document.querySelector(".error");
count.innerHTML = `NO do to item`
submit.addEventListener("click", function () {
    if (input.value !== "") {
        addTaskToArray(input.value);
        input.value = "";
        errorMsg.classList.replace("d-block", "d-none");
    } else {
        errorMsg.classList.replace("d-none", "d-block");
    }
})
function addTaskToArray(taskText) {
    const task = {
        title: taskText,
        complated: false,
    };
    arrayOfTasks.push(task);
    count.innerHTML = `You have ${arrayOfTasks.length} pending tasks`
    // console.log(arrayOfTasks.length);
    addTaskToPage(arrayOfTasks);
}
function addTaskToPage(arrayOfTasks) {
    tasksDiv.innerHTML = "";
    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";

        if (task.complated) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
     div.innerHTML += `${task.title}`
        let span = document.createElement("span");
        span.className = "del";
        span.innerHTML += `<i class="fa-solid fa-trash"></i>`
        div.appendChild(span);
        tasksDiv.appendChild(div)
    });
}
function addElementsToPageFrom(arrayOfTasks) {
    tasksDiv.innerHTML = "";
    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        if (task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.innerHTML += `${task.title}`;
        let span = document.createElement("span");
        span.className = "del";
        span.append("Delete");
        div.appendChild(span);
        tasksDiv.appendChild(div);
    });
}
tasksDiv.addEventListener("click", ((e) => {
    if (e.target.classList.contains("del")) {
        if (window.confirm("Are you sure to delete?")) {
            errorMsg.classList.replace("d-block", "d-none");
            e.target.parentElement.remove();
            count.innerHTML = `You have ${--arrayOfTasks.length} pending tasks`
        }
    }
    if (e.target.classList.contains("task")) {
        e.target.classList.toggle("done");
    }
}))
deleteAll.addEventListener("click", function (e) {
    tasksDiv.innerHTML = "";
    count.innerHTML = " "
    errorMsg.classList.replace("d-block", "d-none");
    count.innerHTML = `NO do to item`
})