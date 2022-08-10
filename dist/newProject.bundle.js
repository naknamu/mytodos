/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!****************************!*\
  !*** ./src/new-project.js ***!
  \****************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3UHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215dG9kb3MvLi9zcmMvbmV3LXByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL1xyXG5jb25zdCBuZXdQcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfcHJvamVjdCcpO1xyXG5cclxubmV3UHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFkZCBuZXcgcHJvamVjdCFcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59KVxyXG5cclxuLy9hbGwgY2FuY2VsIGJ1dHRvbiBsb2dpY1xyXG5jb25zdCBjbG9zZV9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbmNlbCcpO1xyXG5cclxuY2xvc2VfZm9ybS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvL2FkZCBwcm9qZWN0IGZvcm1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIC8vYWRkIHRvZG8gZm9ybVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUb2Rvc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pXHJcbn0pXHJcblxyXG4vL2Nsb3NlIGZvcm0gd2hlbiB1c2VyIHN1Ym1pdHRlZCBmb3JtXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm0oZm9ybVR5cGUpIHtcclxuICAgIHN3aXRjaChmb3JtVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3Byb2plY3QnOlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd0b2Rvcyc6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUb2Rvc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRNZSgpe1xyXG4gICAgY29uc29sZS5sb2coJ0ltIGZyb20gbmV3IHByb2plY3QhJyk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=