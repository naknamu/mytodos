import { closeForm } from "./new-project";

//use onsubmit so the data is processed only when form is submitted successfully
const addTodo_form = document.getElementById('myTodos').onsubmit = function() {

    storeTodosInLocalStorage();

    //add +1 to project counter
    todo_counter++;

    //store project counter into local storage
    localStorage.setItem('todo_counter', JSON.stringify(todo_counter));

    //use proj index to determine parent project
    let proj_index = JSON.parse(localStorage.getItem('proj_index'));

    //find count button
    const count_btn = document.querySelector('#proj_' + proj_index + ' ' + '.count_btn');

    //update todo count
    count_btn.textContent = todo_counter;
    
    //closes form after submitting
    closeForm('todos');

    return false;
}

let todo_title_array = JSON.parse(localStorage.todo_title || '[]');
let todo_counter = JSON.parse(localStorage.todo_counter || '0');

function storeTodosInLocalStorage() {
    const todo_title = document.querySelector('#todo_title');

    todo_title_array.push(todo_title.value);

    // console.log(todo_title_array);

    localStorage.setItem('todo_title', JSON.stringify(todo_title_array));
}
