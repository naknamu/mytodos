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


let proj_card_array = [];

function createCard() {
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

    //call user input project name and details
    // const get_projectName =  localStorage.getItem('proj_name');
    // const get_projectDetails = localStorage.getItem('proj_details');

    //test using array
    const get_project_Name = JSON.parse(localStorage.getItem('proj_name'));
    // console.log(get_projectName);
    const get_project_Description = JSON.parse(localStorage.getItem('proj_description'));
    // console.log(get_project_Description);

    new_title.textContent = get_project_Name[_store_project__WEBPACK_IMPORTED_MODULE_0__.proj_counter];
    new_description.textContent = get_project_Description[_store_project__WEBPACK_IMPORTED_MODULE_0__.proj_counter];

    //add text content
    new_btn_add.textContent = '+';
    new_btn_view.textContent = '👁';
    new_btn_count.textContent = '0';
    new_btn_delete.textContent = 'X';

    //add todos listener
    new_btn_add.addEventListener('click', () => {
        // console.log('enable add todo form!');
        document.getElementById("myTodos").style.display = "block";
        document.getElementById("todo-overlay").style.display = "block";
    })

    //add class
    new_btn_delete.classList.add('delete_btn');

    //delete card
    new_btn_delete.addEventListener('click', () => {
        new_card.remove();
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

    //store DOM element to local storage
    // console.log(new_card);
    proj_card_array.push(new_card);
    console.log(proj_card_array);
    localStorage.setItem('proj_card', JSON.stringify(proj_card_array));

    let proj_new_card = JSON.parse(localStorage.getItem('proj_card'));
    console.log(proj_new_cards);
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
/* harmony export */   "proj_counter": () => (/* binding */ proj_counter)
/* harmony export */ });
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project */ "./src/new-project.js");
/* harmony import */ var _create_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-card */ "./src/create-card.js");




let proj_name_array = [];
let proj_description_array = [];
let proj_counter = 0;

function storeProjectIntoLocalStorage() {
    //locate DOM element
    const project_name = document.querySelector('#name');
    const project_description = document.querySelector('#description');

    //store in local storage
    // localStorage.setItem('proj_name', project_name.value);
    // localStorage.setItem('proj_details', project_details.value);

    //test using array
    proj_name_array.push(project_name.value);
    proj_description_array.push(project_description.value)

    //store array into local storage
    localStorage.setItem('proj_name', JSON.stringify(proj_name_array));
    localStorage.setItem('proj_description', JSON.stringify(proj_description_array))


    //create card 
    ;(0,_create_card__WEBPACK_IMPORTED_MODULE_1__.createCard)();

    //add +1 to project counter
    proj_counter++;
}

