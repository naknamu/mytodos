import { printMe } from "./new-project";
import { createCard } from "./create-card";
import { closeForm } from "./new-project";

let proj_name_array = [];
let proj_description_array = [];
export let proj_counter = 0;

function storeProjectIntoLocalStorage() {
    //locate DOM element
    const project_name = document.querySelector('#name');
    const project_description = document.querySelector('#description');

    //store in local storage
    // localStorage.setItem('proj_name', project_name.value);
    // localStorage.setItem('proj_details', project_details.value);

    //test using array
    proj_name_array.push(project_name.value);
    proj_description_array.push(project_description.value)

    //store array into local storage
    localStorage.setItem('proj_name', JSON.stringify(proj_name_array));
    localStorage.setItem('proj_description', JSON.stringify(proj_description_array))


    //create card 
    createCard();

    //add +1 to project counter
    proj_counter++;
}

//when form is submitted, store project into local storage and close the form popout
const form = document.getElementById('myForm').onsubmit = function(){
    storeProjectIntoLocalStorage();
    closeForm();

    return false;
}
