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
        document.getElementById("myTodos").style.display = "block";
        document.getElementById("todo-overlay").style.display = "block";
    })

    //add class
    new_btn_delete.classList.add('delete_btn');

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
        let new_counter = _store_project__WEBPACK_IMPORTED_MODULE_0__.proj_counter;
        --new_counter;
        localStorage.setItem('proj_counter', JSON.stringify(new_counter));
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

const closeForm_button = document.querySelector('.cancel');

// console.log(closeForm_button);

closeForm_button.addEventListener('click', () => {
    // console.log("Add new project!");
    document.getElementById("myForm").style.display = "none";
    document.getElementById("overlay").style.display = 'none';
})

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("overlay").style.display = 'none';
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
    (0,_new_project__WEBPACK_IMPORTED_MODULE_0__.closeForm)();

    return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVQcm9qZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUY7QUFDdkY7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQXNCO0FBQzlCLFFBQVEseUVBQTZCO0FBQ3JDO0FBQ0EseURBQXlELDJEQUFlO0FBQ3hFLGdFQUFnRSxrRUFBc0I7QUFDdEY7QUFDQSwwQkFBMEIsd0RBQVk7QUFDdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ3QztBQUNHO0FBQ0Q7QUFDMUM7QUFDTztBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTs7Ozs7OztVQ3JEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215dG9kb3MvLi9zcmMvY3JlYXRlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy8uL3NyYy9uZXctcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL3N0b3JlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qX25hbWVfYXJyYXksIHByb2pfZGVzY3JpcHRpb25fYXJyYXksIHByb2pfY291bnRlcn0gZnJvbSBcIi4vc3RvcmUtcHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmQoY291bnRlcikge1xyXG4gICAgY29uc3QgbG9jYXRlX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbmNvbnRlbnQgLmNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBuZXcgY2FyZCBkaXZcclxuICAgIGNvbnN0IG5ld19jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19idG5fYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX3ZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgIGNvbnN0IG5ld19idG5fY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgIGNvbnN0IG5ld19idG5fZGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcblxyXG4gICAgLy9hZGQgY2xhc3MgbmFtZVxyXG4gICAgbmV3X2NhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgbmV3X3RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICBuZXdfZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcclxuXHJcbiAgICAvL3JldHJpZXZlIHByb2plY3QgbmFtZSBhbmQgZGVzY3JpcHRpb24gaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgY29uc3QgZ2V0X3Byb2plY3RfTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfbmFtZScpKTtcclxuICAgIGNvbnN0IGdldF9wcm9qZWN0X0Rlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9kZXNjcmlwdGlvbicpKTtcclxuXHJcbiAgICBuZXdfdGl0bGUudGV4dENvbnRlbnQgPSBnZXRfcHJvamVjdF9OYW1lW2NvdW50ZXJdO1xyXG4gICAgbmV3X2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZ2V0X3Byb2plY3RfRGVzY3JpcHRpb25bY291bnRlcl07XHJcblxyXG4gICAgLy9hZGQgdGV4dCBjb250ZW50XHJcbiAgICBuZXdfYnRuX2FkZC50ZXh0Q29udGVudCA9ICcrJztcclxuICAgIG5ld19idG5fdmlldy50ZXh0Q29udGVudCA9ICfwn5GBJztcclxuICAgIG5ld19idG5fY291bnQudGV4dENvbnRlbnQgPSAnMCc7XHJcbiAgICBuZXdfYnRuX2RlbGV0ZS50ZXh0Q29udGVudCA9ICdYJztcclxuXHJcbiAgICAvL2FkZCB0b2RvcyBsaXN0ZW5lclxyXG4gICAgbmV3X2J0bl9hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRvZG9zXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH0pXHJcblxyXG4gICAgLy9hZGQgY2xhc3NcclxuICAgIG5ld19idG5fZGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZV9idG4nKTtcclxuXHJcbiAgICAvL2RlbGV0ZSBjYXJkIHRvZ2V0aGVyIHdpdGggbG9jYWwgc3RvcmFnZSBjb21wb25lbnRzXHJcbiAgICBuZXdfYnRuX2RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBuZXdfY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAvL3JlbW92ZSB0aGUgaXRlbXMgaW4gdGhlIGFycmF5XHJcbiAgICAgICAgcHJval9uYW1lX2FycmF5LnNwbGljZShjb3VudGVyLCAxKTtcclxuICAgICAgICBwcm9qX2Rlc2NyaXB0aW9uX2FycmF5LnNwbGljZShjb3VudGVyLCAxKTtcclxuICAgICAgICAvL3VwZGF0ZSBpdGVtcyBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfbmFtZScsIEpTT04uc3RyaW5naWZ5KHByb2pfbmFtZV9hcnJheSkpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX2Rlc2NyaXB0aW9uJywgSlNPTi5zdHJpbmdpZnkocHJval9kZXNjcmlwdGlvbl9hcnJheSkpO1xyXG4gICAgICAgIC8vZGVjcmVhc2UgcHJvamVjdCBjb3VudGVyIGNvdW50IGFuZCB1cGRhdGUgaW4gbG9jYWxzdG9yYWdlXHJcbiAgICAgICAgbGV0IG5ld19jb3VudGVyID0gcHJval9jb3VudGVyO1xyXG4gICAgICAgIC0tbmV3X2NvdW50ZXI7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfY291bnRlcicsIEpTT04uc3RyaW5naWZ5KG5ld19jb3VudGVyKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vYXBwZW5kIHRvIHBhcmVudCBjb250YWluZXJcclxuICAgIGxvY2F0ZV9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2NhcmQpO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X3RpdGxlKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld19kZXNjcmlwdGlvbik7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfYnRuX2NvbnRhaW5lcik7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX2FkZCk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX3ZpZXcpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl9jb3VudCk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX2RlbGV0ZSk7XHJcbn0iLCIvL1xyXG5jb25zdCBuZXdQcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfcHJvamVjdCcpO1xyXG5cclxubmV3UHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFkZCBuZXcgcHJvamVjdCFcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59KVxyXG5cclxuY29uc3QgY2xvc2VGb3JtX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGNsb3NlRm9ybV9idXR0b24pO1xyXG5cclxuY2xvc2VGb3JtX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQWRkIG5ldyBwcm9qZWN0IVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRNZSgpe1xyXG4gICAgY29uc29sZS5sb2coJ0ltIGZyb20gbmV3IHByb2plY3QhJyk7XHJcbn0iLCJpbXBvcnQgeyBwcmludE1lIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gXCIuL2NyZWF0ZS1jYXJkXCI7XHJcbmltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gXCIuL25ldy1wcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgbGV0IHByb2pfbmFtZV9hcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2pfbmFtZSB8fCAnW10nKTtcclxuZXhwb3J0IGxldCBwcm9qX2Rlc2NyaXB0aW9uX2FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJval9kZXNjcmlwdGlvbiB8fCAnW10nKTtcclxuZXhwb3J0IGxldCBwcm9qX2NvdW50ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qX2NvdW50ZXIgfHwgJzAnKTtcclxuXHJcbmZ1bmN0aW9uIHN0b3JlUHJvamVjdEludG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAvL2xvY2F0ZSBET00gZWxlbWVudFxyXG4gICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxuICAgIGNvbnN0IHByb2plY3RfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICAvL3N0b3JlIGZvcm0gaW5wdXQgdmFsdWUgaW50byBhbiBhcnJheVxyXG4gICAgcHJval9uYW1lX2FycmF5LnB1c2gocHJvamVjdF9uYW1lLnZhbHVlKTtcclxuICAgIHByb2pfZGVzY3JpcHRpb25fYXJyYXkucHVzaChwcm9qZWN0X2Rlc2NyaXB0aW9uLnZhbHVlKTtcclxuXHJcbiAgICAvL3Rlc3RcclxuICAgIGNvbnNvbGUubG9nKHByb2pfbmFtZV9hcnJheSk7XHJcblxyXG4gICAgLy9zdG9yZSBhcnJheSBpbnRvIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX25hbWUnLCBKU09OLnN0cmluZ2lmeShwcm9qX25hbWVfYXJyYXkpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX2Rlc2NyaXB0aW9uJywgSlNPTi5zdHJpbmdpZnkocHJval9kZXNjcmlwdGlvbl9hcnJheSkpO1xyXG59XHJcblxyXG4vL2NsZWFyIGZvcm0gaW5wdXQgY29udGVudHNcclxuZnVuY3Rpb24gY2xlYXJJbnB1dEZpZWxkKCkge1xyXG4gICAgLy9sb2NhdGUgRE9NIGVsZW1lbnRcclxuICAgIGNvbnN0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0X2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7IFxyXG5cclxuICAgIC8vY2xlYXIgZmllbGRzXHJcbiAgICBwcm9qZWN0X25hbWUudmFsdWUgPSAnJztcclxuICAgIHByb2plY3RfZGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxufVxyXG5cclxuLy93aGVuIGZvcm0gaXMgc3VibWl0dGVkXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykub25zdWJtaXQgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vc3RvcmUgcHJvamVjdCBpbnRvIGxvY2FsIHN0b3JhZ2UgXHJcbiAgICBzdG9yZVByb2plY3RJbnRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAvL2NyZWF0ZSBwcm9qZWN0IGNhcmQgXHJcbiAgICBjcmVhdGVDYXJkKHByb2pfY291bnRlcik7XHJcbiAgICAvL2FkZCArMSB0byBwcm9qZWN0IGNvdW50ZXJcclxuICAgIHByb2pfY291bnRlcisrO1xyXG4gICAgLy9zdG9yZSBwcm9qZWN0IGNvdW50ZXIgaW50byBsb2NhbCBzdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9jb3VudGVyJywgSlNPTi5zdHJpbmdpZnkocHJval9jb3VudGVyKSk7XHJcbiAgICAvL2NsZWFyIGlucHV0cyBiZWZvcmUgY2xvc2luZyBmb3JtXHJcbiAgICBjbGVhcklucHV0RmllbGQoKTtcclxuICAgIC8vY2xvc2UgdGhlIGZvcm0gcG9wb3V0XHJcbiAgICBjbG9zZUZvcm0oKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zdG9yZS1wcm9qZWN0LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9