import './style.css';
import './new-project.js';
import './store-project.js';

document.addEventListener('keydown', (event) => {
    // console.log(event.key);
    if (event.key === 'Delete') {
        console.log('testing!');
        let keys = Object.keys(localStorage);
            for(let key of keys) {
                console.log(`${key}: ${localStorage.getItem(key)}`);
            }
    }
})