/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-todos.js":
/*!**************************!*\
  !*** ./src/add-todos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo_counter_array": () => (/* binding */ todo_counter_array)
/* harmony export */ });
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project */ "./src/new-project.js");
/* harmony import */ var _create_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-todos */ "./src/create-todos.js");



let todo_title_filtered = JSON.parse(localStorage.todo_title_array || '[]');
let todo_title_multiarray = JSON.parse(localStorage.todo_title_multiarray || '[]');    //a multi dimensional array that will contain all todo title arrays
let todo_counter_array = JSON.parse(localStorage.todo_counter_array || '[]');

//store added todos in an array and then in local storage
function storeTodosInLocalStorage(proj_index, todo_count) {
    const todo_title = document.querySelector('#todo_title');

    //create first an empty array
    todo_title_multiarray.push([]);
    //assign value to the array
    todo_title_multiarray[proj_index][todo_count] = todo_title.value;

    //store multiarray with empty arrays in local storage
    localStorage.setItem('todo_title_multiarray', JSON.stringify(todo_title_multiarray));

    //check if an array is empty then remove the empty array
    todo_title_filtered =  todo_title_multiarray.filter(function(e) { 
        return e.length;
    });
    
    //store the multidimensional array in local storage
    localStorage.setItem('todo_title_array', JSON.stringify(todo_title_filtered));
}

//use onsubmit so the data is processed only when form is submitted successfully
const addTodo_form = document.getElementById('myTodos').onsubmit = function() {

    //use proj index to determine parent project
    let proj_index = JSON.parse(localStorage.getItem('proj_index'));

    //find count button
    const count_btn = document.querySelector('#proj_' + proj_index + ' ' + '.count_btn');

    //convert to number
    let todo_count = Number(count_btn.textContent);

    //store todos in an array in then in local storage
    storeTodosInLocalStorage(proj_index, todo_count);

    console.log('index:' + proj_index + 'count:' + todo_count);
    //create todos
    (0,_create_todos__WEBPACK_IMPORTED_MODULE_1__.createTodos)(proj_index, todo_count);

    //add todo count
    todo_count++;

    //update DOM value
    count_btn.textContent = '' + todo_count;

    //insert into array
    todo_counter_array[proj_index] = todo_count;

    // console.log('todo counter array:' + todo_counter_array);

    //store into local storage
    localStorage.setItem('todo_counter_array', JSON.stringify(todo_counter_array));
    
    //closes form after submitting
    (0,_new_project__WEBPACK_IMPORTED_MODULE_0__.closeForm)('todos');

    return false;
}


/***/ }),

/***/ "./src/create-card.js":
/*!****************************!*\
  !*** ./src/create-card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard)
/* harmony export */ });
/* harmony import */ var _store_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-project */ "./src/store-project.js");
/* harmony import */ var _add_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todos */ "./src/add-todos.js");



function createCard(counter) {
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
    new_card.id = 'proj_' + counter;

    //retrieve project name and description in local storage
    const get_project_Name = JSON.parse(localStorage.getItem('proj_name'));
    const get_project_Description = JSON.parse(localStorage.getItem('proj_description'));

    new_title.textContent = get_project_Name[counter];
    new_description.textContent = get_project_Description[counter];

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
        localStorage.setItem('proj_index', JSON.stringify(counter));
    })

    new_btn_view.addEventListener('click', () => {

        //by using project counter (index) we can set what project the user selected 
        // console.log('project_index:' + counter);
        localStorage.setItem('proj_index', JSON.stringify(counter));

        //locate class of a list and display it
        let lists = document.getElementsByClassName("list_" + counter);
        for(let i=0; i<lists.length; i++) { 
            lists[i].style.display='grid';
        }

        // console.log(todo_counter_array[counter]);
        //if todo list is not empty then display the list
        if (_add_todos__WEBPACK_IMPORTED_MODULE_1__.todo_counter_array[counter] !== null && _add_todos__WEBPACK_IMPORTED_MODULE_1__.todo_counter_array[counter] !== undefined) {
            document.getElementById("lists-overlay").style.display = 'block';
            document.getElementById('myLists').style.display = 'block';
        } 
        else {
            alert('Todo list is empty!');
        }
    })

    new_btn_count.addEventListener('click', () => {
        if (_add_todos__WEBPACK_IMPORTED_MODULE_1__.todo_counter_array[counter] === null || _add_todos__WEBPACK_IMPORTED_MODULE_1__.todo_counter_array[counter] === undefined) {
            alert('Todo list is empty!');
        } else {
            alert('There are '+ _add_todos__WEBPACK_IMPORTED_MODULE_1__.todo_counter_array[counter] + ' todos in this project.')
        }
    })

    //delete card together with local storage components
    new_btn_delete.addEventListener('click', () => {
        new_card.remove();
        //remove the items in the array
        _store_project__WEBPACK_IMPORTED_MODULE_0__.proj_name_array.splice(counter, 1);
        _store_project__WEBPACK_IMPORTED_MODULE_0__.proj_description_array.splice(counter, 1);
        //update items in local storage
        localStorage.setItem('proj_name', JSON.stringify(_store_project__WEBPACK_IMPORTED_MODULE_0__.proj_name_array));
        localStorage.setItem('proj_description', JSON.stringify(_store_project__WEBPACK_IMPORTED_MODULE_0__.proj_description_array));
        //decrease project counter count and update in localstorage
        let new_counter = localStorage.getItem('proj_counter');
        --new_counter;
        localStorage.setItem('proj_counter', JSON.stringify(new_counter));
        
        //test deleting attached todo inside parent project
        _add_todos__WEBPACK_IMPORTED_MODULE_1__.todo_counter_array.splice(counter, 1);
        //update local storage
        localStorage.setItem('todo_counter_array', JSON.stringify(_add_todos__WEBPACK_IMPORTED_MODULE_1__.todo_counter_array));
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

/***/ }),

