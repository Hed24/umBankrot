/* eslint-disable no-unused-vars */
const button = document.getElementById('dropdown-button');
const list = document.querySelector('.form-group____dropdown___list');
const item = document.querySelectorAll('.form-group____dropdown___list__item');
const input = document.querySelector('.form-group____dropdown___input');
input.value = "whatsApp";

console.log(button)

button.addEventListener('click', function () {
  list.classList.toggle('form-group____dropdown___list--visible');  
})

item.forEach(function (item) {
  item.addEventListener('click', function(e) {
    input.value=this.dataset.value;
    document.querySelector('.form-group____dropdown___list__item--active').classList.remove('form-group____dropdown___list__item--active')
    button.innerHTML = `<img src="./img/svg_${this.dataset.value}.svg">`;
    if (this.dataset.value === 'telegram') {
      button.style.background="#1286C8";
    } else {
      button.style.background="#12C868";
    };
    item.classList.add('form-group____dropdown___list__item--active');
    list.classList.remove('form-group____dropdown___list--visible');
  })
  
})

document.addEventListener('click', function(e) {
  if (e.target !== button) {
    list.classList.remove('form-group____dropdown___list--visible');
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab' || e.key === "Escape") {
    list.classList.remove('form-group____dropdown___list--visible');
  }
})

const buttonList = document.querySelectorAll('.top___social__item_sub');
const buttonItem = document.querySelector('.top___social__item_sub');
buttonList.forEach(function(buttonItem) {
  buttonItem.addEventListener('mouseover',function() {
    this.classList.add('active');
  })
  buttonItem.addEventListener('mouseout',function() {
    this.classList.remove('active');
  })
})

document.querySelector('.instruction_____content____form___wrapper__btn').addEventListener('submit', function(e) {
  e.preventDefault();
  document.querySelector('.instruction_____content____form___success').style.display="block";
});