//when form is submitted, store project into local storage and close the form popout
const form = document.getElementById('myForm').onsubmit = function(){
    storeProjectIntoLocalStorage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVQcm9qZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx3REFBWTtBQUN6RCwwREFBMEQsd0RBQVk7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ3QztBQUNHO0FBQ0Q7QUFDMUM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7O1VDdkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl0b2Rvcy8uL3NyYy9jcmVhdGUtY2FyZC5qcyIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL25ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL215dG9kb3MvLi9zcmMvc3RvcmUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2pfY291bnRlciB9IGZyb20gXCIuL3N0b3JlLXByb2plY3RcIjtcclxuXHJcbmxldCBwcm9qX2NhcmRfYXJyYXkgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkKCkge1xyXG4gICAgY29uc3QgbG9jYXRlX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbmNvbnRlbnQgLmNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBuZXcgY2FyZCBkaXZcclxuICAgIGNvbnN0IG5ld19jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19idG5fYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX3ZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgIGNvbnN0IG5ld19idG5fY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgIGNvbnN0IG5ld19idG5fZGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcblxyXG4gICAgLy9hZGQgY2xhc3MgbmFtZVxyXG4gICAgbmV3X2NhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgbmV3X3RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICBuZXdfZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcclxuXHJcbiAgICAvL2NhbGwgdXNlciBpbnB1dCBwcm9qZWN0IG5hbWUgYW5kIGRldGFpbHNcclxuICAgIC8vIGNvbnN0IGdldF9wcm9qZWN0TmFtZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9uYW1lJyk7XHJcbiAgICAvLyBjb25zdCBnZXRfcHJvamVjdERldGFpbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9kZXRhaWxzJyk7XHJcblxyXG4gICAgLy90ZXN0IHVzaW5nIGFycmF5XHJcbiAgICBjb25zdCBnZXRfcHJvamVjdF9OYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9uYW1lJykpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZ2V0X3Byb2plY3ROYW1lKTtcclxuICAgIGNvbnN0IGdldF9wcm9qZWN0X0Rlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9kZXNjcmlwdGlvbicpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldF9wcm9qZWN0X0Rlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBuZXdfdGl0bGUudGV4dENvbnRlbnQgPSBnZXRfcHJvamVjdF9OYW1lW3Byb2pfY291bnRlcl07XHJcbiAgICBuZXdfZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBnZXRfcHJvamVjdF9EZXNjcmlwdGlvbltwcm9qX2NvdW50ZXJdO1xyXG5cclxuICAgIC8vYWRkIHRleHQgY29udGVudFxyXG4gICAgbmV3X2J0bl9hZGQudGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgICBuZXdfYnRuX3ZpZXcudGV4dENvbnRlbnQgPSAn8J+RgSc7XHJcbiAgICBuZXdfYnRuX2NvdW50LnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgbmV3X2J0bl9kZWxldGUudGV4dENvbnRlbnQgPSAnWCc7XHJcblxyXG4gICAgLy9hZGQgdG9kb3MgbGlzdGVuZXJcclxuICAgIG5ld19idG5fYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbmFibGUgYWRkIHRvZG8gZm9ybSEnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VG9kb3NcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2FkZCBjbGFzc1xyXG4gICAgbmV3X2J0bl9kZWxldGUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlX2J0bicpO1xyXG5cclxuICAgIC8vZGVsZXRlIGNhcmRcclxuICAgIG5ld19idG5fZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG5ld19jYXJkLnJlbW92ZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2FwcGVuZCB0byBwYXJlbnQgY29udGFpbmVyXHJcbiAgICBsb2NhdGVfY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19jYXJkKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld190aXRsZSk7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfZGVzY3JpcHRpb24pO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X2J0bl9jb250YWluZXIpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl9hZGQpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl92aWV3KTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fY291bnQpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl9kZWxldGUpO1xyXG5cclxuICAgIC8vc3RvcmUgRE9NIGVsZW1lbnQgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgLy8gY29uc29sZS5sb2cobmV3X2NhcmQpO1xyXG4gICAgcHJval9jYXJkX2FycmF5LnB1c2gobmV3X2NhcmQpO1xyXG4gICAgY29uc29sZS5sb2cocHJval9jYXJkX2FycmF5KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX2NhcmQnLCBKU09OLnN0cmluZ2lmeShwcm9qX2NhcmRfYXJyYXkpKTtcclxuXHJcbiAgICBsZXQgcHJval9uZXdfY2FyZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfY2FyZCcpKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2pfbmV3X2NhcmRzKTtcclxufSIsIi8vXHJcbmNvbnN0IG5ld1Byb2plY3RfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld19wcm9qZWN0Jyk7XHJcblxyXG5uZXdQcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQWRkIG5ldyBwcm9qZWN0IVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn0pXHJcblxyXG5jb25zdCBjbG9zZUZvcm1fYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xyXG5cclxuLy8gY29uc29sZS5sb2coY2xvc2VGb3JtX2J1dHRvbik7XHJcblxyXG5jbG9zZUZvcm1fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBZGQgbmV3IHByb2plY3QhXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludE1lKCl7XHJcbiAgICBjb25zb2xlLmxvZygnSW0gZnJvbSBuZXcgcHJvamVjdCEnKTtcclxufSIsImltcG9ydCB7IHByaW50TWUgfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY3JlYXRlLWNhcmRcIjtcclxuaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcclxuXHJcbmxldCBwcm9qX25hbWVfYXJyYXkgPSBbXTtcclxubGV0IHByb2pfZGVzY3JpcHRpb25fYXJyYXkgPSBbXTtcclxuZXhwb3J0IGxldCBwcm9qX2NvdW50ZXIgPSAwO1xyXG5cclxuZnVuY3Rpb24gc3RvcmVQcm9qZWN0SW50b0xvY2FsU3RvcmFnZSgpIHtcclxuICAgIC8vbG9jYXRlIERPTSBlbGVtZW50XHJcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xyXG4gICAgY29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cclxuICAgIC8vc3RvcmUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfbmFtZScsIHByb2plY3RfbmFtZS52YWx1ZSk7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9kZXRhaWxzJywgcHJvamVjdF9kZXRhaWxzLnZhbHVlKTtcclxuXHJcbiAgICAvL3Rlc3QgdXNpbmcgYXJyYXlcclxuICAgIHByb2pfbmFtZV9hcnJheS5wdXNoKHByb2plY3RfbmFtZS52YWx1ZSk7XHJcbiAgICBwcm9qX2Rlc2NyaXB0aW9uX2FycmF5LnB1c2gocHJvamVjdF9kZXNjcmlwdGlvbi52YWx1ZSlcclxuXHJcbiAgICAvL3N0b3JlIGFycmF5IGludG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfbmFtZScsIEpTT04uc3RyaW5naWZ5KHByb2pfbmFtZV9hcnJheSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfZGVzY3JpcHRpb24nLCBKU09OLnN0cmluZ2lmeShwcm9qX2Rlc2NyaXB0aW9uX2FycmF5KSlcclxuXHJcblxyXG4gICAgLy9jcmVhdGUgY2FyZCBcclxuICAgIGNyZWF0ZUNhcmQoKTtcclxuXHJcbiAgICAvL2FkZCArMSB0byBwcm9qZWN0IGNvdW50ZXJcclxuICAgIHByb2pfY291bnRlcisrO1xyXG59XHJcblxyXG4vL3doZW4gZm9ybSBpcyBzdWJtaXR0ZWQsIHN0b3JlIHByb2plY3QgaW50byBsb2NhbCBzdG9yYWdlIGFuZCBjbG9zZSB0aGUgZm9ybSBwb3BvdXRcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBzdG9yZVByb2plY3RJbnRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBjbG9zZUZvcm0oKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zdG9yZS1wcm9qZWN0LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9