/***/ "./src/create-todos.js":
/*!*****************************!*\
  !*** ./src/create-todos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodos": () => (/* binding */ createTodos)
/* harmony export */ });
//dynamically create todo list using js

function createTodos(index, count) {

    //locate list id
    const myLists = document.querySelector('#myLists');
    //create list container
    const list_container = document.createElement('div');

    //create checkbox container
    const checkbox_container = document.createElement('div');
    //create list details element
    const list_details = document.createElement('div');
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
    // let input_todo_title = document.querySelector('#todo_title');
    let local_todo_title = JSON.parse(localStorage.getItem('todo_title_array'));

    list_details.textContent = "" + local_todo_title[index][count];
    priority_indicator.textContent = 'HIGH';

    //add class
    list_container.classList.add('lists');
    checkbox_container.classList.add('grid-line');
    checkbox_container.classList.add('checkbox');
    list_details.classList.add('grid-line');
    btn_container.classList.add('buttons');
    view_svg.classList.add('icon');
    delete_svg.classList.add('icon');

    //use proj index to determine parent project
    // let proj_index = JSON.parse(localStorage.getItem('proj_index'));

    list_container.classList.add("list_" + index);

    //add id
    list_details.id = "lists-item";

    //create checkbox element
    const checkbox = document.createElement('input');

    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = 'complete';
    checkbox.value = 'complete';
    checkbox.classList.add('.regular-checkbox');

    //append to parent element
    list_container.appendChild(checkbox_container);
    checkbox_container.append(checkbox);
    list_container.appendChild(list_details);
    list_container.appendChild(btn_container);
    btn_container.appendChild(view_svg);
    btn_container.appendChild(priority_indicator);
    btn_container.appendChild(delete_svg);

    //apend path to respective svg
    view_svg.appendChild(view_path);
    delete_svg.appendChild(delete_path);

    //append list container to parent
    myLists.appendChild(list_container);
}

/***/ }),

/***/ "./src/new-project.js":
/*!****************************!*\
  !*** ./src/new-project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "printMe": () => (/* binding */ printMe)
/* harmony export */ });
//
const newProject_button = document.querySelector('.new_project');

newProject_button.addEventListener('click', () => {
    // console.log("Add new project!");
    document.getElementById("myForm").style.display = "block";
    document.getElementById("overlay").style.display = 'block';
})

//all cancel button logic
const close_form = document.querySelectorAll('.cancel');

close_form.forEach((btn) => {
    btn.addEventListener('click', () => {
        //add project form
        document.getElementById("overlay").style.display = "none";
        document.getElementById("myForm").style.display = 'none';

        //add todo form
        document.getElementById("myTodos").style.display = "none";
        document.getElementById("todo-overlay").style.display = 'none';
    })
})

const close_list = document.querySelector('.close_lists');

close_list.addEventListener('click', () => {
    // console.log('close list!');

    //list header container
    document.getElementById("lists-overlay").style.display = 'none';
    document.getElementById("myLists").style.display = "none";

    //list items
    //use proj index to determine parent project
    let proj_index = JSON.parse(localStorage.getItem('proj_index'));
    //locate class of a list and display it
    let lists = document.getElementsByClassName("list_" + proj_index);
    for(let i=0; i<lists.length; i++) { 
        lists[i].style.display='none';

        // console.log("list_" + proj_index);
    }
})

//close form when user submitted form
function closeForm(formType) {
    switch(formType) {
        case 'project':
            document.getElementById("myForm").style.display = "none";
            document.getElementById("overlay").style.display = 'none';
            break;
        case 'todos':
            document.getElementById("myTodos").style.display = "none";
            document.getElementById("todo-overlay").style.display = 'none';
            break;
    }
}

function printMe(){
    console.log('Im from new project!');
}

/***/ }),

/***/ "./src/store-project.js":
/*!******************************!*\
  !*** ./src/store-project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "proj_counter": () => (/* binding */ proj_counter),
/* harmony export */   "proj_description_array": () => (/* binding */ proj_description_array),
/* harmony export */   "proj_name_array": () => (/* binding */ proj_name_array)
/* harmony export */ });
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project */ "./src/new-project.js");
/* harmony import */ var _create_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-card */ "./src/create-card.js");




