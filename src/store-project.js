import { printMe } from "./new-project";
import { createCard } from "./create-card";
import { closeForm } from "./new-project";

let proj_name_array = JSON.parse(localStorage.proj_name || '[]');
let proj_description_array = JSON.parse(localStorage.proj_description || '[]');
let proj_counter = Number(localStorage.proj_counter || '0');

function storeProjectIntoLocalStorage() {
    //locate DOM element
    const project_name = document.querySelector('#name');
    const project_description = document.querySelector('#description');

    //store form input value into an array
    proj_name_array.push(project_name.value);
    proj_description_array.push(project_description.value);

    //test
    console.log(proj_name_array);

    //store array into local storage
    localStorage.setItem('proj_name', JSON.stringify(proj_name_array));
    localStorage.setItem('proj_description', JSON.stringify(proj_description_array));
}

//when form is submitted
const form = document.getElementById('myForm').onsubmit = function(){

    //store project into local storage 
    storeProjectIntoLocalStorage();
    //create project card 
    createCard(proj_counter);
    //add +1 to project counter
    proj_counter++;
    //store project counter into local storage
    localStorage.setItem('proj_counter', proj_counter);
    //close the form popout
    closeForm();

    return false;
}
