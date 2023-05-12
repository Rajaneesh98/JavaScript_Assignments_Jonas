'use strict';

const clickHandler = function(e) {
    if(e.key === 'Escape')
        console.log("success")
}

document.addEventListener('keydown',clickHandler)