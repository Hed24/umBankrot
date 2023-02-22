const burger = document.querySelector('.header_____nav____burger');
const navList = document.querySelector('.header_____nav____list');

burger.addEventListener('click', function() {
    burger.classList.toggle('header_____nav____burger-active');
    navList.classList.toggle('header_____nav____list-active');
});

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        burger.classList.remove('header_____nav____burger-active');
        navList.classList.remove('header_____nav____list-active');
    }
});

document.addEventListener('click', function(e) {
    if ((e.target !== navList) && (e.target !== burger)) {
        burger.classList.remove('header_____nav____burger-active');
        navList.classList.remove('header_____nav____list-active');
    }
});