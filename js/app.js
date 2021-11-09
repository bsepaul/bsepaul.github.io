'use strict'

// const switcher = document.querySelector('.btn');

// switcher.addEventListener('click', function() {
//     document.body.classList.toggle('dark-theme')
//     var className = document.body.className;
//     if(className == "light-theme") {
//         this.textContent = "Dark";
//     } else {
//         this.textContent = "Light";
//     }

//     console.log('current class name: ' + className);

// });

window.onscroll = function() {stickNav()};

var navBar = document.getElementById("topNav");

var sticky = navBar.offsetTop;

function stickNav() {
    if (window.pageYOffset > sticky) {
        navBar.classList.add("sticky");
    } else {
        Headers.classList.remove("sticky");
    }
}
