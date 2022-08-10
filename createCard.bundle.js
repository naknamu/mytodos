/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        //by using project counter (index) we can attach the added todo list items to its parent project
        console.log('project_index:' + counter);
        localStorage.setItem('proj_index', JSON.stringify(counter));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQ2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlFO0FBQ3pFO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBc0I7QUFDOUIsUUFBUSx5RUFBNkI7QUFDckM7QUFDQSx5REFBeUQsMkRBQWU7QUFDeEUsZ0VBQWdFLGtFQUFzQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEN3QztBQUNHO0FBQ0Q7QUFDMUM7QUFDTztBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7Ozs7OztVQzVEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215dG9kb3MvLi9zcmMvY3JlYXRlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy8uL3NyYy9uZXctcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL3N0b3JlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qX25hbWVfYXJyYXksIHByb2pfZGVzY3JpcHRpb25fYXJyYXl9IGZyb20gXCIuL3N0b3JlLXByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkKGNvdW50ZXIpIHtcclxuICAgIGNvbnN0IGxvY2F0ZV9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5jb250ZW50IC5jb250YWluZXJcIik7XHJcblxyXG4gICAgLy9jcmVhdGUgbmV3IGNhcmQgZGl2XHJcbiAgICBjb25zdCBuZXdfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19idG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl92aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG5cclxuICAgIC8vYWRkIGNsYXNzIG5hbWVcclxuICAgIG5ld19jYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgIG5ld190aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgbmV3X2Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XHJcbiAgICBuZXdfYnRuX2NvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50X2J0bicpO1xyXG4gICAgbmV3X2J0bl9kZWxldGUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlX2J0bicpO1xyXG5cclxuICAgIC8vYWRkIGNsYXNzIGlkXHJcbiAgICBuZXdfY2FyZC5pZCA9ICdwcm9qXycgKyBjb3VudGVyO1xyXG5cclxuICAgIC8vcmV0cmlldmUgcHJvamVjdCBuYW1lIGFuZCBkZXNjcmlwdGlvbiBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICBjb25zdCBnZXRfcHJvamVjdF9OYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9uYW1lJykpO1xyXG4gICAgY29uc3QgZ2V0X3Byb2plY3RfRGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX2Rlc2NyaXB0aW9uJykpO1xyXG5cclxuICAgIG5ld190aXRsZS50ZXh0Q29udGVudCA9IGdldF9wcm9qZWN0X05hbWVbY291bnRlcl07XHJcbiAgICBuZXdfZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBnZXRfcHJvamVjdF9EZXNjcmlwdGlvbltjb3VudGVyXTtcclxuXHJcbiAgICAvL2FkZCB0ZXh0IGNvbnRlbnRcclxuICAgIG5ld19idG5fYWRkLnRleHRDb250ZW50ID0gJysnO1xyXG4gICAgbmV3X2J0bl92aWV3LnRleHRDb250ZW50ID0gJ/CfkYEnO1xyXG4gICAgbmV3X2J0bl9jb3VudC50ZXh0Q29udGVudCA9ICcwJztcclxuICAgIG5ld19idG5fZGVsZXRlLnRleHRDb250ZW50ID0gJ1gnO1xyXG5cclxuICAgIC8vYWRkIHRvZG9zIGxpc3RlbmVyXHJcbiAgICBuZXdfYnRuX2FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvL2VuYWJsZSB0aGUgYWRkIHRvZG8gZm9ybVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUb2Rvc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgICAgIC8vdGVzdFxyXG4gICAgICAgIC8vYnkgdXNpbmcgcHJvamVjdCBjb3VudGVyIChpbmRleCkgd2UgY2FuIGF0dGFjaCB0aGUgYWRkZWQgdG9kbyBsaXN0IGl0ZW1zIHRvIGl0cyBwYXJlbnQgcHJvamVjdFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0X2luZGV4OicgKyBjb3VudGVyKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9pbmRleCcsIEpTT04uc3RyaW5naWZ5KGNvdW50ZXIpKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9kZWxldGUgY2FyZCB0b2dldGhlciB3aXRoIGxvY2FsIHN0b3JhZ2UgY29tcG9uZW50c1xyXG4gICAgbmV3X2J0bl9kZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbmV3X2NhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgLy9yZW1vdmUgdGhlIGl0ZW1zIGluIHRoZSBhcnJheVxyXG4gICAgICAgIHByb2pfbmFtZV9hcnJheS5zcGxpY2UoY291bnRlciwgMSk7XHJcbiAgICAgICAgcHJval9kZXNjcmlwdGlvbl9hcnJheS5zcGxpY2UoY291bnRlciwgMSk7XHJcbiAgICAgICAgLy91cGRhdGUgaXRlbXMgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX25hbWUnLCBKU09OLnN0cmluZ2lmeShwcm9qX25hbWVfYXJyYXkpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9kZXNjcmlwdGlvbicsIEpTT04uc3RyaW5naWZ5KHByb2pfZGVzY3JpcHRpb25fYXJyYXkpKTtcclxuICAgICAgICAvL2RlY3JlYXNlIHByb2plY3QgY291bnRlciBjb3VudCBhbmQgdXBkYXRlIGluIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgIGxldCBuZXdfY291bnRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX2NvdW50ZXInKTtcclxuICAgICAgICAtLW5ld19jb3VudGVyO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX2NvdW50ZXInLCBKU09OLnN0cmluZ2lmeShuZXdfY291bnRlcikpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGVzdCBkZWxldGluZyBhdHRhY2hlZCB0b2RvIGluc2lkZSBwYXJlbnQgcHJvamVjdFxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgLy9hcHBlbmQgdG8gcGFyZW50IGNvbnRhaW5lclxyXG4gICAgbG9jYXRlX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfY2FyZCk7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfdGl0bGUpO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X2Rlc2NyaXB0aW9uKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld19idG5fY29udGFpbmVyKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fYWRkKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fdmlldyk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX2NvdW50KTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fZGVsZXRlKTtcclxufSIsIi8vXHJcbmNvbnN0IG5ld1Byb2plY3RfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld19wcm9qZWN0Jyk7XHJcblxyXG5uZXdQcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQWRkIG5ldyBwcm9qZWN0IVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn0pXHJcblxyXG4vL2FsbCBjYW5jZWwgYnV0dG9uIGxvZ2ljXHJcbmNvbnN0IGNsb3NlX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FuY2VsJyk7XHJcblxyXG5jbG9zZV9mb3JtLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vYWRkIHByb2plY3QgZm9ybVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgLy9hZGQgdG9kbyBmb3JtXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRvZG9zXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSlcclxufSlcclxuXHJcbi8vY2xvc2UgZm9ybSB3aGVuIHVzZXIgc3VibWl0dGVkIGZvcm1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRm9ybShmb3JtVHlwZSkge1xyXG4gICAgc3dpdGNoKGZvcm1UeXBlKSB7XHJcbiAgICAgICAgY2FzZSAncHJvamVjdCc6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3RvZG9zJzpcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRvZG9zXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludE1lKCl7XHJcbiAgICBjb25zb2xlLmxvZygnSW0gZnJvbSBuZXcgcHJvamVjdCEnKTtcclxufSIsImltcG9ydCB7IHByaW50TWUgfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY3JlYXRlLWNhcmRcIjtcclxuaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBsZXQgcHJval9uYW1lX2FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJval9uYW1lIHx8ICdbXScpO1xyXG5leHBvcnQgbGV0IHByb2pfZGVzY3JpcHRpb25fYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qX2Rlc2NyaXB0aW9uIHx8ICdbXScpO1xyXG5leHBvcnQgbGV0IHByb2pfY291bnRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2pfY291bnRlciB8fCAnMCcpO1xyXG4vL3Rlc3RcclxubGV0IHByb2plY3RfaW5kZXhfYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50b2RvX3RpdGxlIHx8ICdbXScpO1xyXG5cclxuZnVuY3Rpb24gc3RvcmVQcm9qZWN0SW50b0xvY2FsU3RvcmFnZSgpIHtcclxuICAgIC8vbG9jYXRlIERPTSBlbGVtZW50XHJcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xyXG4gICAgY29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cclxuICAgIC8vc3RvcmUgZm9ybSBpbnB1dCB2YWx1ZSBpbnRvIGFuIGFycmF5XHJcbiAgICBwcm9qX25hbWVfYXJyYXkucHVzaChwcm9qZWN0X25hbWUudmFsdWUpO1xyXG4gICAgcHJval9kZXNjcmlwdGlvbl9hcnJheS5wdXNoKHByb2plY3RfZGVzY3JpcHRpb24udmFsdWUpO1xyXG5cclxuICAgIC8vdGVzdFxyXG4gICAgY29uc29sZS5sb2cocHJval9uYW1lX2FycmF5KTtcclxuXHJcbiAgICAvL3N0b3JlIGFycmF5IGludG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfbmFtZScsIEpTT04uc3RyaW5naWZ5KHByb2pfbmFtZV9hcnJheSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfZGVzY3JpcHRpb24nLCBKU09OLnN0cmluZ2lmeShwcm9qX2Rlc2NyaXB0aW9uX2FycmF5KSk7XHJcbn1cclxuXHJcbi8vY2xlYXIgZm9ybSBpbnB1dCBjb250ZW50c1xyXG5mdW5jdGlvbiBjbGVhcklucHV0RmllbGQoKSB7XHJcbiAgICAvL2xvY2F0ZSBET00gZWxlbWVudFxyXG4gICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxuICAgIGNvbnN0IHByb2plY3RfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTsgXHJcblxyXG4gICAgLy9jbGVhciBmaWVsZHNcclxuICAgIHByb2plY3RfbmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgcHJvamVjdF9kZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG4vL3doZW4gZm9ybSBpcyBzdWJtaXR0ZWRcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy9zdG9yZSBwcm9qZWN0IGludG8gbG9jYWwgc3RvcmFnZSBcclxuICAgIHN0b3JlUHJvamVjdEludG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIC8vY3JlYXRlIHByb2plY3QgY2FyZCBcclxuICAgIGNyZWF0ZUNhcmQocHJval9jb3VudGVyKTtcclxuICAgIC8vYWRkICsxIHRvIHByb2plY3QgY291bnRlclxyXG4gICAgcHJval9jb3VudGVyKys7XHJcbiAgICAvL3N0b3JlIHByb2plY3QgY291bnRlciBpbnRvIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX2NvdW50ZXInLCBKU09OLnN0cmluZ2lmeShwcm9qX2NvdW50ZXIpKTtcclxuICAgIC8vY2xlYXIgaW5wdXRzIGJlZm9yZSBjbG9zaW5nIGZvcm1cclxuICAgIGNsZWFySW5wdXRGaWVsZCgpO1xyXG4gICAgLy9jbG9zZSB0aGUgZm9ybSBwb3BvdXRcclxuICAgIGNsb3NlRm9ybSgncHJvamVjdCcpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy9cclxuZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KGNvdW50ZXIpIHtcclxuICAgIHJldHVybiB7Y291bnRlcn07XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NyZWF0ZS1jYXJkLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9