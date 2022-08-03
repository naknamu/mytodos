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
  !*** ./src/create-card.js ***!
  \****************************/
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

    //
    return {get_projectDetails};
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQ2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teXRvZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy8uL3NyYy9jcmVhdGUtY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGxldCBpZF9jb3VudCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZCgpIHtcclxuICAgIGNvbnN0IGxvY2F0ZV9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5jb250ZW50IC5jb250YWluZXJcIik7XHJcblxyXG4gICAgLy9jcmVhdGUgbmV3IGNhcmQgZGl2XHJcbiAgICBjb25zdCBuZXdfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmV3X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5ld19idG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgY29uc3QgbmV3X2J0bl92aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcbiAgICBjb25zdCBuZXdfYnRuX2RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG5cclxuICAgIC8vYWRkIGNsYXNzIG5hbWVcclxuICAgIG5ld19jYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgIG5ld190aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgbmV3X2Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XHJcblxyXG4gICAgLy9jYWxsIHVzZXIgaW5wdXQgcHJvamVjdCBuYW1lIGFuZCBkZXRhaWxzXHJcbiAgICBjb25zdCBnZXRfcHJvamVjdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfbmFtZScpO1xyXG4gICAgY29uc3QgZ2V0X3Byb2plY3REZXRhaWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pfZGV0YWlscycpO1xyXG5cclxuICAgIG5ld190aXRsZS50ZXh0Q29udGVudCA9IGdldF9wcm9qZWN0TmFtZTtcclxuICAgIG5ld19kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGdldF9wcm9qZWN0RGV0YWlscztcclxuXHJcbiAgICAvL2FkZCB0ZXh0IGNvbnRlbnRcclxuICAgIG5ld19idG5fYWRkLnRleHRDb250ZW50ID0gJysnO1xyXG4gICAgbmV3X2J0bl92aWV3LnRleHRDb250ZW50ID0gJ/CfkYEnO1xyXG4gICAgbmV3X2J0bl9jb3VudC50ZXh0Q29udGVudCA9ICcwJztcclxuICAgIG5ld19idG5fZGVsZXRlLnRleHRDb250ZW50ID0gJ1gnO1xyXG5cclxuICAgIC8vYWRkIHRvZG9zIGxpc3RlbmVyXHJcbiAgICBuZXdfYnRuX2FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5hYmxlIGFkZCB0b2RvIGZvcm0hJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRvZG9zXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH0pXHJcblxyXG4gICAgLy9hZGQgY2xhc3NcclxuICAgIG5ld19idG5fZGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZV9idG4nKTtcclxuXHJcbiAgICAvL2RlbGV0ZSBjYXJkXHJcbiAgICBuZXdfYnRuX2RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBuZXdfY2FyZC5yZW1vdmUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9hcHBlbmQgdG8gcGFyZW50IGNvbnRhaW5lclxyXG4gICAgbG9jYXRlX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfY2FyZCk7XHJcbiAgICBuZXdfY2FyZC5hcHBlbmRDaGlsZChuZXdfdGl0bGUpO1xyXG4gICAgbmV3X2NhcmQuYXBwZW5kQ2hpbGQobmV3X2Rlc2NyaXB0aW9uKTtcclxuICAgIG5ld19jYXJkLmFwcGVuZENoaWxkKG5ld19idG5fY29udGFpbmVyKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fYWRkKTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fdmlldyk7XHJcbiAgICBuZXdfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdfYnRuX2NvdW50KTtcclxuICAgIG5ld19idG5fY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld19idG5fZGVsZXRlKTtcclxuXHJcbiAgICAvL1xyXG4gICAgcmV0dXJuIHtnZXRfcHJvamVjdERldGFpbHN9O1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9