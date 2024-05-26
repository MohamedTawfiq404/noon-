let iconcart = document.querySelector('.btncard');
let closecart = document.querySelector('.close');
let body = document.querySelector('body');
let cardstHTML = document.querySelector('.cards');

iconcart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})
closecart.addEventListener('click', ()=> {
    body.classList.toggle('showcart')

})
