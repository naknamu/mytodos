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
/*!*****************************!*\
  !*** ./src/create-todos.js ***!
  \*****************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVG9kb3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXl0b2Rvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215dG9kb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL2NyZWF0ZS10b2Rvcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vZHluYW1pY2FsbHkgY3JlYXRlIHRvZG8gbGlzdCB1c2luZyBqc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9zKGluZGV4LCBjb3VudCkge1xyXG5cclxuICAgIC8vbG9jYXRlIGxpc3QgaWRcclxuICAgIGNvbnN0IG15TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlMaXN0cycpO1xyXG4gICAgLy9jcmVhdGUgbGlzdCBjb250YWluZXJcclxuICAgIGNvbnN0IGxpc3RfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9jcmVhdGUgY2hlY2tib3ggY29udGFpbmVyXHJcbiAgICBjb25zdCBjaGVja2JveF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vY3JlYXRlIGxpc3QgZGV0YWlscyBlbGVtZW50XHJcbiAgICBjb25zdCBsaXN0X2RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vY3JlYXRlIGJ1dHRvbiBjb250YWluZXJcclxuICAgIGNvbnN0IGJ0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvL2NyZWF0ZSB2aWV3IGxpc3Qgc3ZnIGFuZCBwYXRoXHJcbiAgICBsZXQgdmlld19zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAnc3ZnJyk7XHJcbiAgICBsZXQgdmlld19wYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcclxuICAgIC8vY3JlYXRlIGRlbGV0ZSBsaXN0IHN2ZyBhbmQgcGF0aFxyXG4gICAgbGV0IGRlbGV0ZV9zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAnc3ZnJyk7XHJcbiAgICBsZXQgZGVsZXRlX3BhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xyXG5cclxuICAgIC8vY3JlYXRlIHByaW9yaXR5IGluZGljYXRvclxyXG4gICAgY29uc3QgcHJpb3JpdHlfaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9hZGQgYXR0cmlidXRlcyB0byB2aWV3IHN2Z1xyXG4gICAgdmlld19wYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMTIgNC41QzcgNC41IDIuNyA3LjYgMSAxMkMyLjcgMTYuNCA3IDE5LjUgMTIgMTkuNUgxMy4xQzEzIDE5LjIgMTMgMTguOSAxMyAxOC41QzEzIDE4LjEgMTMgMTcuOCAxMy4xIDE3LjRDMTIuNyAxNy40IDEyLjQgMTcuNSAxMiAxNy41QzguMiAxNy41IDQuOCAxNS40IDMuMiAxMkM0LjggOC42IDguMiA2LjUgMTIgNi41UzE5LjIgOC42IDIwLjggMTJDMjAuNyAxMi4yIDIwLjUgMTIuNCAyMC40IDEyLjdDMjEuMSAxMi45IDIxLjcgMTMuMSAyMi4zIDEzLjVDMjIuNiAxMyAyMi44IDEyLjUgMjMgMTJDMjEuMyA3LjYgMTcgNC41IDEyIDQuNU0xMiA5QzEwLjMgOSA5IDEwLjMgOSAxMlMxMC4zIDE1IDEyIDE1IDE1IDEzLjcgMTUgMTIgMTMuNyA5IDEyIDlNMTkgMjFWMTlIMTVWMTdIMTlWMTVMMjIgMThMMTkgMjFcIik7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCAyNCk7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgMjQpO1xyXG4gICAgdmlld19zdmcuc2V0QXR0cmlidXRlKCd4MScsICcwJyk7XHJcbiAgICB2aWV3X3N2Zy5zZXRBdHRyaWJ1dGUoJ3kxJywgJzAnKTtcclxuICAgIHZpZXdfc3ZnLnNldEF0dHJpYnV0ZSgneDInLCAnMjQnKTtcclxuICAgIHZpZXdfc3ZnLnNldEF0dHJpYnV0ZSgneTInLCAnMjQnKTtcclxuXHJcbiAgICAvL2FkZCBhdHRyaWJ1dGVzIHRvIGRlbGV0ZSBzdmdcclxuICAgIGRlbGV0ZV9wYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMTksNEgxNS41TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOVpcIik7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIDI0KTtcclxuICAgIGRlbGV0ZV9zdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDI0KTtcclxuICAgIGRlbGV0ZV9zdmcuc2V0QXR0cmlidXRlKCd4MScsICcwJyk7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZSgneTEnLCAnMCcpO1xyXG4gICAgZGVsZXRlX3N2Zy5zZXRBdHRyaWJ1dGUoJ3gyJywgJzI0Jyk7XHJcbiAgICBkZWxldGVfc3ZnLnNldEF0dHJpYnV0ZSgneTInLCAnMjQnKTtcclxuXHJcbiAgICAvL2FkZCB0ZXh0LCBnZXQgZGF0YSBmcm9tIHVzZXIgaW5wdXQgdG9kbyB0aXRsZVxyXG4gICAgLy8gbGV0IGlucHV0X3RvZG9fdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb190aXRsZScpO1xyXG4gICAgbGV0IGxvY2FsX3RvZG9fdGl0bGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvX3RpdGxlX2FycmF5JykpO1xyXG5cclxuICAgIGxpc3RfZGV0YWlscy50ZXh0Q29udGVudCA9IFwiXCIgKyBsb2NhbF90b2RvX3RpdGxlW2luZGV4XVtjb3VudF07XHJcbiAgICBwcmlvcml0eV9pbmRpY2F0b3IudGV4dENvbnRlbnQgPSAnSElHSCc7XHJcblxyXG4gICAgLy9hZGQgY2xhc3NcclxuICAgIGxpc3RfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RzJyk7XHJcbiAgICBjaGVja2JveF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1saW5lJyk7XHJcbiAgICBjaGVja2JveF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcclxuICAgIGxpc3RfZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdncmlkLWxpbmUnKTtcclxuICAgIGJ0bl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG4gICAgdmlld19zdmcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gICAgZGVsZXRlX3N2Zy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcblxyXG4gICAgLy91c2UgcHJvaiBpbmRleCB0byBkZXRlcm1pbmUgcGFyZW50IHByb2plY3RcclxuICAgIC8vIGxldCBwcm9qX2luZGV4ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJval9pbmRleCcpKTtcclxuXHJcbiAgICBsaXN0X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdF9cIiArIGluZGV4KTtcclxuXHJcbiAgICAvL2FkZCBpZFxyXG4gICAgbGlzdF9kZXRhaWxzLmlkID0gXCJsaXN0cy1pdGVtXCI7XHJcblxyXG4gICAgLy9jcmVhdGUgY2hlY2tib3ggZWxlbWVudFxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIC8vIEFzc2lnbmluZyB0aGUgYXR0cmlidXRlc1xyXG4gICAgLy8gdG8gY3JlYXRlZCBjaGVja2JveFxyXG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94Lm5hbWUgPSAnY29tcGxldGUnO1xyXG4gICAgY2hlY2tib3gudmFsdWUgPSAnY29tcGxldGUnO1xyXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnLnJlZ3VsYXItY2hlY2tib3gnKTtcclxuXHJcbiAgICAvL2FwcGVuZCB0byBwYXJlbnQgZWxlbWVudFxyXG4gICAgbGlzdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hfY29udGFpbmVyKTtcclxuICAgIGNoZWNrYm94X2NvbnRhaW5lci5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgbGlzdF9jb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdF9kZXRhaWxzKTtcclxuICAgIGxpc3RfY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bl9jb250YWluZXIpO1xyXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3X3N2Zyk7XHJcbiAgICBidG5fY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5X2luZGljYXRvcik7XHJcbiAgICBidG5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZV9zdmcpO1xyXG5cclxuICAgIC8vYXBlbmQgcGF0aCB0byByZXNwZWN0aXZlIHN2Z1xyXG4gICAgdmlld19zdmcuYXBwZW5kQ2hpbGQodmlld19wYXRoKTtcclxuICAgIGRlbGV0ZV9zdmcuYXBwZW5kQ2hpbGQoZGVsZXRlX3BhdGgpO1xyXG5cclxuICAgIC8vYXBwZW5kIGxpc3QgY29udGFpbmVyIHRvIHBhcmVudFxyXG4gICAgbXlMaXN0cy5hcHBlbmRDaGlsZChsaXN0X2NvbnRhaW5lcik7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=