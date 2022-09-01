import { proj_name_array, proj_description_array} from "./store-project";
import {todo_counter_array} from "./add-todos";

export function createCard(index) {
    const locate_container = document.querySelector(".maincontent .container");

    //create new card div
    const new_card = document.createElement('div');
    const new_title = document.createElement('div');
    const new_description = document.createElement('div');
    const new_btn_container = document.createElement('div');
    const new_btn_add = document.createElement('BUTTON');
    const new_btn_view = document.createElement('BUTTON');
    const new_btn_count = document.createElement('BUTTON');
    const new_btn_delete = document.createElement('BUTTON');

    //add class name
    new_card.classList.add('card');
    new_title.classList.add('title');
    new_description.classList.add('description');
    new_btn_container.classList.add('buttons');
    new_btn_count.classList.add('count_btn');
    new_btn_delete.classList.add('delete_btn');

    //add class id
    new_card.id = 'proj_' + index;

    //retrieve project name and description in local storage
    const get_project_Name = JSON.parse(localStorage.getItem('proj_name'));
    const get_project_Description = JSON.parse(localStorage.getItem('proj_description'));

    new_title.textContent = get_project_Name[index];
    new_description.textContent = get_project_Description[index];

    //add text content
    new_btn_add.textContent = '+';
    new_btn_view.textContent = '👁';
    new_btn_count.textContent = '0';
    new_btn_delete.textContent = 'X';

    //add todos listener
    new_btn_add.addEventListener('click', () => {
        //enable the add todo form
        document.getElementById("myTodos").style.display = "block";
        document.getElementById("todo-overlay").style.display = "block";

        //test
        //by using project counter (index) we can set what project the user selected 
        // console.log('project_index:' + counter);
        localStorage.setItem('proj_index', JSON.stringify(index));
    })

    new_btn_view.addEventListener('click', () => {

        //by using project counter (index) we can set what project the user selected 
        // console.log('project_index:' + counter);
        localStorage.setItem('proj_index', JSON.stringify(index));

        //locate class of a list and display it
        let lists = document.getElementsByClassName("list_" + index);
        for(let i=0; i<lists.length; i++) { 
            lists[i].style.display='grid';
        }

        // console.log(todo_counter_array[counter]);
        //if todo list is not empty then display the list
        if (todo_counter_array[index] !== null && todo_counter_array[index] !== undefined) {
            document.getElementById("lists-overlay").style.display = 'block';
            document.getElementById('myLists').style.display = 'block';
        } 
        else {
            alert('Todo list is empty!');
        }
    })

    new_btn_count.addEventListener('click', () => {
        if (todo_counter_array[index] === null || todo_counter_array[index] === undefined) {
            alert('Todo list is empty!');
        } else {
            alert('There are '+ todo_counter_array[index] + ' todos in this project.')
        }
    })

    //delete card together with local storage components
    new_btn_delete.addEventListener('click', () => {
        new_card.remove();
        //remove the items in the array
        proj_name_array.splice(index, 1);
        proj_description_array.splice(index, 1);
        //update items in local storage
        localStorage.setItem('proj_name', JSON.stringify(proj_name_array));
        localStorage.setItem('proj_description', JSON.stringify(proj_description_array));
        //decrease project counter count and update in localstorage
        let new_counter = localStorage.getItem('proj_counter');
        --new_counter;
        console.log(new_counter);
        localStorage.setItem('proj_counter', JSON.stringify(new_counter));
        
        //test deleting attached todo inside parent project
        todo_counter_array.splice(index, 1);
        //update local storage
        localStorage.setItem('todo_counter_array', JSON.stringify(todo_counter_array));

        /**DELETE ALL TODO ITEMS ATTACHED TO THE PROJECT DELETED */
        const list_container = document.querySelector('.list_' + index);
        list_container.remove();
    })

    //append to parent container
    locate_container.appendChild(new_card);
    new_card.appendChild(new_title);
    new_card.appendChild(new_description);
    new_card.appendChild(new_btn_container);
    new_btn_container.appendChild(new_btn_add);
    new_btn_container.appendChild(new_btn_view);
    new_btn_container.appendChild(new_btn_count);
    new_btn_container.appendChild(new_btn_delete);
}