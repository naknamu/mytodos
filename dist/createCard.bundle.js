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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/create-card.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQ2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVGO0FBQ3ZGO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFzQjtBQUM5QixRQUFRLHlFQUE2QjtBQUNyQztBQUNBLHlEQUF5RCwyREFBZTtBQUN4RSxnRUFBZ0Usa0VBQXNCO0FBQ3RGO0FBQ0EsMEJBQTBCLHdEQUFZO0FBQ3RDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCd0M7QUFDRztBQUNEO0FBQzFDO0FBQ087QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL2NyZWF0ZS1jYXJkLmpzIiwid2VicGFjazovL215dG9kb3MvLi9zcmMvbmV3LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy8uL3NyYy9zdG9yZS1wcm9qZWN0LmpzIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJval9uYW1lX2FycmF5LCBwcm9qX2Rlc2NyaXB0aW9uX2FycmF5LCBwcm9qX2NvdW50ZXJ9IGZyb20gXCIuL3N0b3JlLXByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkKGNvdW50ZXIpIHtcclxuICAgIGNvbnN0IGxvY2F0ZV9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5jb250ZW50IC5jb250YWluZXJcIik7XHJcblxyXG4gICAgLy9jcmVhdGUgbmV3IGNhcmQgZGl2XHJcbiAgICBjb25zdCBuZXdfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19idG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl92aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG5cclxuICAgIC8vYWRkIGNsYXNzIG5hbWVcclxuICAgIG5ld19jYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgIG5ld190aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgbmV3X2Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XHJcblxyXG4gICAgLy9yZXRyaWV2ZSBwcm9qZWN0IG5hbWUgYW5kIGRlc2NyaXB0aW9uIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIGNvbnN0IGdldF9wcm9qZWN0X05hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX25hbWUnKSk7XHJcbiAgICBjb25zdCBnZXRfcHJvamVjdF9EZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfZGVzY3JpcHRpb24nKSk7XHJcblxyXG4gICAgbmV3X3RpdGxlLnRleHRDb250ZW50ID0gZ2V0X3Byb2plY3RfTmFtZVtjb3VudGVyXTtcclxuICAgIG5ld19kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGdldF9wcm9qZWN0X0Rlc2NyaXB0aW9uW2NvdW50ZXJdO1xyXG5cclxuICAgIC8vYWRkIHRleHQgY29udGVudFxyXG4gICAgbmV3X2J0bl9hZGQudGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgICBuZXdfYnRuX3ZpZXcudGV4dENvbnRlbnQgPSAn8J+RgSc7XHJcbiAgICBuZXdfYnRuX2NvdW50LnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgbmV3X2J0bl9kZWxldGUudGV4dENvbnRlbnQgPSAnWCc7XHJcblxyXG4gICAgLy9hZGQgdG9kb3MgbGlzdGVuZXJcclxuICAgIG5ld19idG5fYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUb2Rvc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vYWRkIGNsYXNzXHJcbiAgICBuZXdfYnRuX2RlbGV0ZS5jbGFzc0xpc3QuYWRkKCdkZWxldGVfYnRuJyk7XHJcblxyXG4gICAgLy9kZWxldGUgY2FyZCB0b2dldGhlciB3aXRoIGxvY2FsIHN0b3JhZ2UgY29tcG9uZW50c1xyXG4gICAgbmV3X2J0bl9kZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbmV3X2NhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgLy9yZW1vdmUgdGhlIGl0ZW1zIGluIHRoZSBhcnJheVxyXG4gICAgICAgIHByb2pfbmFtZV9hcnJheS5zcGxpY2UoY291bnRlciwgMSk7XHJcbiAgICAgICAgcHJval9kZXNjcmlwdGlvbl9hcnJheS5zcGxpY2UoY291bnRlciwgMSk7XHJcbiAgICAgICAgLy91cGRhdGUgaXRlbXMgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX25hbWUnLCBKU09OLnN0cmluZ2lmeShwcm9qX25hbWVfYXJyYXkpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9kZXNjcmlwdGlvbicsIEpTT04uc3RyaW5naWZ5KHByb2pfZGVzY3JpcHRpb25fYXJyYXkpKTtcclxuICAgICAgICAvL2RlY3JlYXNlIHByb2plY3QgY291bnRlciBjb3VudCBhbmQgdXBkYXRlIGluIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgIGxldCBuZXdfY291bnRlciA9IHByb2pfY291bnRlcjtcclxuICAgICAgICAtLW5ld19jb3VudGVyO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX2NvdW50ZXInLCBKU09OLnN0cmluZ2lmeShuZXdfY291bnRlcikpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2FwcGVuZCB0byBwYXJlbnQgY29udGFpbmVyXHJcbiAgICBsb2NhdGVfY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19jYXJkKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld190aXRsZSk7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfZGVzY3JpcHRpb24pO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X2J0bl9jb250YWluZXIpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl9hZGQpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl92aWV3KTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fY291bnQpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl9kZWxldGUpO1xyXG59IiwiLy9cclxuY29uc3QgbmV3UHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3X3Byb2plY3QnKTtcclxuXHJcbm5ld1Byb2plY3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBZGQgbmV3IHByb2plY3QhXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufSlcclxuXHJcbmNvbnN0IGNsb3NlRm9ybV9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhjbG9zZUZvcm1fYnV0dG9uKTtcclxuXHJcbmNsb3NlRm9ybV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFkZCBuZXcgcHJvamVjdCFcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50TWUoKXtcclxuICAgIGNvbnNvbGUubG9nKCdJbSBmcm9tIG5ldyBwcm9qZWN0IScpO1xyXG59IiwiaW1wb3J0IHsgcHJpbnRNZSB9IGZyb20gXCIuL25ldy1wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9jcmVhdGUtY2FyZFwiO1xyXG5pbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGxldCBwcm9qX25hbWVfYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qX25hbWUgfHwgJ1tdJyk7XHJcbmV4cG9ydCBsZXQgcHJval9kZXNjcmlwdGlvbl9hcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2pfZGVzY3JpcHRpb24gfHwgJ1tdJyk7XHJcbmV4cG9ydCBsZXQgcHJval9jb3VudGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJval9jb3VudGVyIHx8ICcwJyk7XHJcblxyXG5mdW5jdGlvbiBzdG9yZVByb2plY3RJbnRvTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgLy9sb2NhdGUgRE9NIGVsZW1lbnRcclxuICAgIGNvbnN0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0X2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgLy9zdG9yZSBmb3JtIGlucHV0IHZhbHVlIGludG8gYW4gYXJyYXlcclxuICAgIHByb2pfbmFtZV9hcnJheS5wdXNoKHByb2plY3RfbmFtZS52YWx1ZSk7XHJcbiAgICBwcm9qX2Rlc2NyaXB0aW9uX2FycmF5LnB1c2gocHJvamVjdF9kZXNjcmlwdGlvbi52YWx1ZSk7XHJcblxyXG4gICAgLy90ZXN0XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qX25hbWVfYXJyYXkpO1xyXG5cclxuICAgIC8vc3RvcmUgYXJyYXkgaW50byBsb2NhbCBzdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9uYW1lJywgSlNPTi5zdHJpbmdpZnkocHJval9uYW1lX2FycmF5KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9kZXNjcmlwdGlvbicsIEpTT04uc3RyaW5naWZ5KHByb2pfZGVzY3JpcHRpb25fYXJyYXkpKTtcclxufVxyXG5cclxuLy9jbGVhciBmb3JtIGlucHV0IGNvbnRlbnRzXHJcbmZ1bmN0aW9uIGNsZWFySW5wdXRGaWVsZCgpIHtcclxuICAgIC8vbG9jYXRlIERPTSBlbGVtZW50XHJcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xyXG4gICAgY29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpOyBcclxuXHJcbiAgICAvL2NsZWFyIGZpZWxkc1xyXG4gICAgcHJvamVjdF9uYW1lLnZhbHVlID0gJyc7XHJcbiAgICBwcm9qZWN0X2Rlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbi8vd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZFxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLm9uc3VibWl0ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL3N0b3JlIHByb2plY3QgaW50byBsb2NhbCBzdG9yYWdlIFxyXG4gICAgc3RvcmVQcm9qZWN0SW50b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgLy9jcmVhdGUgcHJvamVjdCBjYXJkIFxyXG4gICAgY3JlYXRlQ2FyZChwcm9qX2NvdW50ZXIpO1xyXG4gICAgLy9hZGQgKzEgdG8gcHJvamVjdCBjb3VudGVyXHJcbiAgICBwcm9qX2NvdW50ZXIrKztcclxuICAgIC8vc3RvcmUgcHJvamVjdCBjb3VudGVyIGludG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfY291bnRlcicsIEpTT04uc3RyaW5naWZ5KHByb2pfY291bnRlcikpO1xyXG4gICAgLy9jbGVhciBpbnB1dHMgYmVmb3JlIGNsb3NpbmcgZm9ybVxyXG4gICAgY2xlYXJJbnB1dEZpZWxkKCk7XHJcbiAgICAvL2Nsb3NlIHRoZSBmb3JtIHBvcG91dFxyXG4gICAgY2xvc2VGb3JtKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY3JlYXRlLWNhcmQuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=