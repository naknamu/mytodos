/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/store-project.js ***!
  \******************************/
function storeNewProject() {
    const project_name = document.querySelector('#name');
    const project_details = document.querySelector('#details');

    // console.log(project_name.value);
    // console.log(project_details.value);

    const store_projectName = localStorage.setItem('name', project_name.value);
    const store_projectDetails = localStorage.setItem('details', project_details.value);

    getNewProject();
}

function getNewProject() {
    const get_projectName = localStorage.getItem('name');
    const get_projectDetails = localStorage.getItem('details');

    console.log(get_projectName);
    console.log(get_projectDetails);
}


const submit_button = document.querySelector('.submit');

submit_button.addEventListener('click', () => {
    storeNewProject();
})


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVQcm9qZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXRvZG9zLy4vc3JjL3N0b3JlLXByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3RvcmVOZXdQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxuICAgIGNvbnN0IHByb2plY3RfZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJyk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdF9uYW1lLnZhbHVlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RfZGV0YWlscy52YWx1ZSk7XHJcblxyXG4gICAgY29uc3Qgc3RvcmVfcHJvamVjdE5hbWUgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIHByb2plY3RfbmFtZS52YWx1ZSk7XHJcbiAgICBjb25zdCBzdG9yZV9wcm9qZWN0RGV0YWlscyA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZXRhaWxzJywgcHJvamVjdF9kZXRhaWxzLnZhbHVlKTtcclxuXHJcbiAgICBnZXROZXdQcm9qZWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5ld1Byb2plY3QoKSB7XHJcbiAgICBjb25zdCBnZXRfcHJvamVjdE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpO1xyXG4gICAgY29uc3QgZ2V0X3Byb2plY3REZXRhaWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RldGFpbHMnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhnZXRfcHJvamVjdE5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coZ2V0X3Byb2plY3REZXRhaWxzKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHN1Ym1pdF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XHJcblxyXG5zdWJtaXRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc3RvcmVOZXdQcm9qZWN0KCk7XHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=