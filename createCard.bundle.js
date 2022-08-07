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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/create-card.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQ2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsd0RBQVk7QUFDekQsMERBQTBELHdEQUFZO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCd0M7QUFDRztBQUNEO0FBQzFDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215dG9kb3MvLi9zcmMvY3JlYXRlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy8uL3NyYy9uZXctcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL3N0b3JlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qX2NvdW50ZXIgfSBmcm9tIFwiLi9zdG9yZS1wcm9qZWN0XCI7XHJcblxyXG5sZXQgcHJval9jYXJkX2FycmF5ID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZCgpIHtcclxuICAgIGNvbnN0IGxvY2F0ZV9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5jb250ZW50IC5jb250YWluZXJcIik7XHJcblxyXG4gICAgLy9jcmVhdGUgbmV3IGNhcmQgZGl2XHJcbiAgICBjb25zdCBuZXdfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19idG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl92aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG5cclxuICAgIC8vYWRkIGNsYXNzIG5hbWVcclxuICAgIG5ld19jYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgIG5ld190aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgbmV3X2Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XHJcblxyXG4gICAgLy9jYWxsIHVzZXIgaW5wdXQgcHJvamVjdCBuYW1lIGFuZCBkZXRhaWxzXHJcbiAgICAvLyBjb25zdCBnZXRfcHJvamVjdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfbmFtZScpO1xyXG4gICAgLy8gY29uc3QgZ2V0X3Byb2plY3REZXRhaWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfZGV0YWlscycpO1xyXG5cclxuICAgIC8vdGVzdCB1c2luZyBhcnJheVxyXG4gICAgY29uc3QgZ2V0X3Byb2plY3RfTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfbmFtZScpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldF9wcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zdCBnZXRfcHJvamVjdF9EZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfZGVzY3JpcHRpb24nKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRfcHJvamVjdF9EZXNjcmlwdGlvbik7XHJcblxyXG4gICAgbmV3X3RpdGxlLnRleHRDb250ZW50ID0gZ2V0X3Byb2plY3RfTmFtZVtwcm9qX2NvdW50ZXJdO1xyXG4gICAgbmV3X2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZ2V0X3Byb2plY3RfRGVzY3JpcHRpb25bcHJval9jb3VudGVyXTtcclxuXHJcbiAgICAvL2FkZCB0ZXh0IGNvbnRlbnRcclxuICAgIG5ld19idG5fYWRkLnRleHRDb250ZW50ID0gJysnO1xyXG4gICAgbmV3X2J0bl92aWV3LnRleHRDb250ZW50ID0gJ/CfkYEnO1xyXG4gICAgbmV3X2J0bl9jb3VudC50ZXh0Q29udGVudCA9ICcwJztcclxuICAgIG5ld19idG5fZGVsZXRlLnRleHRDb250ZW50ID0gJ1gnO1xyXG5cclxuICAgIC8vYWRkIHRvZG9zIGxpc3RlbmVyXHJcbiAgICBuZXdfYnRuX2FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5hYmxlIGFkZCB0b2RvIGZvcm0hJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRvZG9zXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH0pXHJcblxyXG4gICAgLy9hZGQgY2xhc3NcclxuICAgIG5ld19idG5fZGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZV9idG4nKTtcclxuXHJcbiAgICAvL2RlbGV0ZSBjYXJkXHJcbiAgICBuZXdfYnRuX2RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBuZXdfY2FyZC5yZW1vdmUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9hcHBlbmQgdG8gcGFyZW50IGNvbnRhaW5lclxyXG4gICAgbG9jYXRlX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfY2FyZCk7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfdGl0bGUpO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X2Rlc2NyaXB0aW9uKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld19idG5fY29udGFpbmVyKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fYWRkKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fdmlldyk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX2NvdW50KTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fZGVsZXRlKTtcclxuXHJcbiAgICAvL3N0b3JlIERPTSBlbGVtZW50IHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgIC8vIGNvbnNvbGUubG9nKG5ld19jYXJkKTtcclxuICAgIHByb2pfY2FyZF9hcnJheS5wdXNoKG5ld19jYXJkKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2pfY2FyZF9hcnJheSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJval9jYXJkJywgSlNPTi5zdHJpbmdpZnkocHJval9jYXJkX2FycmF5KSk7XHJcblxyXG4gICAgbGV0IHByb2pfbmV3X2NhcmQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX2NhcmQnKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qX25ld19jYXJkcyk7XHJcbn0iLCIvL1xyXG5jb25zdCBuZXdQcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfcHJvamVjdCcpO1xyXG5cclxubmV3UHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFkZCBuZXcgcHJvamVjdCFcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59KVxyXG5cclxuY29uc3QgY2xvc2VGb3JtX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGNsb3NlRm9ybV9idXR0b24pO1xyXG5cclxuY2xvc2VGb3JtX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQWRkIG5ldyBwcm9qZWN0IVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRNZSgpe1xyXG4gICAgY29uc29sZS5sb2coJ0ltIGZyb20gbmV3IHByb2plY3QhJyk7XHJcbn0iLCJpbXBvcnQgeyBwcmludE1lIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gXCIuL2NyZWF0ZS1jYXJkXCI7XHJcbmltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gXCIuL25ldy1wcm9qZWN0XCI7XHJcblxyXG5sZXQgcHJval9uYW1lX2FycmF5ID0gW107XHJcbmxldCBwcm9qX2Rlc2NyaXB0aW9uX2FycmF5ID0gW107XHJcbmV4cG9ydCBsZXQgcHJval9jb3VudGVyID0gMDtcclxuXHJcbmZ1bmN0aW9uIHN0b3JlUHJvamVjdEludG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAvL2xvY2F0ZSBET00gZWxlbWVudFxyXG4gICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxuICAgIGNvbnN0IHByb2plY3RfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICAvL3N0b3JlIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX25hbWUnLCBwcm9qZWN0X25hbWUudmFsdWUpO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfZGV0YWlscycsIHByb2plY3RfZGV0YWlscy52YWx1ZSk7XHJcblxyXG4gICAgLy90ZXN0IHVzaW5nIGFycmF5XHJcbiAgICBwcm9qX25hbWVfYXJyYXkucHVzaChwcm9qZWN0X25hbWUudmFsdWUpO1xyXG4gICAgcHJval9kZXNjcmlwdGlvbl9hcnJheS5wdXNoKHByb2plY3RfZGVzY3JpcHRpb24udmFsdWUpXHJcblxyXG4gICAgLy9zdG9yZSBhcnJheSBpbnRvIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX25hbWUnLCBKU09OLnN0cmluZ2lmeShwcm9qX25hbWVfYXJyYXkpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX2Rlc2NyaXB0aW9uJywgSlNPTi5zdHJpbmdpZnkocHJval9kZXNjcmlwdGlvbl9hcnJheSkpXHJcblxyXG5cclxuICAgIC8vY3JlYXRlIGNhcmQgXHJcbiAgICBjcmVhdGVDYXJkKCk7XHJcblxyXG4gICAgLy9hZGQgKzEgdG8gcHJvamVjdCBjb3VudGVyXHJcbiAgICBwcm9qX2NvdW50ZXIrKztcclxufVxyXG5cclxuLy93aGVuIGZvcm0gaXMgc3VibWl0dGVkLCBzdG9yZSBwcm9qZWN0IGludG8gbG9jYWwgc3RvcmFnZSBhbmQgY2xvc2UgdGhlIGZvcm0gcG9wb3V0XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJykub25zdWJtaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgc3RvcmVQcm9qZWN0SW50b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgY2xvc2VGb3JtKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY3JlYXRlLWNhcmQuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=