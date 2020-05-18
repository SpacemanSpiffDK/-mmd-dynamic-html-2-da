// JS by Dan Høegh
// UCN MMD 2020

// function menuOn(){
//     document.querySelector('header > nav').classList.add('active');
// }

// function menuOff(){
//     document.querySelector('header > nav').classList.remove('active');
// }

function toggleClass(selector, className){
    document.querySelector(selector).classList.toggle(className);
}

function toggleClassDeleteBtn(elm, selector, className){
    document.querySelector(selector).classList.toggle(className);
    elm.style.display="none";
}