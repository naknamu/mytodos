import {todo_counter_array} from './add-todos.js';

//dynamically create todo list using js

export function createTodos(index, count) {

    //locate list id
    const myLists = document.querySelector('#myLists');
    //create list container
    const list_container = document.createElement('div');

    //create checkbox container
    const checkbox_container = document.createElement('div');
    //create div container
    const grid_container = document.createElement('div');
    //create list details element
    const list_details = document.createElement('div');
    //create duedate element
    const list_duedate = document.createElement('div');
    //create button container
    const btn_container = document.createElement('div');

    //create view list svg and path
    let view_svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    let view_path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    //create delete list svg and path
    let delete_svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    let delete_path = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    //create priority indicator
    const priority_indicator = document.createElement('div');

    //add attributes to view svg
    view_path.setAttribute("d", "M12 4.5C7 4.5 2.7 7.6 1 12C2.7 16.4 7 19.5 12 19.5H13.1C13 19.2 13 18.9 13 18.5C13 18.1 13 17.8 13.1 17.4C12.7 17.4 12.4 17.5 12 17.5C8.2 17.5 4.8 15.4 3.2 12C4.8 8.6 8.2 6.5 12 6.5S19.2 8.6 20.8 12C20.7 12.2 20.5 12.4 20.4 12.7C21.1 12.9 21.7 13.1 22.3 13.5C22.6 13 22.8 12.5 23 12C21.3 7.6 17 4.5 12 4.5M12 9C10.3 9 9 10.3 9 12S10.3 15 12 15 15 13.7 15 12 13.7 9 12 9M19 21V19H15V17H19V15L22 18L19 21");
    view_svg.setAttribute("width", 24);
    view_svg.setAttribute("height", 24);
    view_svg.setAttribute('x1', '0');
    view_svg.setAttribute('y1', '0');
    view_svg.setAttribute('x2', '24');
    view_svg.setAttribute('y2', '24');

    //add attributes to delete svg
    delete_path.setAttribute("d", "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
    delete_svg.setAttribute("width", 24);
    delete_svg.setAttribute("height", 24);
    delete_svg.setAttribute('x1', '0');
    delete_svg.setAttribute('y1', '0');
    delete_svg.setAttribute('x2', '24');
    delete_svg.setAttribute('y2', '24');

    //add text, get data from user input todo title
    let local_todo_title = JSON.parse(localStorage.getItem('todo_title_array'));
    list_details.textContent = "" + local_todo_title[index][count];
    //due date
    let local_todo_duedate = JSON.parse(localStorage.getItem('todo_duedate_array'));
    list_duedate.textContent = "" + local_todo_duedate[index][count];
    //priority
    let local_todo_priority = JSON.parse(localStorage.getItem('todo_priority_array'));
    // priority_indicator.textContent = "" + local_todo_priority[index][count];
    //add class name depending on the value of prio selected by user
    switch (local_todo_priority[index][count]) {
        case 'high':
            priority_indicator.classList.add('high');
            priority_indicator.textContent = 'HIGH';
            break;
        case 'medium':
            priority_indicator.classList.add('medium');
            priority_indicator.textContent = 'MED';
            break;
        case 'low':
            priority_indicator.classList.add('low');
            priority_indicator.textContent = 'LOW';
            break;
    }

    //add class
    list_container.classList.add('lists');
    // checkbox_container.classList.add('grid-line');
    checkbox_container.classList.add('checkbox');
    grid_container.classList.add('grid-line');
    // list_details.classList.add('grid-line');
    btn_container.classList.add('buttons');
    view_svg.classList.add('icon');
    // priority_indicator.classList.add('priority');
    delete_svg.classList.add('icon');

    //todo items from same project are categorized by class
    list_container.classList.add("list_" + index);

    //add id
    list_details.id = "title";
    list_duedate.id = 'date';

    //create checkbox element
    const checkbox = document.createElement('input');

    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = 'complete';
    checkbox.value = 'complete';
    checkbox.classList.add('.regular-checkbox');

    //add evenlistener to checklist
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            console.log('checkbox is checked!');
            //strikethrough list item
            checkbox_container.classList.add('strike');
            grid_container.classList.add('strike');
            btn_container.classList.add('strike');
            priority_indicator.style.backgroundColor = 'gray';
        } else {
            console.log('checkbox is not checked.');
            //remove strikethrough
            checkbox_container.classList.remove('strike');
            grid_container.classList.remove('strike');
            btn_container.classList.remove('strike');
            priority_indicator.style.backgroundColor = 'red';
        }
    });

    //
    delete_svg.addEventListener('click', () => {
        // console.log('todo list deleted!');
        //delete todo item
        list_container.remove();
        ///find count button
        const count_btn = document.querySelector('#proj_' + index + ' ' + '.count_btn');
        //update todo count btn
        let todo_count = Number(count_btn.textContent);
        --todo_count;
        count_btn.textContent = '' + todo_count;

        //clear todo items in local storage
        //clear todo title   
        // console.log('index:' + index + 'count:' + count);
        let local_title_multiarray = JSON.parse(localStorage.getItem('todo_title_multiarray'));

        // console.log('before:' + local_title_multiarray);

        local_title_multiarray[index].splice(count, 1);

        // console.log('after:' + local_title_multiarray);

        //store multiarray with empty arrays in local storage
        localStorage.setItem('todo_title_multiarray', JSON.stringify(local_title_multiarray));

        //check if an array is empty then remove the empty array
        let new_title_filtered =  local_title_multiarray.filter(function(e) {
            return e.length;
        });

        //store the multidimensional array in local storage
        localStorage.setItem('todo_title_array', JSON.stringify(new_title_filtered));

        //update todo count array
        todo_counter_array[index] = todo_count;
        localStorage.setItem('todo_counter_array', JSON.stringify(todo_counter_array));
    });

    view_svg.addEventListener('click', () => {
        console.log('edit todo list!');
        //enable form
        document.getElementById("myTodos").style.display = "block";
        document.getElementById("todo-overlay").style.display = "block";
        //disable todo items list view
        //header
        if (todo_counter_array[count] !== null && todo_counter_array[count] !== undefined) {
            document.getElementById("lists-overlay").style.display = 'none';
            document.getElementById('myLists').style.display = 'none';
        } 
        //locate class of a list and display it
        let lists = document.getElementsByClassName("list_" + count);
        for(let i=0; i<lists.length; i++) { 
            lists[i].style.display='none';
        }
    })

    //append to parent element
    list_container.appendChild(checkbox_container);
    checkbox_container.append(checkbox);
    list_container.appendChild(grid_container);
    grid_container.appendChild(list_details);
    grid_container.appendChild(list_duedate);
    // list_container.appendChild(list_details);
    list_container.appendChild(btn_container);
    btn_container.appendChild(priority_indicator);
    btn_container.appendChild(view_svg);
    btn_container.appendChild(delete_svg);

    //apend path to respective svg
    delete_svg.appendChild(delete_path);
    view_svg.appendChild(view_path);

    //append list container to parent
    myLists.appendChild(list_container);
}