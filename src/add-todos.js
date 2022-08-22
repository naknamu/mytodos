import { closeForm } from "./new-project";
import { createTodos } from "./create-todos";

let todo_title_filtered = JSON.parse(localStorage.todo_title_array || '[]');
let todo_title_multiarray = JSON.parse(localStorage.todo_title_multiarray || '[]');    //a multi dimensional array that will contain all todo title arrays
export let todo_counter_array = JSON.parse(localStorage.todo_counter_array || '[]');

//store added todos in an array and then in local storage
function storeTodosInLocalStorage(proj_index, todo_count) {
    const todo_title = document.querySelector('#todo_title');

    //create first an empty array
    todo_title_multiarray.push([]);
    //assign value to the array
    todo_title_multiarray[proj_index][todo_count] = todo_title.value;

    //store multiarray with empty arrays in local storage
    localStorage.setItem('todo_title_multiarray', JSON.stringify(todo_title_multiarray));

    //check if an array is empty then remove the empty array
    todo_title_filtered =  todo_title_multiarray.filter(function(e) { 
        return e.length;
    });
    
    //store the multidimensional array in local storage
    localStorage.setItem('todo_title_array', JSON.stringify(todo_title_filtered));
}

//use onsubmit so the data is processed only when form is submitted successfully
const addTodo_form = document.getElementById('myTodos').onsubmit = function() {

    //use proj index to determine parent project
    let proj_index = JSON.parse(localStorage.getItem('proj_index'));

    //find count button
    const count_btn = document.querySelector('#proj_' + proj_index + ' ' + '.count_btn');

    //convert to number
    let todo_count = Number(count_btn.textContent);

    //store todos in an array in then in local storage
    storeTodosInLocalStorage(proj_index, todo_count);

    console.log('index:' + proj_index + 'count:' + todo_count);
    //create todos
    createTodos(proj_index, todo_count);

    //add todo count
    todo_count++;

    //update DOM value
    count_btn.textContent = '' + todo_count;

    //insert into array
    todo_counter_array[proj_index] = todo_count;

    // console.log('todo counter array:' + todo_counter_array);

    //store into local storage
    localStorage.setItem('todo_counter_array', JSON.stringify(todo_counter_array));
    
    //closes form after submitting
    closeForm('todos');

    return false;
}
