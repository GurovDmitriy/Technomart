let formPopupBtn = document.querySelector('.map__link');
let formPopup = document.querySelector('.form-popup');
let formPopupClose = formPopup.querySelector('.btn-close-form');

let mapPopupBtn = document.querySelector('.map__img');
let mapPopup = document.querySelector('.map-popup');
let mapPupupClose = mapPopup.querySelector('.map-popup__btn');

let loginPopup = document.querySelector('.nav-user');
let loginBtn = loginPopup.querySelector('.nav-user__link-in');
let loginMenuIn = document.querySelector('.nav-login');
let loginOut = loginMenuIn.querySelector('.nav-login__icon-logout');


let form = formPopup.querySelector('.form');
let name = form.querySelector('input[name=name]');
let email = form.querySelector('input[name=email]');

let storage = localStorage.getItem("name");

formPopupBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	formPopup.classList.add('form-popup--show');
	name.focus();
	if(storage) {
		name.value = storage;
		email.focus();
	} else {
		name.focus();
		}
});

form.addEventListener("submit", function(evt){
	if(!name.value || !email.value) {
		evt.preventDefault();
		formPopup.classList.remove("form-popup--error");
		void formPopup.offsetWidth;
		formPopup.classList.add("form-popup--error");
	} else {
		localStorage.setItem("name", name.value);
	}
});

formPopupClose.addEventListener("click", function() {
	formPopup.classList.remove('form-popup--show');
	formPopup.classList.remove("form-popup--error");
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		if(formPopup.classList.contains('form-popup--show')) {
			formPopup.classList.remove('form-popup--show');
			formPopup.classList.remove("form-popup--error");
		}
	}
});


mapPopupBtn.addEventListener("click", function() {
	mapPopup.classList.add('map-popup--show');
});

mapPupupClose.addEventListener("click", function() {
	mapPopup.classList.remove('map-popup--show');
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		if(mapPopup.classList.contains('map-popup--show')) {
			mapPopup.classList.remove('map-popup--show');
		}
	}
});

loginBtn.addEventListener("click", function(evt) {
	evt.preventDefault();	
	loginPopup.classList.toggle('nav-login--show');
	loginMenuIn.classList.toggle('nav-login--show');
});

loginOut.addEventListener("click", function() {
	loginMenuIn.classList.toggle('nav-login--show');
	loginPopup.classList.toggle('nav-login--show');
});
