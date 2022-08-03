import { printMe } from "./new-project";
import { createCard } from "./create-card";
import { closeForm } from "./new-project";

function storeProjectIntoLocalStorage() {
    const project_name = document.querySelector('#name');
    const project_details = document.querySelector('#description');

    //store in local storage
    localStorage.setItem('proj_name', project_name.value);
    localStorage.setItem('proj_details', project_details.value);

    //create card 
    createCard();
}

//when form is submitted, store project into local storage in close the form popout
const form = document.getElementById('myForm').onsubmit = function(){
    storeProjectIntoLocalStorage();
    closeForm();

    return false;
}
