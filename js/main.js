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
    this.nextElementSibling.classList.toggle('modal_active');
};

