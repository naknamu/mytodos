/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/add-todos.js ***!
  \**************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVG9kb3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7OztVQzdEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNHO0FBQzdDO0FBQ0E7QUFDQSx1RkFBdUY7QUFDaEY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL2NyZWF0ZS10b2Rvcy5qcyIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL25ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL2FkZC10b2Rvcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2R5bmFtaWNhbGx5IGNyZWF0ZSB0b2RvIGxpc3QgdXNpbmcganNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvcyhpbmRleCwgY291bnQpIHtcclxuXHJcbiAgICAvL2xvY2F0ZSBsaXN0IGlkXHJcbiAgICBjb25zdCBteUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215TGlzdHMnKTtcclxuICAgIC8vY3JlYXRlIGxpc3QgY29udGFpbmVyXHJcbiAgICBjb25zdCBsaXN0X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIC8vY3JlYXRlIGNoZWNrYm94IGNvbnRhaW5lclxyXG4gICAgY29uc3QgY2hlY2tib3hfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvL2NyZWF0ZSBsaXN0IGRldGFpbHMgZWxlbWVudFxyXG4gICAgY29uc3QgbGlzdF9kZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvL2NyZWF0ZSBidXR0b24gY29udGFpbmVyXHJcbiAgICBjb25zdCBidG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9jcmVhdGUgdmlldyBsaXN0IHN2ZyBhbmQgcGF0aFxyXG4gICAgbGV0IHZpZXdfc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3N2ZycpO1xyXG4gICAgbGV0IHZpZXdfcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdwYXRoJyk7XHJcbiAgICAvL2NyZWF0ZSBkZWxldGUgbGlzdCBzdmcgYW5kIHBhdGhcclxuICAgIGxldCBkZWxldGVfc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3N2ZycpO1xyXG4gICAgbGV0IGRlbGV0ZV9wYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBwcmlvcml0eSBpbmRpY2F0b3JcclxuICAgIGNvbnN0IHByaW9yaXR5X2luZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIC8vYWRkIGF0dHJpYnV0ZXMgdG8gdmlldyBzdmdcclxuICAgIHZpZXdfcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTEyIDQuNUM3IDQuNSAyLjcgNy42IDEgMTJDMi43IDE2LjQgNyAxOS41IDEyIDE5LjVIMTMuMUMxMyAxOS4yIDEzIDE4LjkgMTMgMTguNUMxMyAxOC4xIDEzIDE3LjggMTMuMSAxNy40QzEyLjcgMTcuNCAxMi40IDE3LjUgMTIgMTcuNUM4LjIgMTcuNSA0LjggMTUuNCAzLjIgMTJDNC44IDguNiA4LjIgNi41IDEyIDYuNVMxOS4yIDguNiAyMC44IDEyQzIwLjcgMTIuMiAyMC41IDEyLjQgMjAuNCAxMi43QzIxLjEgMTIuOSAyMS43IDEzLjEgMjIuMyAxMy41QzIyLjYgMTMgMjIuOCAxMi41IDIzIDEyQzIxLjMgNy42IDE3IDQuNSAxMiA0LjVNMTIgOUMxMC4zIDkgOSAxMC4zIDkgMTJTMTAuMyAxNSAxMiAxNSAxNSAxMy43IDE1IDEyIDEzLjcgOSAxMiA5TTE5IDIxVjE5SDE1VjE3SDE5VjE1TDIyIDE4TDE5IDIxXCIpO1xyXG4gICAgdmlld19zdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgMjQpO1xyXG4gICAgdmlld19zdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDI0KTtcclxuICAgIHZpZXdfc3ZnLnNldEF0dHJpYnV0ZSgneDEnLCAnMCcpO1xyXG4gICAgdmlld19zdmcuc2V0QXR0cmlidXRlKCd5MScsICcwJyk7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoJ3gyJywgJzI0Jyk7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoJ3kyJywgJzI0Jyk7XHJcblxyXG4gICAgLy9hZGQgYXR0cmlidXRlcyB0byBkZWxldGUgc3ZnXHJcbiAgICBkZWxldGVfcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTE5LDRIMTUuNUwxNC41LDNIOS41TDguNSw0SDVWNkgxOU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlaXCIpO1xyXG4gICAgZGVsZXRlX3N2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCAyNCk7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAyNCk7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZSgneDEnLCAnMCcpO1xyXG4gICAgZGVsZXRlX3N2Zy5zZXRBdHRyaWJ1dGUoJ3kxJywgJzAnKTtcclxuICAgIGRlbGV0ZV9zdmcuc2V0QXR0cmlidXRlKCd4MicsICcyNCcpO1xyXG4gICAgZGVsZXRlX3N2Zy5zZXRBdHRyaWJ1dGUoJ3kyJywgJzI0Jyk7XHJcblxyXG4gICAgLy9hZGQgdGV4dCwgZ2V0IGRhdGEgZnJvbSB1c2VyIGlucHV0IHRvZG8gdGl0bGVcclxuICAgIC8vIGxldCBpbnB1dF90b2RvX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9fdGl0bGUnKTtcclxuICAgIGxldCBsb2NhbF90b2RvX3RpdGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb190aXRsZV9hcnJheScpKTtcclxuXHJcbiAgICBsaXN0X2RldGFpbHMudGV4dENvbnRlbnQgPSBcIlwiICsgbG9jYWxfdG9kb190aXRsZVtpbmRleF1bY291bnRdO1xyXG4gICAgcHJpb3JpdHlfaW5kaWNhdG9yLnRleHRDb250ZW50ID0gJ0hJR0gnO1xyXG5cclxuICAgIC8vYWRkIGNsYXNzXHJcbiAgICBsaXN0X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0cycpO1xyXG4gICAgY2hlY2tib3hfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtbGluZScpO1xyXG4gICAgY2hlY2tib3hfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICBsaXN0X2RldGFpbHMuY2xhc3NMaXN0LmFkZCgnZ3JpZC1saW5lJyk7XHJcbiAgICBidG5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcclxuICAgIHZpZXdfc3ZnLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICAgIGRlbGV0ZV9zdmcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG5cclxuICAgIC8vdXNlIHByb2ogaW5kZXggdG8gZGV0ZXJtaW5lIHBhcmVudCBwcm9qZWN0XHJcbiAgICAvLyBsZXQgcHJval9pbmRleCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfaW5kZXgnKSk7XHJcblxyXG4gICAgbGlzdF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RfXCIgKyBpbmRleCk7XHJcblxyXG4gICAgLy9hZGQgaWRcclxuICAgIGxpc3RfZGV0YWlscy5pZCA9IFwibGlzdHMtaXRlbVwiO1xyXG5cclxuICAgIC8vY3JlYXRlIGNoZWNrYm94IGVsZW1lbnRcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICAvLyBBc3NpZ25pbmcgdGhlIGF0dHJpYnV0ZXNcclxuICAgIC8vIHRvIGNyZWF0ZWQgY2hlY2tib3hcclxuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjaGVja2JveC5uYW1lID0gJ2NvbXBsZXRlJztcclxuICAgIGNoZWNrYm94LnZhbHVlID0gJ2NvbXBsZXRlJztcclxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJy5yZWd1bGFyLWNoZWNrYm94Jyk7XHJcblxyXG4gICAgLy9hcHBlbmQgdG8gcGFyZW50IGVsZW1lbnRcclxuICAgIGxpc3RfY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94X2NvbnRhaW5lcik7XHJcbiAgICBjaGVja2JveF9jb250YWluZXIuYXBwZW5kKGNoZWNrYm94KTtcclxuICAgIGxpc3RfY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RfZGV0YWlscyk7XHJcbiAgICBsaXN0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5fY29udGFpbmVyKTtcclxuICAgIGJ0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQodmlld19zdmcpO1xyXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eV9pbmRpY2F0b3IpO1xyXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVfc3ZnKTtcclxuXHJcbiAgICAvL2FwZW5kIHBhdGggdG8gcmVzcGVjdGl2ZSBzdmdcclxuICAgIHZpZXdfc3ZnLmFwcGVuZENoaWxkKHZpZXdfcGF0aCk7XHJcbiAgICBkZWxldGVfc3ZnLmFwcGVuZENoaWxkKGRlbGV0ZV9wYXRoKTtcclxuXHJcbiAgICAvL2FwcGVuZCBsaXN0IGNvbnRhaW5lciB0byBwYXJlbnRcclxuICAgIG15TGlzdHMuYXBwZW5kQ2hpbGQobGlzdF9jb250YWluZXIpO1xyXG59IiwiLy9cclxuY29uc3QgbmV3UHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3X3Byb2plY3QnKTtcclxuXHJcbm5ld1Byb2plY3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBZGQgbmV3IHByb2plY3QhXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufSlcclxuXHJcbi8vYWxsIGNhbmNlbCBidXR0b24gbG9naWNcclxuY29uc3QgY2xvc2VfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYW5jZWwnKTtcclxuXHJcbmNsb3NlX2Zvcm0uZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy9hZGQgcHJvamVjdCBmb3JtXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAvL2FkZCB0b2RvIGZvcm1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VG9kb3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuY29uc3QgY2xvc2VfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9saXN0cycpO1xyXG5cclxuY2xvc2VfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjbG9zZSBsaXN0IScpO1xyXG5cclxuICAgIC8vbGlzdCBoZWFkZXIgY29udGFpbmVyXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RzLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlMaXN0c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgLy9saXN0IGl0ZW1zXHJcbiAgICAvL3VzZSBwcm9qIGluZGV4IHRvIGRldGVybWluZSBwYXJlbnQgcHJvamVjdFxyXG4gICAgbGV0IHByb2pfaW5kZXggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX2luZGV4JykpO1xyXG4gICAgLy9sb2NhdGUgY2xhc3Mgb2YgYSBsaXN0IGFuZCBkaXNwbGF5IGl0XHJcbiAgICBsZXQgbGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdF9cIiArIHByb2pfaW5kZXgpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8bGlzdHMubGVuZ3RoOyBpKyspIHsgXHJcbiAgICAgICAgbGlzdHNbaV0uc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGlzdF9cIiArIHByb2pfaW5kZXgpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuLy9jbG9zZSBmb3JtIHdoZW4gdXNlciBzdWJtaXR0ZWQgZm9ybVxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VGb3JtKGZvcm1UeXBlKSB7XHJcbiAgICBzd2l0Y2goZm9ybVR5cGUpIHtcclxuICAgICAgICBjYXNlICdwcm9qZWN0JzpcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndG9kb3MnOlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VG9kb3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50TWUoKXtcclxuICAgIGNvbnNvbGUubG9nKCdJbSBmcm9tIG5ldyBwcm9qZWN0IScpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2RvcyB9IGZyb20gXCIuL2NyZWF0ZS10b2Rvc1wiO1xyXG5cclxubGV0IHRvZG9fdGl0bGVfZmlsdGVyZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50b2RvX3RpdGxlX2FycmF5IHx8ICdbXScpO1xyXG5sZXQgdG9kb190aXRsZV9tdWx0aWFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kb190aXRsZV9tdWx0aWFycmF5IHx8ICdbXScpOyAgICAvL2EgbXVsdGkgZGltZW5zaW9uYWwgYXJyYXkgdGhhdCB3aWxsIGNvbnRhaW4gYWxsIHRvZG8gdGl0bGUgYXJyYXlzXHJcbmV4cG9ydCBsZXQgdG9kb19jb3VudGVyX2FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kb19jb3VudGVyX2FycmF5IHx8ICdbXScpO1xyXG5cclxuLy9zdG9yZSBhZGRlZCB0b2RvcyBpbiBhbiBhcnJheSBhbmQgdGhlbiBpbiBsb2NhbCBzdG9yYWdlXHJcbmZ1bmN0aW9uIHN0b3JlVG9kb3NJbkxvY2FsU3RvcmFnZShwcm9qX2luZGV4LCB0b2RvX2NvdW50KSB7XHJcbiAgICBjb25zdCB0b2RvX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9fdGl0bGUnKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBmaXJzdCBhbiBlbXB0eSBhcnJheVxyXG4gICAgdG9kb190aXRsZV9tdWx0aWFycmF5LnB1c2goW10pO1xyXG4gICAgLy9hc3NpZ24gdmFsdWUgdG8gdGhlIGFycmF5XHJcbiAgICB0b2RvX3RpdGxlX211bHRpYXJyYXlbcHJval9pbmRleF1bdG9kb19jb3VudF0gPSB0b2RvX3RpdGxlLnZhbHVlO1xyXG5cclxuICAgIC8vc3RvcmUgbXVsdGlhcnJheSB3aXRoIGVtcHR5IGFycmF5cyBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb190aXRsZV9tdWx0aWFycmF5JywgSlNPTi5zdHJpbmdpZnkodG9kb190aXRsZV9tdWx0aWFycmF5KSk7XHJcblxyXG4gICAgLy9jaGVjayBpZiBhbiBhcnJheSBpcyBlbXB0eSB0aGVuIHJlbW92ZSB0aGUgZW1wdHkgYXJyYXlcclxuICAgIHRvZG9fdGl0bGVfZmlsdGVyZWQgPSAgdG9kb190aXRsZV9tdWx0aWFycmF5LmZpbHRlcihmdW5jdGlvbihlKSB7IFxyXG4gICAgICAgIHJldHVybiBlLmxlbmd0aDtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvL3N0b3JlIHRoZSBtdWx0aWRpbWVuc2lvbmFsIGFycmF5IGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvX3RpdGxlX2FycmF5JywgSlNPTi5zdHJpbmdpZnkodG9kb190aXRsZV9maWx0ZXJlZCkpO1xyXG59XHJcblxyXG4vL3VzZSBvbnN1Ym1pdCBzbyB0aGUgZGF0YSBpcyBwcm9jZXNzZWQgb25seSB3aGVuIGZvcm0gaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVxyXG5jb25zdCBhZGRUb2RvX2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlUb2RvcycpLm9uc3VibWl0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy91c2UgcHJvaiBpbmRleCB0byBkZXRlcm1pbmUgcGFyZW50IHByb2plY3RcclxuICAgIGxldCBwcm9qX2luZGV4ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9pbmRleCcpKTtcclxuXHJcbiAgICAvL2ZpbmQgY291bnQgYnV0dG9uXHJcbiAgICBjb25zdCBjb3VudF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJval8nICsgcHJval9pbmRleCArICcgJyArICcuY291bnRfYnRuJyk7XHJcblxyXG4gICAgLy9jb252ZXJ0IHRvIG51bWJlclxyXG4gICAgbGV0IHRvZG9fY291bnQgPSBOdW1iZXIoY291bnRfYnRuLnRleHRDb250ZW50KTtcclxuXHJcbiAgICAvL3N0b3JlIHRvZG9zIGluIGFuIGFycmF5IGluIHRoZW4gaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgc3RvcmVUb2Rvc0luTG9jYWxTdG9yYWdlKHByb2pfaW5kZXgsIHRvZG9fY291bnQpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdpbmRleDonICsgcHJval9pbmRleCArICdjb3VudDonICsgdG9kb19jb3VudCk7XHJcbiAgICAvL2NyZWF0ZSB0b2Rvc1xyXG4gICAgY3JlYXRlVG9kb3MocHJval9pbmRleCwgdG9kb19jb3VudCk7XHJcblxyXG4gICAgLy9hZGQgdG9kbyBjb3VudFxyXG4gICAgdG9kb19jb3VudCsrO1xyXG5cclxuICAgIC8vdXBkYXRlIERPTSB2YWx1ZVxyXG4gICAgY291bnRfYnRuLnRleHRDb250ZW50ID0gJycgKyB0b2RvX2NvdW50O1xyXG5cclxuICAgIC8vaW5zZXJ0IGludG8gYXJyYXlcclxuICAgIHRvZG9fY291bnRlcl9hcnJheVtwcm9qX2luZGV4XSA9IHRvZG9fY291bnQ7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ3RvZG8gY291bnRlciBhcnJheTonICsgdG9kb19jb3VudGVyX2FycmF5KTtcclxuXHJcbiAgICAvL3N0b3JlIGludG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9fY291bnRlcl9hcnJheScsIEpTT04uc3RyaW5naWZ5KHRvZG9fY291bnRlcl9hcnJheSkpO1xyXG4gICAgXHJcbiAgICAvL2Nsb3NlcyBmb3JtIGFmdGVyIHN1Ym1pdHRpbmdcclxuICAgIGNsb3NlRm9ybSgndG9kb3MnKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9