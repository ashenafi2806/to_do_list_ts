"use strict";
const taskInput = document.getElementById("taskinput");
const addBtn = document.getElementById("addbtn");
const taskList = document.getElementById("tasklist");
let todos = [];
function display_list() {
    if (!taskList)
        return;
    taskList.innerHTML = "";
    todos.forEach(todo => {
        const task = document.createElement("li");
        task.textContent = todo.description;
        task.setAttribute("data-id", todo.id);
        const editbtn = document.createElement("button");
        editbtn.textContent = "edit";
        editbtn.onclick = () => edit_task(todo.id);
        const removebtn = document.createElement("button");
        removebtn.textContent = "remove";
        removebtn.onclick = () => remove_task(todo.id);
        task.appendChild(editbtn);
        task.appendChild(removebtn);
        taskList.appendChild(task);
    });
}
function add_task() {
    const taskvalue = taskInput === null || taskInput === void 0 ? void 0 : taskInput.value.trim();
    if (!taskInput || !taskvalue)
        return;
    const new_task = {
        id: Date.now().toString(),
        description: taskvalue,
    };
    todos.push(new_task);
    taskInput.value = "";
    display_list();
}
function edit_task(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo)
        return;
    const new_value = prompt("edit your task", todo.description);
    if (new_value && new_value.trim()) {
        todo.description = new_value.trim();
        display_list();
    }
}
function remove_task(id) {
    todos = todos.filter(t => t.id !== id);
    display_list();
}
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", add_task);
//# sourceMappingURL=index.js.map