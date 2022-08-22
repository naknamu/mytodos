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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/store-project.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9teXRvZG9zLy4vc3JjL2FkZC10b2Rvcy5qcyIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL2NyZWF0ZS1jYXJkLmpzIiwid2VicGFjazovL215dG9kb3MvLi9zcmMvY3JlYXRlLXRvZG9zLmpzIiwid2VicGFjazovL215dG9kb3MvLi9zcmMvbmV3LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy8uL3NyYy9zdG9yZS1wcm9qZWN0LmpzIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVG9kb3MgfSBmcm9tIFwiLi9jcmVhdGUtdG9kb3NcIjtcclxuXHJcbmxldCB0b2RvX3RpdGxlX2ZpbHRlcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kb190aXRsZV9hcnJheSB8fCAnW10nKTtcclxubGV0IHRvZG9fdGl0bGVfbXVsdGlhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRvZG9fdGl0bGVfbXVsdGlhcnJheSB8fCAnW10nKTsgICAgLy9hIG11bHRpIGRpbWVuc2lvbmFsIGFycmF5IHRoYXQgd2lsbCBjb250YWluIGFsbCB0b2RvIHRpdGxlIGFycmF5c1xyXG5leHBvcnQgbGV0IHRvZG9fY291bnRlcl9hcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRvZG9fY291bnRlcl9hcnJheSB8fCAnW10nKTtcclxuXHJcbi8vc3RvcmUgYWRkZWQgdG9kb3MgaW4gYW4gYXJyYXkgYW5kIHRoZW4gaW4gbG9jYWwgc3RvcmFnZVxyXG5mdW5jdGlvbiBzdG9yZVRvZG9zSW5Mb2NhbFN0b3JhZ2UocHJval9pbmRleCwgdG9kb19jb3VudCkge1xyXG4gICAgY29uc3QgdG9kb190aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX3RpdGxlJyk7XHJcblxyXG4gICAgLy9jcmVhdGUgZmlyc3QgYW4gZW1wdHkgYXJyYXlcclxuICAgIHRvZG9fdGl0bGVfbXVsdGlhcnJheS5wdXNoKFtdKTtcclxuICAgIC8vYXNzaWduIHZhbHVlIHRvIHRoZSBhcnJheVxyXG4gICAgdG9kb190aXRsZV9tdWx0aWFycmF5W3Byb2pfaW5kZXhdW3RvZG9fY291bnRdID0gdG9kb190aXRsZS52YWx1ZTtcclxuXHJcbiAgICAvL3N0b3JlIG11bHRpYXJyYXkgd2l0aCBlbXB0eSBhcnJheXMgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9fdGl0bGVfbXVsdGlhcnJheScsIEpTT04uc3RyaW5naWZ5KHRvZG9fdGl0bGVfbXVsdGlhcnJheSkpO1xyXG5cclxuICAgIC8vY2hlY2sgaWYgYW4gYXJyYXkgaXMgZW1wdHkgdGhlbiByZW1vdmUgdGhlIGVtcHR5IGFycmF5XHJcbiAgICB0b2RvX3RpdGxlX2ZpbHRlcmVkID0gIHRvZG9fdGl0bGVfbXVsdGlhcnJheS5maWx0ZXIoZnVuY3Rpb24oZSkgeyBcclxuICAgICAgICByZXR1cm4gZS5sZW5ndGg7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy9zdG9yZSB0aGUgbXVsdGlkaW1lbnNpb25hbCBhcnJheSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb190aXRsZV9hcnJheScsIEpTT04uc3RyaW5naWZ5KHRvZG9fdGl0bGVfZmlsdGVyZWQpKTtcclxufVxyXG5cclxuLy91c2Ugb25zdWJtaXQgc28gdGhlIGRhdGEgaXMgcHJvY2Vzc2VkIG9ubHkgd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcclxuY29uc3QgYWRkVG9kb19mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215VG9kb3MnKS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vdXNlIHByb2ogaW5kZXggdG8gZGV0ZXJtaW5lIHBhcmVudCBwcm9qZWN0XHJcbiAgICBsZXQgcHJval9pbmRleCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfaW5kZXgnKSk7XHJcblxyXG4gICAgLy9maW5kIGNvdW50IGJ1dHRvblxyXG4gICAgY29uc3QgY291bnRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2pfJyArIHByb2pfaW5kZXggKyAnICcgKyAnLmNvdW50X2J0bicpO1xyXG5cclxuICAgIC8vY29udmVydCB0byBudW1iZXJcclxuICAgIGxldCB0b2RvX2NvdW50ID0gTnVtYmVyKGNvdW50X2J0bi50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgLy9zdG9yZSB0b2RvcyBpbiBhbiBhcnJheSBpbiB0aGVuIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIHN0b3JlVG9kb3NJbkxvY2FsU3RvcmFnZShwcm9qX2luZGV4LCB0b2RvX2NvdW50KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaW5kZXg6JyArIHByb2pfaW5kZXggKyAnY291bnQ6JyArIHRvZG9fY291bnQpO1xyXG4gICAgLy9jcmVhdGUgdG9kb3NcclxuICAgIGNyZWF0ZVRvZG9zKHByb2pfaW5kZXgsIHRvZG9fY291bnQpO1xyXG5cclxuICAgIC8vYWRkIHRvZG8gY291bnRcclxuICAgIHRvZG9fY291bnQrKztcclxuXHJcbiAgICAvL3VwZGF0ZSBET00gdmFsdWVcclxuICAgIGNvdW50X2J0bi50ZXh0Q29udGVudCA9ICcnICsgdG9kb19jb3VudDtcclxuXHJcbiAgICAvL2luc2VydCBpbnRvIGFycmF5XHJcbiAgICB0b2RvX2NvdW50ZXJfYXJyYXlbcHJval9pbmRleF0gPSB0b2RvX2NvdW50O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCd0b2RvIGNvdW50ZXIgYXJyYXk6JyArIHRvZG9fY291bnRlcl9hcnJheSk7XHJcblxyXG4gICAgLy9zdG9yZSBpbnRvIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvX2NvdW50ZXJfYXJyYXknLCBKU09OLnN0cmluZ2lmeSh0b2RvX2NvdW50ZXJfYXJyYXkpKTtcclxuICAgIFxyXG4gICAgLy9jbG9zZXMgZm9ybSBhZnRlciBzdWJtaXR0aW5nXHJcbiAgICBjbG9zZUZvcm0oJ3RvZG9zJyk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7IHByb2pfbmFtZV9hcnJheSwgcHJval9kZXNjcmlwdGlvbl9hcnJheX0gZnJvbSBcIi4vc3RvcmUtcHJvamVjdFwiO1xyXG5pbXBvcnQge3RvZG9fY291bnRlcl9hcnJheX0gZnJvbSBcIi4vYWRkLXRvZG9zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChjb3VudGVyKSB7XHJcbiAgICBjb25zdCBsb2NhdGVfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluY29udGVudCAuY29udGFpbmVyXCIpO1xyXG5cclxuICAgIC8vY3JlYXRlIG5ldyBjYXJkIGRpdlxyXG4gICAgY29uc3QgbmV3X2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9hZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgIGNvbnN0IG5ld19idG5fdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9jb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9kZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuXHJcbiAgICAvL2FkZCBjbGFzcyBuYW1lXHJcbiAgICBuZXdfY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICBuZXdfdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgIG5ld19kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG4gICAgbmV3X2J0bl9jb3VudC5jbGFzc0xpc3QuYWRkKCdjb3VudF9idG4nKTtcclxuICAgIG5ld19idG5fZGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZV9idG4nKTtcclxuXHJcbiAgICAvL2FkZCBjbGFzcyBpZFxyXG4gICAgbmV3X2NhcmQuaWQgPSAncHJval8nICsgY291bnRlcjtcclxuXHJcbiAgICAvL3JldHJpZXZlIHByb2plY3QgbmFtZSBhbmQgZGVzY3JpcHRpb24gaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgY29uc3QgZ2V0X3Byb2plY3RfTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfbmFtZScpKTtcclxuICAgIGNvbnN0IGdldF9wcm9qZWN0X0Rlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9kZXNjcmlwdGlvbicpKTtcclxuXHJcbiAgICBuZXdfdGl0bGUudGV4dENvbnRlbnQgPSBnZXRfcHJvamVjdF9OYW1lW2NvdW50ZXJdO1xyXG4gICAgbmV3X2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZ2V0X3Byb2plY3RfRGVzY3JpcHRpb25bY291bnRlcl07XHJcblxyXG4gICAgLy9hZGQgdGV4dCBjb250ZW50XHJcbiAgICBuZXdfYnRuX2FkZC50ZXh0Q29udGVudCA9ICcrJztcclxuICAgIG5ld19idG5fdmlldy50ZXh0Q29udGVudCA9ICfwn5GBJztcclxuICAgIG5ld19idG5fY291bnQudGV4dENvbnRlbnQgPSAnMCc7XHJcbiAgICBuZXdfYnRuX2RlbGV0ZS50ZXh0Q29udGVudCA9ICdYJztcclxuXHJcbiAgICAvL2FkZCB0b2RvcyBsaXN0ZW5lclxyXG4gICAgbmV3X2J0bl9hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy9lbmFibGUgdGhlIGFkZCB0b2RvIGZvcm1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VG9kb3NcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICAvL2J5IHVzaW5nIHByb2plY3QgY291bnRlciAoaW5kZXgpIHdlIGNhbiBzZXQgd2hhdCBwcm9qZWN0IHRoZSB1c2VyIHNlbGVjdGVkIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9qZWN0X2luZGV4OicgKyBjb3VudGVyKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9pbmRleCcsIEpTT04uc3RyaW5naWZ5KGNvdW50ZXIpKTtcclxuICAgIH0pXHJcblxyXG4gICAgbmV3X2J0bl92aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL2J5IHVzaW5nIHByb2plY3QgY291bnRlciAoaW5kZXgpIHdlIGNhbiBzZXQgd2hhdCBwcm9qZWN0IHRoZSB1c2VyIHNlbGVjdGVkIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9qZWN0X2luZGV4OicgKyBjb3VudGVyKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9pbmRleCcsIEpTT04uc3RyaW5naWZ5KGNvdW50ZXIpKTtcclxuXHJcbiAgICAgICAgLy9sb2NhdGUgY2xhc3Mgb2YgYSBsaXN0IGFuZCBkaXNwbGF5IGl0XHJcbiAgICAgICAgbGV0IGxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpc3RfXCIgKyBjb3VudGVyKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxsaXN0cy5sZW5ndGg7IGkrKykgeyBcclxuICAgICAgICAgICAgbGlzdHNbaV0uc3R5bGUuZGlzcGxheT0nZ3JpZCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2RvX2NvdW50ZXJfYXJyYXlbY291bnRlcl0pO1xyXG4gICAgICAgIC8vaWYgdG9kbyBsaXN0IGlzIG5vdCBlbXB0eSB0aGVuIGRpc3BsYXkgdGhlIGxpc3RcclxuICAgICAgICBpZiAodG9kb19jb3VudGVyX2FycmF5W2NvdW50ZXJdICE9PSBudWxsICYmIHRvZG9fY291bnRlcl9hcnJheVtjb3VudGVyXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdHMtb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TGlzdHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnVG9kbyBsaXN0IGlzIGVtcHR5IScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbmV3X2J0bl9jb3VudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAodG9kb19jb3VudGVyX2FycmF5W2NvdW50ZXJdID09PSBudWxsIHx8IHRvZG9fY291bnRlcl9hcnJheVtjb3VudGVyXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUb2RvIGxpc3QgaXMgZW1wdHkhJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIGFyZSAnKyB0b2RvX2NvdW50ZXJfYXJyYXlbY291bnRlcl0gKyAnIHRvZG9zIGluIHRoaXMgcHJvamVjdC4nKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy9kZWxldGUgY2FyZCB0b2dldGhlciB3aXRoIGxvY2FsIHN0b3JhZ2UgY29tcG9uZW50c1xyXG4gICAgbmV3X2J0bl9kZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbmV3X2NhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgLy9yZW1vdmUgdGhlIGl0ZW1zIGluIHRoZSBhcnJheVxyXG4gICAgICAgIHByb2pfbmFtZV9hcnJheS5zcGxpY2UoY291bnRlciwgMSk7XHJcbiAgICAgICAgcHJval9kZXNjcmlwdGlvbl9hcnJheS5zcGxpY2UoY291bnRlciwgMSk7XHJcbiAgICAgICAgLy91cGRhdGUgaXRlbXMgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX25hbWUnLCBKU09OLnN0cmluZ2lmeShwcm9qX25hbWVfYXJyYXkpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9kZXNjcmlwdGlvbicsIEpTT04uc3RyaW5naWZ5KHByb2pfZGVzY3JpcHRpb25fYXJyYXkpKTtcclxuICAgICAgICAvL2RlY3JlYXNlIHByb2plY3QgY291bnRlciBjb3VudCBhbmQgdXBkYXRlIGluIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgIGxldCBuZXdfY291bnRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX2NvdW50ZXInKTtcclxuICAgICAgICAtLW5ld19jb3VudGVyO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX2NvdW50ZXInLCBKU09OLnN0cmluZ2lmeShuZXdfY291bnRlcikpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGVzdCBkZWxldGluZyBhdHRhY2hlZCB0b2RvIGluc2lkZSBwYXJlbnQgcHJvamVjdFxyXG4gICAgICAgIHRvZG9fY291bnRlcl9hcnJheS5zcGxpY2UoY291bnRlciwgMSk7XHJcbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvX2NvdW50ZXJfYXJyYXknLCBKU09OLnN0cmluZ2lmeSh0b2RvX2NvdW50ZXJfYXJyYXkpKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9hcHBlbmQgdG8gcGFyZW50IGNvbnRhaW5lclxyXG4gICAgbG9jYXRlX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfY2FyZCk7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfdGl0bGUpO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X2Rlc2NyaXB0aW9uKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld19idG5fY29udGFpbmVyKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fYWRkKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fdmlldyk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX2NvdW50KTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fZGVsZXRlKTtcclxufSIsIi8vZHluYW1pY2FsbHkgY3JlYXRlIHRvZG8gbGlzdCB1c2luZyBqc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9zKGluZGV4LCBjb3VudCkge1xyXG5cclxuICAgIC8vbG9jYXRlIGxpc3QgaWRcclxuICAgIGNvbnN0IG15TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlMaXN0cycpO1xyXG4gICAgLy9jcmVhdGUgbGlzdCBjb250YWluZXJcclxuICAgIGNvbnN0IGxpc3RfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9jcmVhdGUgY2hlY2tib3ggY29udGFpbmVyXHJcbiAgICBjb25zdCBjaGVja2JveF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vY3JlYXRlIGxpc3QgZGV0YWlscyBlbGVtZW50XHJcbiAgICBjb25zdCBsaXN0X2RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vY3JlYXRlIGJ1dHRvbiBjb250YWluZXJcclxuICAgIGNvbnN0IGJ0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvL2NyZWF0ZSB2aWV3IGxpc3Qgc3ZnIGFuZCBwYXRoXHJcbiAgICBsZXQgdmlld19zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAnc3ZnJyk7XHJcbiAgICBsZXQgdmlld19wYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcclxuICAgIC8vY3JlYXRlIGRlbGV0ZSBsaXN0IHN2ZyBhbmQgcGF0aFxyXG4gICAgbGV0IGRlbGV0ZV9zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAnc3ZnJyk7XHJcbiAgICBsZXQgZGVsZXRlX3BhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xyXG5cclxuICAgIC8vY3JlYXRlIHByaW9yaXR5IGluZGljYXRvclxyXG4gICAgY29uc3QgcHJpb3JpdHlfaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9hZGQgYXR0cmlidXRlcyB0byB2aWV3IHN2Z1xyXG4gICAgdmlld19wYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMTIgNC41QzcgNC41IDIuNyA3LjYgMSAxMkMyLjcgMTYuNCA3IDE5LjUgMTIgMTkuNUgxMy4xQzEzIDE5LjIgMTMgMTguOSAxMyAxOC41QzEzIDE4LjEgMTMgMTcuOCAxMy4xIDE3LjRDMTIuNyAxNy40IDEyLjQgMTcuNSAxMiAxNy41QzguMiAxNy41IDQuOCAxNS40IDMuMiAxMkM0LjggOC42IDguMiA2LjUgMTIgNi41UzE5LjIgOC42IDIwLjggMTJDMjAuNyAxMi4yIDIwLjUgMTIuNCAyMC40IDEyLjdDMjEuMSAxMi45IDIxLjcgMTMuMSAyMi4zIDEzLjVDMjIuNiAxMyAyMi44IDEyLjUgMjMgMTJDMjEuMyA3LjYgMTcgNC41IDEyIDQuNU0xMiA5QzEwLjMgOSA5IDEwLjMgOSAxMlMxMC4zIDE1IDEyIDE1IDE1IDEzLjcgMTUgMTIgMTMuNyA5IDEyIDlNMTkgMjFWMTlIMTVWMTdIMTlWMTVMMjIgMThMMTkgMjFcIik7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCAyNCk7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgMjQpO1xyXG4gICAgdmlld19zdmcuc2V0QXR0cmlidXRlKCd4MScsICcwJyk7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoJ3kxJywgJzAnKTtcclxuICAgIHZpZXdfc3ZnLnNldEF0dHJpYnV0ZSgneDInLCAnMjQnKTtcclxuICAgIHZpZXdfc3ZnLnNldEF0dHJpYnV0ZSgneTInLCAnMjQnKTtcclxuXHJcbiAgICAvL2FkZCBhdHRyaWJ1dGVzIHRvIGRlbGV0ZSBzdmdcclxuICAgIGRlbGV0ZV9wYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMTksNEgxNS41TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOVpcIik7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIDI0KTtcclxuICAgIGRlbGV0ZV9zdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDI0KTtcclxuICAgIGRlbGV0ZV9zdmcuc2V0QXR0cmlidXRlKCd4MScsICcwJyk7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZSgneTEnLCAnMCcpO1xyXG4gICAgZGVsZXRlX3N2Zy5zZXRBdHRyaWJ1dGUoJ3gyJywgJzI0Jyk7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZSgneTInLCAnMjQnKTtcclxuXHJcbiAgICAvL2FkZCB0ZXh0LCBnZXQgZGF0YSBmcm9tIHVzZXIgaW5wdXQgdG9kbyB0aXRsZVxyXG4gICAgLy8gbGV0IGlucHV0X3RvZG9fdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb190aXRsZScpO1xyXG4gICAgbGV0IGxvY2FsX3RvZG9fdGl0bGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvX3RpdGxlX2FycmF5JykpO1xyXG5cclxuICAgIGxpc3RfZGV0YWlscy50ZXh0Q29udGVudCA9IFwiXCIgKyBsb2NhbF90b2RvX3RpdGxlW2luZGV4XVtjb3VudF07XHJcbiAgICBwcmlvcml0eV9pbmRpY2F0b3IudGV4dENvbnRlbnQgPSAnSElHSCc7XHJcblxyXG4gICAgLy9hZGQgY2xhc3NcclxuICAgIGxpc3RfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RzJyk7XHJcbiAgICBjaGVja2JveF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1saW5lJyk7XHJcbiAgICBjaGVja2JveF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcclxuICAgIGxpc3RfZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdncmlkLWxpbmUnKTtcclxuICAgIGJ0bl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG4gICAgdmlld19zdmcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gICAgZGVsZXRlX3N2Zy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcblxyXG4gICAgLy91c2UgcHJvaiBpbmRleCB0byBkZXRlcm1pbmUgcGFyZW50IHByb2plY3RcclxuICAgIC8vIGxldCBwcm9qX2luZGV4ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9pbmRleCcpKTtcclxuXHJcbiAgICBsaXN0X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdF9cIiArIGluZGV4KTtcclxuXHJcbiAgICAvL2FkZCBpZFxyXG4gICAgbGlzdF9kZXRhaWxzLmlkID0gXCJsaXN0cy1pdGVtXCI7XHJcblxyXG4gICAgLy9jcmVhdGUgY2hlY2tib3ggZWxlbWVudFxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIC8vIEFzc2lnbmluZyB0aGUgYXR0cmlidXRlc1xyXG4gICAgLy8gdG8gY3JlYXRlZCBjaGVja2JveFxyXG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94Lm5hbWUgPSAnY29tcGxldGUnO1xyXG4gICAgY2hlY2tib3gudmFsdWUgPSAnY29tcGxldGUnO1xyXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnLnJlZ3VsYXItY2hlY2tib3gnKTtcclxuXHJcbiAgICAvL2FwcGVuZCB0byBwYXJlbnQgZWxlbWVudFxyXG4gICAgbGlzdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hfY29udGFpbmVyKTtcclxuICAgIGNoZWNrYm94X2NvbnRhaW5lci5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgbGlzdF9jb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdF9kZXRhaWxzKTtcclxuICAgIGxpc3RfY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bl9jb250YWluZXIpO1xyXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3X3N2Zyk7XHJcbiAgICBidG5fY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5X2luZGljYXRvcik7XHJcbiAgICBidG5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZV9zdmcpO1xyXG5cclxuICAgIC8vYXBlbmQgcGF0aCB0byByZXNwZWN0aXZlIHN2Z1xyXG4gICAgdmlld19zdmcuYXBwZW5kQ2hpbGQodmlld19wYXRoKTtcclxuICAgIGRlbGV0ZV9zdmcuYXBwZW5kQ2hpbGQoZGVsZXRlX3BhdGgpO1xyXG5cclxuICAgIC8vYXBwZW5kIGxpc3QgY29udGFpbmVyIHRvIHBhcmVudFxyXG4gICAgbXlMaXN0cy5hcHBlbmRDaGlsZChsaXN0X2NvbnRhaW5lcik7XHJcbn0iLCIvL1xyXG5jb25zdCBuZXdQcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfcHJvamVjdCcpO1xyXG5cclxubmV3UHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFkZCBuZXcgcHJvamVjdCFcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59KVxyXG5cclxuLy9hbGwgY2FuY2VsIGJ1dHRvbiBsb2dpY1xyXG5jb25zdCBjbG9zZV9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbmNlbCcpO1xyXG5cclxuY2xvc2VfZm9ybS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvL2FkZCBwcm9qZWN0IGZvcm1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIC8vYWRkIHRvZG8gZm9ybVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUb2Rvc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pXHJcbn0pXHJcblxyXG5jb25zdCBjbG9zZV9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlX2xpc3RzJyk7XHJcblxyXG5jbG9zZV9saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2Nsb3NlIGxpc3QhJyk7XHJcblxyXG4gICAgLy9saXN0IGhlYWRlciBjb250YWluZXJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdHMtb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUxpc3RzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAvL2xpc3QgaXRlbXNcclxuICAgIC8vdXNlIHByb2ogaW5kZXggdG8gZGV0ZXJtaW5lIHBhcmVudCBwcm9qZWN0XHJcbiAgICBsZXQgcHJval9pbmRleCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfaW5kZXgnKSk7XHJcbiAgICAvL2xvY2F0ZSBjbGFzcyBvZiBhIGxpc3QgYW5kIGRpc3BsYXkgaXRcclxuICAgIGxldCBsaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0X1wiICsgcHJval9pbmRleCk7XHJcbiAgICBmb3IobGV0IGk9MDsgaTxsaXN0cy5sZW5ndGg7IGkrKykgeyBcclxuICAgICAgICBsaXN0c1tpXS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsaXN0X1wiICsgcHJval9pbmRleCk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL2Nsb3NlIGZvcm0gd2hlbiB1c2VyIHN1Ym1pdHRlZCBmb3JtXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm0oZm9ybVR5cGUpIHtcclxuICAgIHN3aXRjaChmb3JtVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3Byb2plY3QnOlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd0b2Rvcyc6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUb2Rvc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRNZSgpe1xyXG4gICAgY29uc29sZS5sb2coJ0ltIGZyb20gbmV3IHByb2plY3QhJyk7XHJcbn0iLCJpbXBvcnQgeyBwcmludE1lIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gXCIuL2NyZWF0ZS1jYXJkXCI7XHJcbmltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gXCIuL25ldy1wcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgbGV0IHByb2pfbmFtZV9hcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2pfbmFtZSB8fCAnW10nKTtcclxuZXhwb3J0IGxldCBwcm9qX2Rlc2NyaXB0aW9uX2FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJval9kZXNjcmlwdGlvbiB8fCAnW10nKTtcclxuZXhwb3J0IGxldCBwcm9qX2NvdW50ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qX2NvdW50ZXIgfHwgJzAnKTtcclxuLy90ZXN0XHJcbmxldCBwcm9qZWN0X2luZGV4X2FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kb190aXRsZSB8fCAnW10nKTtcclxuXHJcbmZ1bmN0aW9uIHN0b3JlUHJvamVjdEludG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAvL2xvY2F0ZSBET00gZWxlbWVudFxyXG4gICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxuICAgIGNvbnN0IHByb2plY3RfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICAvL3N0b3JlIGZvcm0gaW5wdXQgdmFsdWUgaW50byBhbiBhcnJheVxyXG4gICAgcHJval9uYW1lX2FycmF5LnB1c2gocHJvamVjdF9uYW1lLnZhbHVlKTtcclxuICAgIHByb2pfZGVzY3JpcHRpb25fYXJyYXkucHVzaChwcm9qZWN0X2Rlc2NyaXB0aW9uLnZhbHVlKTtcclxuXHJcbiAgICAvL3Rlc3RcclxuICAgIGNvbnNvbGUubG9nKHByb2pfbmFtZV9hcnJheSk7XHJcblxyXG4gICAgLy9zdG9yZSBhcnJheSBpbnRvIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX25hbWUnLCBKU09OLnN0cmluZ2lmeShwcm9qX25hbWVfYXJyYXkpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX2Rlc2NyaXB0aW9uJywgSlNPTi5zdHJpbmdpZnkocHJval9kZXNjcmlwdGlvbl9hcnJheSkpO1xyXG59XHJcblxyXG4vL2NsZWFyIGZvcm0gaW5wdXQgY29udGVudHNcclxuZnVuY3Rpb24gY2xlYXJJbnB1dEZpZWxkKCkge1xyXG4gICAgLy9sb2NhdGUgRE9NIGVsZW1lbnRcclxuICAgIGNvbnN0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0X2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7IFxyXG5cclxuICAgIC8vY2xlYXIgZmllbGRzXHJcbiAgICBwcm9qZWN0X25hbWUudmFsdWUgPSAnJztcclxuICAgIHByb2plY3RfZGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxufVxyXG5cclxuLy93aGVuIGZvcm0gaXMgc3VibWl0dGVkXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykub25zdWJtaXQgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vc3RvcmUgcHJvamVjdCBpbnRvIGxvY2FsIHN0b3JhZ2UgXHJcbiAgICBzdG9yZVByb2plY3RJbnRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAvL2NyZWF0ZSBwcm9qZWN0IGNhcmQgXHJcbiAgICBjcmVhdGVDYXJkKHByb2pfY291bnRlcik7XHJcbiAgICAvL2FkZCArMSB0byBwcm9qZWN0IGNvdW50ZXJcclxuICAgIHByb2pfY291bnRlcisrO1xyXG4gICAgLy9zdG9yZSBwcm9qZWN0IGNvdW50ZXIgaW50byBsb2NhbCBzdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9jb3VudGVyJywgSlNPTi5zdHJpbmdpZnkocHJval9jb3VudGVyKSk7XHJcbiAgICAvL2NsZWFyIGlucHV0cyBiZWZvcmUgY2xvc2luZyBmb3JtXHJcbiAgICBjbGVhcklucHV0RmllbGQoKTtcclxuICAgIC8vY2xvc2UgdGhlIGZvcm0gcG9wb3V0XHJcbiAgICBjbG9zZUZvcm0oJ3Byb2plY3QnKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8vXHJcbmZ1bmN0aW9uIGdldFByb2plY3RJbmRleChjb3VudGVyKSB7XHJcbiAgICByZXR1cm4ge2NvdW50ZXJ9O1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zdG9yZS1wcm9qZWN0LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9