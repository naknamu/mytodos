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

