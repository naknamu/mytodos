import './style.css';
import './new-project.js';
import './store-project.js';
import './add-todos.js';
import './create-todos.js';
import { createCard } from './create-card';
import { createTodos } from './create-todos';

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
    } else if (event.key === 'Pause') {
        localStorage.removeItem('todo_title');
        localStorage.removeItem('todo_counter');
        //test
        //delete todo counters and todo title
    }
})


//get project data from local storage even if the page is refreshed or closed
const pageRefreshed = window.onload = function () {
    // console.log('page is refreshed!');
    //if a project has been stored in local storage then display all data
    let project_counter = Number(localStorage.getItem('proj_counter'));
    let todo_counter_array = JSON.parse(localStorage.getItem('todo_counter_array') || '[]');
    // console.log('project counter:' + project_counter);
    if (project_counter > 0) {
        for (let i=0; i < project_counter; i++)
        {
            // console.log('create card!');
            //create each project card
            createCard(i);

            //find count button
            const count_btn = document.querySelector('#proj_' + i + ' ' + '.count_btn');
            
            //then assign each value to respective count button
            if (todo_counter_array[i] == null)
            {
                count_btn.textContent = '' + 0;
            } else {
                count_btn.textContent = '' + todo_counter_array[i];
            }
        }
    }

    //todo count
    if (project_counter > 0 && todo_counter_array.length !== 0) {
        for (let i=0; i< project_counter; i++) {
            for (let j=0; j<todo_counter_array[i]; j++) {
                // console.log('proj_count:' + i +  ' todo_count:' + j);

                createTodos(i, j);
            }
        }
    }
}