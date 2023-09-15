const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deletecheck);


function addTodo(event){
    event.preventDefault();
    //todo div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //add todo to local storage 
    //saveLocalTodos(todoInput.value);
    //check mark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    todoInput.value="";
}
function deletecheck(e){
    const item=e.target;
    //delete todo
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.remove();
    }
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }


}

function saveLocalTodos(todo){
    //checking---do i have already thing in there.
    let todos;
    if(localStorage.getItem('todos')===null){
        todos= [];
    
    }else{
        todos=json.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos",json.stringify(todos));
}
