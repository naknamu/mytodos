import './style.css';
import './new-project.js';
import './store-project.js';
import { createCard } from './create-card';

document.addEventListener('keydown', (event) => {
    // console.log(event.key);
    if (event.key === 'Insert') {
        // console.log('testing!');
        // console.log('Project Entry: '+ Number(localStorage.getItem('proj_counter')));
        let keys = Object.keys(localStorage);
            for(let key of keys) {
                console.log(`${key}: ${localStorage.getItem(key)}`);
            }
    } else if (event.key === 'Delete') {
        localStorage.clear();
    }
})


//get project data from local storage even if the page is refreshed or closed
const pageRefreshed = window.onload = function () {
    // console.log('page is refreshed!');
    //if a project has been stored in local storage then display all data
    let project_counter = Number(localStorage.getItem('proj_counter'));
    console.log('project counter:' + project_counter);
    if (project_counter > 0) {
        for (let i=0; i < project_counter; i++)
        {
            console.log('create card!');
            //create each project card
            createCard(i);
        }
    }
}