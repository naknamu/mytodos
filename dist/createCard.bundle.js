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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQ2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVGO0FBQ3ZGO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFzQjtBQUM5QixRQUFRLHlFQUE2QjtBQUNyQztBQUNBLHlEQUF5RCwyREFBZTtBQUN4RSxnRUFBZ0Usa0VBQXNCO0FBQ3RGO0FBQ0EsMEJBQTBCLHdEQUFZO0FBQ3RDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCd0M7QUFDRztBQUNEO0FBQzFDO0FBQ087QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7O1VDeENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl0b2Rvcy8uL3NyYy9jcmVhdGUtY2FyZC5qcyIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL25ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL215dG9kb3MvLi9zcmMvc3RvcmUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2pfbmFtZV9hcnJheSwgcHJval9kZXNjcmlwdGlvbl9hcnJheSwgcHJval9jb3VudGVyfSBmcm9tIFwiLi9zdG9yZS1wcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChjb3VudGVyKSB7XHJcbiAgICBjb25zdCBsb2NhdGVfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluY29udGVudCAuY29udGFpbmVyXCIpO1xyXG5cclxuICAgIC8vY3JlYXRlIG5ldyBjYXJkIGRpdlxyXG4gICAgY29uc3QgbmV3X2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9hZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgIGNvbnN0IG5ld19idG5fdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9jb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9kZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuXHJcbiAgICAvL2FkZCBjbGFzcyBuYW1lXHJcbiAgICBuZXdfY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICBuZXdfdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgIG5ld19kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG5cclxuICAgIC8vcmV0cmlldmUgcHJvamVjdCBuYW1lIGFuZCBkZXNjcmlwdGlvbiBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICBjb25zdCBnZXRfcHJvamVjdF9OYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9uYW1lJykpO1xyXG4gICAgY29uc3QgZ2V0X3Byb2plY3RfRGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX2Rlc2NyaXB0aW9uJykpO1xyXG5cclxuICAgIG5ld190aXRsZS50ZXh0Q29udGVudCA9IGdldF9wcm9qZWN0X05hbWVbY291bnRlcl07XHJcbiAgICBuZXdfZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBnZXRfcHJvamVjdF9EZXNjcmlwdGlvbltjb3VudGVyXTtcclxuXHJcbiAgICAvL2FkZCB0ZXh0IGNvbnRlbnRcclxuICAgIG5ld19idG5fYWRkLnRleHRDb250ZW50ID0gJysnO1xyXG4gICAgbmV3X2J0bl92aWV3LnRleHRDb250ZW50ID0gJ/CfkYEnO1xyXG4gICAgbmV3X2J0bl9jb3VudC50ZXh0Q29udGVudCA9ICcwJztcclxuICAgIG5ld19idG5fZGVsZXRlLnRleHRDb250ZW50ID0gJ1gnO1xyXG5cclxuICAgIC8vYWRkIHRvZG9zIGxpc3RlbmVyXHJcbiAgICBuZXdfYnRuX2FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VG9kb3NcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2FkZCBjbGFzc1xyXG4gICAgbmV3X2J0bl9kZWxldGUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlX2J0bicpO1xyXG5cclxuICAgIC8vZGVsZXRlIGNhcmQgdG9nZXRoZXIgd2l0aCBsb2NhbCBzdG9yYWdlIGNvbXBvbmVudHNcclxuICAgIG5ld19idG5fZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG5ld19jYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vcmVtb3ZlIHRoZSBpdGVtcyBpbiB0aGUgYXJyYXlcclxuICAgICAgICBwcm9qX25hbWVfYXJyYXkuc3BsaWNlKGNvdW50ZXIsIDEpO1xyXG4gICAgICAgIHByb2pfZGVzY3JpcHRpb25fYXJyYXkuc3BsaWNlKGNvdW50ZXIsIDEpO1xyXG4gICAgICAgIC8vdXBkYXRlIGl0ZW1zIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9uYW1lJywgSlNPTi5zdHJpbmdpZnkocHJval9uYW1lX2FycmF5KSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfZGVzY3JpcHRpb24nLCBKU09OLnN0cmluZ2lmeShwcm9qX2Rlc2NyaXB0aW9uX2FycmF5KSk7XHJcbiAgICAgICAgLy9kZWNyZWFzZSBwcm9qZWN0IGNvdW50ZXIgY291bnQgYW5kIHVwZGF0ZSBpbiBsb2NhbHN0b3JhZ2VcclxuICAgICAgICBsZXQgbmV3X2NvdW50ZXIgPSBwcm9qX2NvdW50ZXI7XHJcbiAgICAgICAgLS1uZXdfY291bnRlcjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9jb3VudGVyJywgSlNPTi5zdHJpbmdpZnkobmV3X2NvdW50ZXIpKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9hcHBlbmQgdG8gcGFyZW50IGNvbnRhaW5lclxyXG4gICAgbG9jYXRlX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfY2FyZCk7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfdGl0bGUpO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X2Rlc2NyaXB0aW9uKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld19idG5fY29udGFpbmVyKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fYWRkKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fdmlldyk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX2NvdW50KTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fZGVsZXRlKTtcclxufSIsIi8vXHJcbmNvbnN0IG5ld1Byb2plY3RfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld19wcm9qZWN0Jyk7XHJcblxyXG5uZXdQcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQWRkIG5ldyBwcm9qZWN0IVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn0pXHJcblxyXG5jb25zdCBjbG9zZUZvcm1fYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xyXG5cclxuLy8gY29uc29sZS5sb2coY2xvc2VGb3JtX2J1dHRvbik7XHJcblxyXG5jbG9zZUZvcm1fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBZGQgbmV3IHByb2plY3QhXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludE1lKCl7XHJcbiAgICBjb25zb2xlLmxvZygnSW0gZnJvbSBuZXcgcHJvamVjdCEnKTtcclxufSIsImltcG9ydCB7IHByaW50TWUgfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY3JlYXRlLWNhcmRcIjtcclxuaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBsZXQgcHJval9uYW1lX2FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJval9uYW1lIHx8ICdbXScpO1xyXG5leHBvcnQgbGV0IHByb2pfZGVzY3JpcHRpb25fYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qX2Rlc2NyaXB0aW9uIHx8ICdbXScpO1xyXG5leHBvcnQgbGV0IHByb2pfY291bnRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2pfY291bnRlciB8fCAnMCcpO1xyXG5cclxuZnVuY3Rpb24gc3RvcmVQcm9qZWN0SW50b0xvY2FsU3RvcmFnZSgpIHtcclxuICAgIC8vbG9jYXRlIERPTSBlbGVtZW50XHJcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xyXG4gICAgY29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cclxuICAgIC8vc3RvcmUgZm9ybSBpbnB1dCB2YWx1ZSBpbnRvIGFuIGFycmF5XHJcbiAgICBwcm9qX25hbWVfYXJyYXkucHVzaChwcm9qZWN0X25hbWUudmFsdWUpO1xyXG4gICAgcHJval9kZXNjcmlwdGlvbl9hcnJheS5wdXNoKHByb2plY3RfZGVzY3JpcHRpb24udmFsdWUpO1xyXG5cclxuICAgIC8vdGVzdFxyXG4gICAgY29uc29sZS5sb2cocHJval9uYW1lX2FycmF5KTtcclxuXHJcbiAgICAvL3N0b3JlIGFycmF5IGludG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfbmFtZScsIEpTT04uc3RyaW5naWZ5KHByb2pfbmFtZV9hcnJheSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfZGVzY3JpcHRpb24nLCBKU09OLnN0cmluZ2lmeShwcm9qX2Rlc2NyaXB0aW9uX2FycmF5KSk7XHJcbn1cclxuXHJcbi8vd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZFxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLm9uc3VibWl0ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL3N0b3JlIHByb2plY3QgaW50byBsb2NhbCBzdG9yYWdlIFxyXG4gICAgc3RvcmVQcm9qZWN0SW50b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgLy9jcmVhdGUgcHJvamVjdCBjYXJkIFxyXG4gICAgY3JlYXRlQ2FyZChwcm9qX2NvdW50ZXIpO1xyXG4gICAgLy9hZGQgKzEgdG8gcHJvamVjdCBjb3VudGVyXHJcbiAgICBwcm9qX2NvdW50ZXIrKztcclxuICAgIC8vc3RvcmUgcHJvamVjdCBjb3VudGVyIGludG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfY291bnRlcicsIEpTT04uc3RyaW5naWZ5KHByb2pfY291bnRlcikpO1xyXG4gICAgLy9jbG9zZSB0aGUgZm9ybSBwb3BvdXRcclxuICAgIGNsb3NlRm9ybSgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NyZWF0ZS1jYXJkLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9