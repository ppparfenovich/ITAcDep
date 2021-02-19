// Burger
const burgerNav = document.querySelector('.burger')
burgerNav.onclick = function(){
    document.body.classList.toggle('burger_active');
}



// modal

const btnModal = document.querySelectorAll('.button__modal');


btnModal.forEach(function (params) {
    params.addEventListener('click', modalOpen);
});

function modalOpen() {
    this.nextElementSibling.classList.add('modal_active');

    let fadeClose = document.querySelector('.modal_active');

    fadeClose.onclick = function(){
        this.classList.remove('modal_active');
    }

    let btnClose = document.querySelector('.modal_active .btn-dark');

};

// const fadeClose = document.querySelector('.modal_active');
// const btnClose = document.querySelector('.modal_active .btn-dark');



// fadeClose.addEventListener('click', modalClose);

// function modalClose() {
//     this.parentNode.classList.toggle('modal_active');
// };


 
// btnClose.onclick = function(){
//     fadeClose.classList.remove('modal_active');
// }




// Slider

// const buttonLeft = document.querySelector('.slider__button_left');
// const buttonRight = document.querySelector('.slider__button_right');
// const slides = document.querySelectorAll('.card');



// let currentPosition = 0;

// function setPosition(position) {
//     if (position > 0) {
//         return false;
//     }
//     if (position < -(slides.length-3)*100) {
//         return false;
//     }
//     currentPosition = position;    
//     slides.forEach(slide => slide.style.transform = `translateX(${currentPosition}%)`);
//     return currentPosition;
// }

// buttonRight.onclick = () => {
//     setPosition(currentPosition-100);
// }

// buttonLeft.onclick = () => {
//     setPosition(currentPosition+100);
// }


