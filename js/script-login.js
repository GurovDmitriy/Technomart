/*

  Имитация входа по кнопке войти в header

*/

let loginPopup = document.querySelector('.nav-user');
let loginBtn = loginPopup.querySelector('.nav-user__link-in');
let loginMenuIn = document.querySelector('.nav-login');
let loginOut = loginMenuIn.querySelector('.nav-login__icon-logout');

loginBtn.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  loginPopup.classList.toggle('nav-login--show');
  loginMenuIn.classList.toggle('nav-login--show');
});

loginOut.addEventListener("click", function() {
  loginMenuIn.classList.toggle('nav-login--show');
  loginPopup.classList.toggle('nav-login--show');
});

/*

  Счетчик на ссылке корзина в header

*/

let cartBtn = document.querySelector(".order-list__link-cart");
let countCart = cartBtn.querySelector(".cart-count");
let number = 0;

cartBtn.onclick = function(evt) {
  evt.preventDefault();
  number ++;
  countCart.textContent = number;
}

/*

  Скролл окна

*/


let scrollBtn = document.querySelector(".scroll-up");

window.onscroll = function() {
  if(window.pageYOffset > 300){
    scrollBtn.classList.add("scroll-up--show");
  } else {
    scrollBtn.classList.remove("scroll-up--show");
  }
}

scrollBtn.onclick = function() {
  window.scrollTo(0, 0);
}