let proj_name_array = JSON.parse(localStorage.proj_name || '[]');
let proj_description_array = JSON.parse(localStorage.proj_description || '[]');
let proj_counter = JSON.parse(localStorage.proj_counter || '0');
//test
let project_index_array = JSON.parse(localStorage.todo_title || '[]');

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
    //create project card 
    (0,_create_card__WEBPACK_IMPORTED_MODULE_1__.createCard)(proj_counter);
    //add +1 to project counter
    proj_counter++;
    //store project counter into local storage
    localStorage.setItem('proj_counter', JSON.stringify(proj_counter));
    //clear inputs before closing form
    clearInputField();
    //close the form popout
    (0,_new_project__WEBPACK_IMPORTED_MODULE_0__.closeForm)('project');

    return false;
}

//
function getProjectIndex(counter) {
    return {counter};
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/create-card.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vbXl0b2Rvcy8uL3NyYy9hZGQtdG9kb3MuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy8uL3NyYy9jcmVhdGUtY2FyZC5qcyIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL2NyZWF0ZS10b2Rvcy5qcyIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL25ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL215dG9kb3MvLi9zcmMvc3RvcmUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gXCIuL25ldy1wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRvZG9zIH0gZnJvbSBcIi4vY3JlYXRlLXRvZG9zXCI7XHJcblxyXG5sZXQgdG9kb190aXRsZV9maWx0ZXJlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRvZG9fdGl0bGVfYXJyYXkgfHwgJ1tdJyk7XHJcbmxldCB0b2RvX3RpdGxlX211bHRpYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50b2RvX3RpdGxlX211bHRpYXJyYXkgfHwgJ1tdJyk7ICAgIC8vYSBtdWx0aSBkaW1lbnNpb25hbCBhcnJheSB0aGF0IHdpbGwgY29udGFpbiBhbGwgdG9kbyB0aXRsZSBhcnJheXNcclxuZXhwb3J0IGxldCB0b2RvX2NvdW50ZXJfYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50b2RvX2NvdW50ZXJfYXJyYXkgfHwgJ1tdJyk7XHJcblxyXG4vL3N0b3JlIGFkZGVkIHRvZG9zIGluIGFuIGFycmF5IGFuZCB0aGVuIGluIGxvY2FsIHN0b3JhZ2VcclxuZnVuY3Rpb24gc3RvcmVUb2Rvc0luTG9jYWxTdG9yYWdlKHByb2pfaW5kZXgsIHRvZG9fY291bnQpIHtcclxuICAgIGNvbnN0IHRvZG9fdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb190aXRsZScpO1xyXG5cclxuICAgIC8vY3JlYXRlIGZpcnN0IGFuIGVtcHR5IGFycmF5XHJcbiAgICB0b2RvX3RpdGxlX211bHRpYXJyYXkucHVzaChbXSk7XHJcbiAgICAvL2Fzc2lnbiB2YWx1ZSB0byB0aGUgYXJyYXlcclxuICAgIHRvZG9fdGl0bGVfbXVsdGlhcnJheVtwcm9qX2luZGV4XVt0b2RvX2NvdW50XSA9IHRvZG9fdGl0bGUudmFsdWU7XHJcblxyXG4gICAgLy9zdG9yZSBtdWx0aWFycmF5IHdpdGggZW1wdHkgYXJyYXlzIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvX3RpdGxlX211bHRpYXJyYXknLCBKU09OLnN0cmluZ2lmeSh0b2RvX3RpdGxlX211bHRpYXJyYXkpKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5IHRoZW4gcmVtb3ZlIHRoZSBlbXB0eSBhcnJheVxyXG4gICAgdG9kb190aXRsZV9maWx0ZXJlZCA9ICB0b2RvX3RpdGxlX211bHRpYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGUpIHsgXHJcbiAgICAgICAgcmV0dXJuIGUubGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vc3RvcmUgdGhlIG11bHRpZGltZW5zaW9uYWwgYXJyYXkgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9fdGl0bGVfYXJyYXknLCBKU09OLnN0cmluZ2lmeSh0b2RvX3RpdGxlX2ZpbHRlcmVkKSk7XHJcbn1cclxuXHJcbi8vdXNlIG9uc3VibWl0IHNvIHRoZSBkYXRhIGlzIHByb2Nlc3NlZCBvbmx5IHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XHJcbmNvbnN0IGFkZFRvZG9fZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVRvZG9zJykub25zdWJtaXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvL3VzZSBwcm9qIGluZGV4IHRvIGRldGVybWluZSBwYXJlbnQgcHJvamVjdFxyXG4gICAgbGV0IHByb2pfaW5kZXggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX2luZGV4JykpO1xyXG5cclxuICAgIC8vZmluZCBjb3VudCBidXR0b25cclxuICAgIGNvbnN0IGNvdW50X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qXycgKyBwcm9qX2luZGV4ICsgJyAnICsgJy5jb3VudF9idG4nKTtcclxuXHJcbiAgICAvL2NvbnZlcnQgdG8gbnVtYmVyXHJcbiAgICBsZXQgdG9kb19jb3VudCA9IE51bWJlcihjb3VudF9idG4udGV4dENvbnRlbnQpO1xyXG5cclxuICAgIC8vc3RvcmUgdG9kb3MgaW4gYW4gYXJyYXkgaW4gdGhlbiBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICBzdG9yZVRvZG9zSW5Mb2NhbFN0b3JhZ2UocHJval9pbmRleCwgdG9kb19jb3VudCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2luZGV4OicgKyBwcm9qX2luZGV4ICsgJ2NvdW50OicgKyB0b2RvX2NvdW50KTtcclxuICAgIC8vY3JlYXRlIHRvZG9zXHJcbiAgICBjcmVhdGVUb2Rvcyhwcm9qX2luZGV4LCB0b2RvX2NvdW50KTtcclxuXHJcbiAgICAvL2FkZCB0b2RvIGNvdW50XHJcbiAgICB0b2RvX2NvdW50Kys7XHJcblxyXG4gICAgLy91cGRhdGUgRE9NIHZhbHVlXHJcbiAgICBjb3VudF9idG4udGV4dENvbnRlbnQgPSAnJyArIHRvZG9fY291bnQ7XHJcblxyXG4gICAgLy9pbnNlcnQgaW50byBhcnJheVxyXG4gICAgdG9kb19jb3VudGVyX2FycmF5W3Byb2pfaW5kZXhdID0gdG9kb19jb3VudDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygndG9kbyBjb3VudGVyIGFycmF5OicgKyB0b2RvX2NvdW50ZXJfYXJyYXkpO1xyXG5cclxuICAgIC8vc3RvcmUgaW50byBsb2NhbCBzdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb19jb3VudGVyX2FycmF5JywgSlNPTi5zdHJpbmdpZnkodG9kb19jb3VudGVyX2FycmF5KSk7XHJcbiAgICBcclxuICAgIC8vY2xvc2VzIGZvcm0gYWZ0ZXIgc3VibWl0dGluZ1xyXG4gICAgY2xvc2VGb3JtKCd0b2RvcycpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qX25hbWVfYXJyYXksIHByb2pfZGVzY3JpcHRpb25fYXJyYXl9IGZyb20gXCIuL3N0b3JlLXByb2plY3RcIjtcclxuaW1wb3J0IHt0b2RvX2NvdW50ZXJfYXJyYXl9IGZyb20gXCIuL2FkZC10b2Rvc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmQoY291bnRlcikge1xyXG4gICAgY29uc3QgbG9jYXRlX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbmNvbnRlbnQgLmNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBuZXcgY2FyZCBkaXZcclxuICAgIGNvbnN0IG5ld19jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19idG5fYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX3ZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgIGNvbnN0IG5ld19idG5fY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgIGNvbnN0IG5ld19idG5fZGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcblxyXG4gICAgLy9hZGQgY2xhc3MgbmFtZVxyXG4gICAgbmV3X2NhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgbmV3X3RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICBuZXdfZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcclxuICAgIG5ld19idG5fY291bnQuY2xhc3NMaXN0LmFkZCgnY291bnRfYnRuJyk7XHJcbiAgICBuZXdfYnRuX2RlbGV0ZS5jbGFzc0xpc3QuYWRkKCdkZWxldGVfYnRuJyk7XHJcblxyXG4gICAgLy9hZGQgY2xhc3MgaWRcclxuICAgIG5ld19jYXJkLmlkID0gJ3Byb2pfJyArIGNvdW50ZXI7XHJcblxyXG4gICAgLy9yZXRyaWV2ZSBwcm9qZWN0IG5hbWUgYW5kIGRlc2NyaXB0aW9uIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIGNvbnN0IGdldF9wcm9qZWN0X05hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX25hbWUnKSk7XHJcbiAgICBjb25zdCBnZXRfcHJvamVjdF9EZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfZGVzY3JpcHRpb24nKSk7XHJcblxyXG4gICAgbmV3X3RpdGxlLnRleHRDb250ZW50ID0gZ2V0X3Byb2plY3RfTmFtZVtjb3VudGVyXTtcclxuICAgIG5ld19kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGdldF9wcm9qZWN0X0Rlc2NyaXB0aW9uW2NvdW50ZXJdO1xyXG5cclxuICAgIC8vYWRkIHRleHQgY29udGVudFxyXG4gICAgbmV3X2J0bl9hZGQudGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgICBuZXdfYnRuX3ZpZXcudGV4dENvbnRlbnQgPSAn8J+RgSc7XHJcbiAgICBuZXdfYnRuX2NvdW50LnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgbmV3X2J0bl9kZWxldGUudGV4dENvbnRlbnQgPSAnWCc7XHJcblxyXG4gICAgLy9hZGQgdG9kb3MgbGlzdGVuZXJcclxuICAgIG5ld19idG5fYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vZW5hYmxlIHRoZSBhZGQgdG9kbyBmb3JtXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRvZG9zXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgICAgLy90ZXN0XHJcbiAgICAgICAgLy9ieSB1c2luZyBwcm9qZWN0IGNvdW50ZXIgKGluZGV4KSB3ZSBjYW4gc2V0IHdoYXQgcHJvamVjdCB0aGUgdXNlciBzZWxlY3RlZCBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncHJvamVjdF9pbmRleDonICsgY291bnRlcik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfaW5kZXgnLCBKU09OLnN0cmluZ2lmeShjb3VudGVyKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIG5ld19idG5fdmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9ieSB1c2luZyBwcm9qZWN0IGNvdW50ZXIgKGluZGV4KSB3ZSBjYW4gc2V0IHdoYXQgcHJvamVjdCB0aGUgdXNlciBzZWxlY3RlZCBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncHJvamVjdF9pbmRleDonICsgY291bnRlcik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfaW5kZXgnLCBKU09OLnN0cmluZ2lmeShjb3VudGVyKSk7XHJcblxyXG4gICAgICAgIC8vbG9jYXRlIGNsYXNzIG9mIGEgbGlzdCBhbmQgZGlzcGxheSBpdFxyXG4gICAgICAgIGxldCBsaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0X1wiICsgY291bnRlcik7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGlzdHMubGVuZ3RoOyBpKyspIHsgXHJcbiAgICAgICAgICAgIGxpc3RzW2ldLnN0eWxlLmRpc3BsYXk9J2dyaWQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9kb19jb3VudGVyX2FycmF5W2NvdW50ZXJdKTtcclxuICAgICAgICAvL2lmIHRvZG8gbGlzdCBpcyBub3QgZW1wdHkgdGhlbiBkaXNwbGF5IHRoZSBsaXN0XHJcbiAgICAgICAgaWYgKHRvZG9fY291bnRlcl9hcnJheVtjb3VudGVyXSAhPT0gbnVsbCAmJiB0b2RvX2NvdW50ZXJfYXJyYXlbY291bnRlcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RzLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUxpc3RzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1RvZG8gbGlzdCBpcyBlbXB0eSEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIG5ld19idG5fY291bnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRvZG9fY291bnRlcl9hcnJheVtjb3VudGVyXSA9PT0gbnVsbCB8fCB0b2RvX2NvdW50ZXJfYXJyYXlbY291bnRlcl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhbGVydCgnVG9kbyBsaXN0IGlzIGVtcHR5IScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUaGVyZSBhcmUgJysgdG9kb19jb3VudGVyX2FycmF5W2NvdW50ZXJdICsgJyB0b2RvcyBpbiB0aGlzIHByb2plY3QuJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vZGVsZXRlIGNhcmQgdG9nZXRoZXIgd2l0aCBsb2NhbCBzdG9yYWdlIGNvbXBvbmVudHNcclxuICAgIG5ld19idG5fZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG5ld19jYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vcmVtb3ZlIHRoZSBpdGVtcyBpbiB0aGUgYXJyYXlcclxuICAgICAgICBwcm9qX25hbWVfYXJyYXkuc3BsaWNlKGNvdW50ZXIsIDEpO1xyXG4gICAgICAgIHByb2pfZGVzY3JpcHRpb25fYXJyYXkuc3BsaWNlKGNvdW50ZXIsIDEpO1xyXG4gICAgICAgIC8vdXBkYXRlIGl0ZW1zIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9uYW1lJywgSlNPTi5zdHJpbmdpZnkocHJval9uYW1lX2FycmF5KSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfZGVzY3JpcHRpb24nLCBKU09OLnN0cmluZ2lmeShwcm9qX2Rlc2NyaXB0aW9uX2FycmF5KSk7XHJcbiAgICAgICAgLy9kZWNyZWFzZSBwcm9qZWN0IGNvdW50ZXIgY291bnQgYW5kIHVwZGF0ZSBpbiBsb2NhbHN0b3JhZ2VcclxuICAgICAgICBsZXQgbmV3X2NvdW50ZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9jb3VudGVyJyk7XHJcbiAgICAgICAgLS1uZXdfY291bnRlcjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9jb3VudGVyJywgSlNPTi5zdHJpbmdpZnkobmV3X2NvdW50ZXIpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3Rlc3QgZGVsZXRpbmcgYXR0YWNoZWQgdG9kbyBpbnNpZGUgcGFyZW50IHByb2plY3RcclxuICAgICAgICB0b2RvX2NvdW50ZXJfYXJyYXkuc3BsaWNlKGNvdW50ZXIsIDEpO1xyXG4gICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb19jb3VudGVyX2FycmF5JywgSlNPTi5zdHJpbmdpZnkodG9kb19jb3VudGVyX2FycmF5KSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vYXBwZW5kIHRvIHBhcmVudCBjb250YWluZXJcclxuICAgIGxvY2F0ZV9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2NhcmQpO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X3RpdGxlKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld19kZXNjcmlwdGlvbik7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfYnRuX2NvbnRhaW5lcik7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX2FkZCk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX3ZpZXcpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl9jb3VudCk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX2RlbGV0ZSk7XHJcbn0iLCIvL2R5bmFtaWNhbGx5IGNyZWF0ZSB0b2RvIGxpc3QgdXNpbmcganNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvcyhpbmRleCwgY291bnQpIHtcclxuXHJcbiAgICAvL2xvY2F0ZSBsaXN0IGlkXHJcbiAgICBjb25zdCBteUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215TGlzdHMnKTtcclxuICAgIC8vY3JlYXRlIGxpc3QgY29udGFpbmVyXHJcbiAgICBjb25zdCBsaXN0X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIC8vY3JlYXRlIGNoZWNrYm94IGNvbnRhaW5lclxyXG4gICAgY29uc3QgY2hlY2tib3hfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvL2NyZWF0ZSBsaXN0IGRldGFpbHMgZWxlbWVudFxyXG4gICAgY29uc3QgbGlzdF9kZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvL2NyZWF0ZSBidXR0b24gY29udGFpbmVyXHJcbiAgICBjb25zdCBidG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9jcmVhdGUgdmlldyBsaXN0IHN2ZyBhbmQgcGF0aFxyXG4gICAgbGV0IHZpZXdfc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3N2ZycpO1xyXG4gICAgbGV0IHZpZXdfcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdwYXRoJyk7XHJcbiAgICAvL2NyZWF0ZSBkZWxldGUgbGlzdCBzdmcgYW5kIHBhdGhcclxuICAgIGxldCBkZWxldGVfc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3N2ZycpO1xyXG4gICAgbGV0IGRlbGV0ZV9wYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBwcmlvcml0eSBpbmRpY2F0b3JcclxuICAgIGNvbnN0IHByaW9yaXR5X2luZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIC8vYWRkIGF0dHJpYnV0ZXMgdG8gdmlldyBzdmdcclxuICAgIHZpZXdfcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTEyIDQuNUM3IDQuNSAyLjcgNy42IDEgMTJDMi43IDE2LjQgNyAxOS41IDEyIDE5LjVIMTMuMUMxMyAxOS4yIDEzIDE4LjkgMTMgMTguNUMxMyAxOC4xIDEzIDE3LjggMTMuMSAxNy40QzEyLjcgMTcuNCAxMi40IDE3LjUgMTIgMTcuNUM4LjIgMTcuNSA0LjggMTUuNCAzLjIgMTJDNC44IDguNiA4LjIgNi41IDEyIDYuNVMxOS4yIDguNiAyMC44IDEyQzIwLjcgMTIuMiAyMC41IDEyLjQgMjAuNCAxMi43QzIxLjEgMTIuOSAyMS43IDEzLjEgMjIuMyAxMy41QzIyLjYgMTMgMjIuOCAxMi41IDIzIDEyQzIxLjMgNy42IDE3IDQuNSAxMiA0LjVNMTIgOUMxMC4zIDkgOSAxMC4zIDkgMTJTMTAuMyAxNSAxMiAxNSAxNSAxMy43IDE1IDEyIDEzLjcgOSAxMiA5TTE5IDIxVjE5SDE1VjE3SDE5VjE1TDIyIDE4TDE5IDIxXCIpO1xyXG4gICAgdmlld19zdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgMjQpO1xyXG4gICAgdmlld19zdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDI0KTtcclxuICAgIHZpZXdfc3ZnLnNldEF0dHJpYnV0ZSgneDEnLCAnMCcpO1xyXG4gICAgdmlld19zdmcuc2V0QXR0cmlidXRlKCd5MScsICcwJyk7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoJ3gyJywgJzI0Jyk7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoJ3kyJywgJzI0Jyk7XHJcblxyXG4gICAgLy9hZGQgYXR0cmlidXRlcyB0byBkZWxldGUgc3ZnXHJcbiAgICBkZWxldGVfcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTE5LDRIMTUuNUwxNC41LDNIOS41TDguNSw0SDVWNkgxOU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlaXCIpO1xyXG4gICAgZGVsZXRlX3N2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCAyNCk7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAyNCk7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZSgneDEnLCAnMCcpO1xyXG4gICAgZGVsZXRlX3N2Zy5zZXRBdHRyaWJ1dGUoJ3kxJywgJzAnKTtcclxuICAgIGRlbGV0ZV9zdmcuc2V0QXR0cmlidXRlKCd4MicsICcyNCcpO1xyXG4gICAgZGVsZXRlX3N2Zy5zZXRBdHRyaWJ1dGUoJ3kyJywgJzI0Jyk7XHJcblxyXG4gICAgLy9hZGQgdGV4dCwgZ2V0IGRhdGEgZnJvbSB1c2VyIGlucHV0IHRvZG8gdGl0bGVcclxuICAgIC8vIGxldCBpbnB1dF90b2RvX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9fdGl0bGUnKTtcclxuICAgIGxldCBsb2NhbF90b2RvX3RpdGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb190aXRsZV9hcnJheScpKTtcclxuXHJcbiAgICBsaXN0X2RldGFpbHMudGV4dENvbnRlbnQgPSBcIlwiICsgbG9jYWxfdG9kb190aXRsZVtpbmRleF1bY291bnRdO1xyXG4gICAgcHJpb3JpdHlfaW5kaWNhdG9yLnRleHRDb250ZW50ID0gJ0hJR0gnO1xyXG5cclxuICAgIC8vYWRkIGNsYXNzXHJcbiAgICBsaXN0X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0cycpO1xyXG4gICAgY2hlY2tib3hfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtbGluZScpO1xyXG4gICAgY2hlY2tib3hfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICBsaXN0X2RldGFpbHMuY2xhc3NMaXN0LmFkZCgnZ3JpZC1saW5lJyk7XHJcbiAgICBidG5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcclxuICAgIHZpZXdfc3ZnLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICAgIGRlbGV0ZV9zdmcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG5cclxuICAgIC8vdXNlIHByb2ogaW5kZXggdG8gZGV0ZXJtaW5lIHBhcmVudCBwcm9qZWN0XHJcbiAgICAvLyBsZXQgcHJval9pbmRleCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfaW5kZXgnKSk7XHJcblxyXG4gICAgbGlzdF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RfXCIgKyBpbmRleCk7XHJcblxyXG4gICAgLy9hZGQgaWRcclxuICAgIGxpc3RfZGV0YWlscy5pZCA9IFwibGlzdHMtaXRlbVwiO1xyXG5cclxuICAgIC8vY3JlYXRlIGNoZWNrYm94IGVsZW1lbnRcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICAvLyBBc3NpZ25pbmcgdGhlIGF0dHJpYnV0ZXNcclxuICAgIC8vIHRvIGNyZWF0ZWQgY2hlY2tib3hcclxuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjaGVja2JveC5uYW1lID0gJ2NvbXBsZXRlJztcclxuICAgIGNoZWNrYm94LnZhbHVlID0gJ2NvbXBsZXRlJztcclxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJy5yZWd1bGFyLWNoZWNrYm94Jyk7XHJcblxyXG4gICAgLy9hcHBlbmQgdG8gcGFyZW50IGVsZW1lbnRcclxuICAgIGxpc3RfY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94X2NvbnRhaW5lcik7XHJcbiAgICBjaGVja2JveF9jb250YWluZXIuYXBwZW5kKGNoZWNrYm94KTtcclxuICAgIGxpc3RfY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RfZGV0YWlscyk7XHJcbiAgICBsaXN0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5fY29udGFpbmVyKTtcclxuICAgIGJ0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQodmlld19zdmcpO1xyXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eV9pbmRpY2F0b3IpO1xyXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVfc3ZnKTtcclxuXHJcbiAgICAvL2FwZW5kIHBhdGggdG8gcmVzcGVjdGl2ZSBzdmdcclxuICAgIHZpZXdfc3ZnLmFwcGVuZENoaWxkKHZpZXdfcGF0aCk7XHJcbiAgICBkZWxldGVfc3ZnLmFwcGVuZENoaWxkKGRlbGV0ZV9wYXRoKTtcclxuXHJcbiAgICAvL2FwcGVuZCBsaXN0IGNvbnRhaW5lciB0byBwYXJlbnRcclxuICAgIG15TGlzdHMuYXBwZW5kQ2hpbGQobGlzdF9jb250YWluZXIpO1xyXG59IiwiLy9cclxuY29uc3QgbmV3UHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3X3Byb2plY3QnKTtcclxuXHJcbm5ld1Byb2plY3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBZGQgbmV3IHByb2plY3QhXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufSlcclxuXHJcbi8vYWxsIGNhbmNlbCBidXR0b24gbG9naWNcclxuY29uc3QgY2xvc2VfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYW5jZWwnKTtcclxuXHJcbmNsb3NlX2Zvcm0uZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy9hZGQgcHJvamVjdCBmb3JtXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAvL2FkZCB0b2RvIGZvcm1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VG9kb3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuY29uc3QgY2xvc2VfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9saXN0cycpO1xyXG5cclxuY2xvc2VfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjbG9zZSBsaXN0IScpO1xyXG5cclxuICAgIC8vbGlzdCBoZWFkZXIgY29udGFpbmVyXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RzLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlMaXN0c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgLy9saXN0IGl0ZW1zXHJcbiAgICAvL3VzZSBwcm9qIGluZGV4IHRvIGRldGVybWluZSBwYXJlbnQgcHJvamVjdFxyXG4gICAgbGV0IHByb2pfaW5kZXggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX2luZGV4JykpO1xyXG4gICAgLy9sb2NhdGUgY2xhc3Mgb2YgYSBsaXN0IGFuZCBkaXNwbGF5IGl0XHJcbiAgICBsZXQgbGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdF9cIiArIHByb2pfaW5kZXgpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8bGlzdHMubGVuZ3RoOyBpKyspIHsgXHJcbiAgICAgICAgbGlzdHNbaV0uc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGlzdF9cIiArIHByb2pfaW5kZXgpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuLy9jbG9zZSBmb3JtIHdoZW4gdXNlciBzdWJtaXR0ZWQgZm9ybVxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VGb3JtKGZvcm1UeXBlKSB7XHJcbiAgICBzd2l0Y2goZm9ybVR5cGUpIHtcclxuICAgICAgICBjYXNlICdwcm9qZWN0JzpcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndG9kb3MnOlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VG9kb3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50TWUoKXtcclxuICAgIGNvbnNvbGUubG9nKCdJbSBmcm9tIG5ldyBwcm9qZWN0IScpO1xyXG59IiwiaW1wb3J0IHsgcHJpbnRNZSB9IGZyb20gXCIuL25ldy1wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9jcmVhdGUtY2FyZFwiO1xyXG5pbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGxldCBwcm9qX25hbWVfYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qX25hbWUgfHwgJ1tdJyk7XHJcbmV4cG9ydCBsZXQgcHJval9kZXNjcmlwdGlvbl9hcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2pfZGVzY3JpcHRpb24gfHwgJ1tdJyk7XHJcbmV4cG9ydCBsZXQgcHJval9jb3VudGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJval9jb3VudGVyIHx8ICcwJyk7XHJcbi8vdGVzdFxyXG5sZXQgcHJvamVjdF9pbmRleF9hcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRvZG9fdGl0bGUgfHwgJ1tdJyk7XHJcblxyXG5mdW5jdGlvbiBzdG9yZVByb2plY3RJbnRvTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgLy9sb2NhdGUgRE9NIGVsZW1lbnRcclxuICAgIGNvbnN0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0X2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgLy9zdG9yZSBmb3JtIGlucHV0IHZhbHVlIGludG8gYW4gYXJyYXlcclxuICAgIHByb2pfbmFtZV9hcnJheS5wdXNoKHByb2plY3RfbmFtZS52YWx1ZSk7XHJcbiAgICBwcm9qX2Rlc2NyaXB0aW9uX2FycmF5LnB1c2gocHJvamVjdF9kZXNjcmlwdGlvbi52YWx1ZSk7XHJcblxyXG4gICAgLy90ZXN0XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qX25hbWVfYXJyYXkpO1xyXG5cclxuICAgIC8vc3RvcmUgYXJyYXkgaW50byBsb2NhbCBzdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9uYW1lJywgSlNPTi5zdHJpbmdpZnkocHJval9uYW1lX2FycmF5KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9kZXNjcmlwdGlvbicsIEpTT04uc3RyaW5naWZ5KHByb2pfZGVzY3JpcHRpb25fYXJyYXkpKTtcclxufVxyXG5cclxuLy9jbGVhciBmb3JtIGlucHV0IGNvbnRlbnRzXHJcbmZ1bmN0aW9uIGNsZWFySW5wdXRGaWVsZCgpIHtcclxuICAgIC8vbG9jYXRlIERPTSBlbGVtZW50XHJcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xyXG4gICAgY29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpOyBcclxuXHJcbiAgICAvL2NsZWFyIGZpZWxkc1xyXG4gICAgcHJvamVjdF9uYW1lLnZhbHVlID0gJyc7XHJcbiAgICBwcm9qZWN0X2Rlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbi8vd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZFxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLm9uc3VibWl0ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL3N0b3JlIHByb2plY3QgaW50byBsb2NhbCBzdG9yYWdlIFxyXG4gICAgc3RvcmVQcm9qZWN0SW50b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgLy9jcmVhdGUgcHJvamVjdCBjYXJkIFxyXG4gICAgY3JlYXRlQ2FyZChwcm9qX2NvdW50ZXIpO1xyXG4gICAgLy9hZGQgKzEgdG8gcHJvamVjdCBjb3VudGVyXHJcbiAgICBwcm9qX2NvdW50ZXIrKztcclxuICAgIC8vc3RvcmUgcHJvamVjdCBjb3VudGVyIGludG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfY291bnRlcicsIEpTT04uc3RyaW5naWZ5KHByb2pfY291bnRlcikpO1xyXG4gICAgLy9jbGVhciBpbnB1dHMgYmVmb3JlIGNsb3NpbmcgZm9ybVxyXG4gICAgY2xlYXJJbnB1dEZpZWxkKCk7XHJcbiAgICAvL2Nsb3NlIHRoZSBmb3JtIHBvcG91dFxyXG4gICAgY2xvc2VGb3JtKCdwcm9qZWN0Jyk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vL1xyXG5mdW5jdGlvbiBnZXRQcm9qZWN0SW5kZXgoY291bnRlcikge1xyXG4gICAgcmV0dXJuIHtjb3VudGVyfTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY3JlYXRlLWNhcmQuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=