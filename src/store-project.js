import { printMe } from "./new-project";
import { createCard } from "./create-card";
import { closeForm } from "./close";

export let proj_name_array = JSON.parse(localStorage.proj_name || '[]');
export let proj_description_array = JSON.parse(localStorage.proj_description || '[]');
// export let proj_counter = JSON.parse(localStorage.proj_counter || '0');

function storeProjectIntoLocalStorage() {
    //locate DOM element
    const project_name = document.querySelector('#name');
    const project_description = document.querySelector('#description');

    //store form input value into an array
    proj_name_array.push(project_name.value);
    proj_description_array.push(project_description.value);

    //test
    // console.log(proj_name_array);

    //store array into local storage
    localStorage.setItem('proj_name', JSON.stringify(proj_name_array));
    localStorage.setItem('proj_description', JSON.stringify(proj_description_array));
}

//clear form input contents
function clearInputField() {
    //locate DOM element
    const project_name = document.querySelector('#name');
    const project_description = document.querySelector('#description'); 

    //clear fields
    project_name.value = '';
    project_description.value = '';
}

//when form is submitted
const form = document.getElementById('myForm').onsubmit = function(){

    //store project into local storage 
    storeProjectIntoLocalStorage();
    //
    let proj_counter = JSON.parse(localStorage.proj_counter || '0');
    // console.log(proj_counter);
    //create project card 
    createCard(proj_counter);
    //add +1 to project counter
    proj_counter++;
    //store project counter into local storage
    localStorage.setItem('proj_counter', JSON.stringify(proj_counter));
    //clear inputs before closing form
    clearInputField();
    //close the form popout
    closeForm('project');

    return false;
}