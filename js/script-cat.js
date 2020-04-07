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
