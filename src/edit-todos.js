import { closeForm } from "./close.js";
import { formatRelative } from 'date-fns';
import enGB from 'date-fns/locale/en-GB';

//when edit todo form is submitted
const form = document.getElementById('edit_Todos').onsubmit = function(){
    console.log('edit todo!');

    //get project index and todo count
    let index = JSON.parse(localStorage.getItem('proj_index'));
    let count = JSON.parse(localStorage.getItem('todo_count_selected'));

    // console.log('index:' + index + 'count:' + count);

    /**TITLE **/
    const edit_todo_title = document.querySelector('#edit_title');
    let local_title_multiarray = JSON.parse(localStorage.getItem('todo_title_multiarray'));
    local_title_multiarray[index][count] = edit_todo_title.value;
    localStorage.setItem('todo_title_multiarray', JSON.stringify(local_title_multiarray));
    let local_title_filtered =  local_title_multiarray.filter(function(e) {
        return e.length;
    });
    localStorage.setItem('todo_title_array', JSON.stringify(local_title_filtered));
    /*EDIT HTML TITLE*/
    const html_todo_title = document.querySelector("#title_" + index + "_"+ count);
    html_todo_title.textContent = '' + edit_todo_title.value;

    /**DUE DATE**/
    const edit_todo_duedate = document.querySelector('#edit_date');
    let local_duedate_raw = JSON.parse(localStorage.getItem('duedate_raw_array'));
    local_duedate_raw[index][count] = edit_todo_duedate.value;
    localStorage.setItem('duedate_raw_array', JSON.stringify(local_duedate_raw));
    let formatRel_date = formatRelative(new Date(edit_todo_duedate.value), new Date(), { locale });
    let local_duedate_multiarray = JSON.parse(localStorage.getItem('todo_duedate_multiarray'));
    local_duedate_multiarray[index][count] = formatRel_date;
    localStorage.setItem('todo_duedate_multiarray', JSON.stringify(local_duedate_multiarray));
    let local_duedate_filtered =  local_duedate_multiarray.filter(function(e) {
        return e.length;
    });
    localStorage.setItem('todo_duedate_array', JSON.stringify(local_duedate_filtered));
    /*EDIT HTML DUE DATE*/
    const html_todo_duedate = document.querySelector("#date_" + index + "_" + count);
    html_todo_duedate.textContent = "" + formatRel_date;

    /**PRIORITY */
    const edit_todo_priority = document.querySelector("input[name=edit_priority_type]:checked");
    let local_priority_multiarray = JSON.parse(localStorage.getItem('todo_priority_multiarray'));
    local_priority_multiarray[index][count] = edit_todo_priority.value;
    localStorage.setItem('todo_priority_multiarray', JSON.stringify(local_priority_multiarray));
    let local_priority_filtered =  local_priority_multiarray.filter(function(e) {
        return e.length;
    });
    localStorage.setItem('todo_priority_array', JSON.stringify(local_priority_filtered));
    /*EDIT HTML PRIORITY*/
    const html_todo_priority = document.querySelector("#prio_" + index + "_" + count);
    //remove existing class
    //depending on the prio value
    switch (local_priority_filtered[index][count]) {
        case 'high':
            html_todo_priority.classList.replace('high');
            html_todo_priority.textContent = 'HIGH';
            break;
        case 'medium':
            html_todo_priority.classList.replace('medium');
            html_todo_priority.textContent = 'MED';
            break;
        case 'low':
            html_todo_priority.classList.replace('low');
            html_todo_priority.textContent = 'LOW';
            break;
    }

    closeForm('edit_todo');

    return false;
}

const formatRelativeLocale = {
    lastWeek: "'Last' eeee",
    yesterday: "'Yesterday'",
    today: "'Today'",
    tomorrow: "'Tomorrow'",
    nextWeek: "'Next' eeee",
    other: 'iii, MMM dd, yyyy',
};

const locale = {
    ...enGB,
    formatRelative: (token) => formatRelativeLocale[token],
};