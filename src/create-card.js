import { proj_counter } from "./store-project";

let proj_card_array = [];

export function createCard() {
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

    //call user input project name and details
    // const get_projectName =  localStorage.getItem('proj_name');
    // const get_projectDetails = localStorage.getItem('proj_details');

    //test using array
    const get_project_Name = JSON.parse(localStorage.getItem('proj_name'));
    // console.log(get_projectName);
    const get_project_Description = JSON.parse(localStorage.getItem('proj_description'));
    // console.log(get_project_Description);

    new_title.textContent = get_project_Name[proj_counter];
    new_description.textContent = get_project_Description[proj_counter];

    //add text content
    new_btn_add.textContent = '+';
    new_btn_view.textContent = '👁';
    new_btn_count.textContent = '0';
    new_btn_delete.textContent = 'X';

    //add todos listener
    new_btn_add.addEventListener('click', () => {
        // console.log('enable add todo form!');
        document.getElementById("myTodos").style.display = "block";
        document.getElementById("todo-overlay").style.display = "block";
    })

    //add class
    new_btn_delete.classList.add('delete_btn');

    //delete card
    new_btn_delete.addEventListener('click', () => {
        new_card.remove();
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

    //store DOM element to local storage
    // console.log(new_card);
    proj_card_array.push(new_card);
    console.log(proj_card_array);
    localStorage.setItem('proj_card', JSON.stringify(proj_card_array));

    let proj_new_card = JSON.parse(localStorage.getItem('proj_card'));
    console.log(proj_new_cards);
}