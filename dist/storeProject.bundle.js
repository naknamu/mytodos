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
// let id_count = 0;

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
    const get_projectName =  localStorage.getItem('proj_name');
    const get_projectDetails = localStorage.getItem('proj_details');

    new_title.textContent = get_projectName;
    new_description.textContent = get_projectDetails;

    //add text content
    new_btn_add.textContent = '+';
    new_btn_view.textContent = '👁';
    new_btn_count.textContent = '0';
    new_btn_delete.textContent = 'X';

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

    //
    return {get_projectDetails};
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
/*!******************************!*\
  !*** ./src/store-project.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project */ "./src/new-project.js");
/* harmony import */ var _create_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-card */ "./src/create-card.js");




function storeProjectIntoLocalStorage() {
    const project_name = document.querySelector('#name');
    const project_details = document.querySelector('#details');

    //store in local storage
    localStorage.setItem('proj_name', project_name.value);
    localStorage.setItem('proj_details', project_details.value);

    //create card 
    (0,_create_card__WEBPACK_IMPORTED_MODULE_1__.createCard)();
}

//when form is submitted, store project into local storage in close the form popout
const form = document.getElementById('myForm').onsubmit = function(){
    storeProjectIntoLocalStorage();
    (0,_new_project__WEBPACK_IMPORTED_MODULE_0__.closeForm)();

    return false;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVQcm9qZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNHO0FBQ0Q7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL2NyZWF0ZS1jYXJkLmpzIiwid2VicGFjazovL215dG9kb3MvLi9zcmMvbmV3LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215dG9kb3MvLi9zcmMvc3RvcmUtcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgaWRfY291bnQgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmQoKSB7XHJcbiAgICBjb25zdCBsb2NhdGVfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluY29udGVudCAuY29udGFpbmVyXCIpO1xyXG5cclxuICAgIC8vY3JlYXRlIG5ldyBjYXJkIGRpdlxyXG4gICAgY29uc3QgbmV3X2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9hZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgIGNvbnN0IG5ld19idG5fdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9jb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl9kZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuXHJcbiAgICAvL2FkZCBjbGFzcyBuYW1lXHJcbiAgICBuZXdfY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICBuZXdfdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgIG5ld19kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG5cclxuICAgIC8vY2FsbCB1c2VyIGlucHV0IHByb2plY3QgbmFtZSBhbmQgZGV0YWlsc1xyXG4gICAgY29uc3QgZ2V0X3Byb2plY3ROYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX25hbWUnKTtcclxuICAgIGNvbnN0IGdldF9wcm9qZWN0RGV0YWlscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qX2RldGFpbHMnKTtcclxuXHJcbiAgICBuZXdfdGl0bGUudGV4dENvbnRlbnQgPSBnZXRfcHJvamVjdE5hbWU7XHJcbiAgICBuZXdfZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBnZXRfcHJvamVjdERldGFpbHM7XHJcblxyXG4gICAgLy9hZGQgdGV4dCBjb250ZW50XHJcbiAgICBuZXdfYnRuX2FkZC50ZXh0Q29udGVudCA9ICcrJztcclxuICAgIG5ld19idG5fdmlldy50ZXh0Q29udGVudCA9ICfwn5GBJztcclxuICAgIG5ld19idG5fY291bnQudGV4dENvbnRlbnQgPSAnMCc7XHJcbiAgICBuZXdfYnRuX2RlbGV0ZS50ZXh0Q29udGVudCA9ICdYJztcclxuXHJcbiAgICAvL2FkZCBjbGFzc1xyXG4gICAgbmV3X2J0bl9kZWxldGUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlX2J0bicpO1xyXG5cclxuICAgIC8vZGVsZXRlIGNhcmRcclxuICAgIG5ld19idG5fZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG5ld19jYXJkLnJlbW92ZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2FwcGVuZCB0byBwYXJlbnQgY29udGFpbmVyXHJcbiAgICBsb2NhdGVfY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19jYXJkKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld190aXRsZSk7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfZGVzY3JpcHRpb24pO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X2J0bl9jb250YWluZXIpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl9hZGQpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl92aWV3KTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fY291bnQpO1xyXG4gICAgbmV3X2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3X2J0bl9kZWxldGUpO1xyXG5cclxuICAgIC8vXHJcbiAgICByZXR1cm4ge2dldF9wcm9qZWN0RGV0YWlsc307XHJcbn0iLCIvL1xyXG5jb25zdCBuZXdQcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfcHJvamVjdCcpO1xyXG5cclxubmV3UHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFkZCBuZXcgcHJvamVjdCFcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59KVxyXG5cclxuY29uc3QgY2xvc2VGb3JtX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGNsb3NlRm9ybV9idXR0b24pO1xyXG5cclxuY2xvc2VGb3JtX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQWRkIG5ldyBwcm9qZWN0IVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRNZSgpe1xyXG4gICAgY29uc29sZS5sb2coJ0ltIGZyb20gbmV3IHByb2plY3QhJyk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHByaW50TWUgfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY3JlYXRlLWNhcmRcIjtcclxuaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHN0b3JlUHJvamVjdEludG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xyXG4gICAgY29uc3QgcHJvamVjdF9kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKTtcclxuXHJcbiAgICAvL3N0b3JlIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qX25hbWUnLCBwcm9qZWN0X25hbWUudmFsdWUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pfZGV0YWlscycsIHByb2plY3RfZGV0YWlscy52YWx1ZSk7XHJcblxyXG4gICAgLy9jcmVhdGUgY2FyZCBcclxuICAgIGNyZWF0ZUNhcmQoKTtcclxufVxyXG5cclxuLy93aGVuIGZvcm0gaXMgc3VibWl0dGVkLCBzdG9yZSBwcm9qZWN0IGludG8gbG9jYWwgc3RvcmFnZSBpbiBjbG9zZSB0aGUgZm9ybSBwb3BvdXRcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBzdG9yZVByb2plY3RJbnRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBjbG9zZUZvcm0oKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9