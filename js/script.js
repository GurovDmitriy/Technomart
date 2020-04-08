/*

	Открытие карты на главной
	Закрытие по кнопке и esc

*/

let mapPopupBtn = document.querySelector('.map__img');
let mapPopup = document.querySelector('.map-popup');
let mapPupupClose = mapPopup.querySelector('.map-popup__btn');

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

/*

	Открытие формы на главной
	Проверка заполнения полей
	Автофокус на первое поле
	Не работает локал сторадж

*/

let formPopupBtn = document.querySelector('.map__link');
let formPopup = document.querySelector('.form-popup');
let formPopupClose = formPopup.querySelector('.btn-close-form');

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


/*

	Реализация слайдера на главной

*/

/*let slider = document.querySelector(".slider");
let sliderBtn = slider.querySelectorAll(".slider__btn");
let slide = slider.querySelectorAll(".slider__item");

for(let btn of sliderBtn) {
	btn.onclick = function() {
		for(let element of slide) {
			element.classList.toggle("slider__item--show");
		}
	}
};
*/
/*

	Переключение меню сервисов на главной

*/

/*let menuAdv = document.querySelector(".advantages-menu");
let menuAdvBtn = menuAdv.querySelectorAll(".advantages-menu__link");
let menuAdvSlider = document.querySelector(".advantages-list");
let menuAdvAlide = menuAdvSlider.querySelectorAll(".advantages-list__item");

for(let btn of menuAdvBtn) {
	btn.onclick = function(evt) {
		evt.preventDefault();
		if(!btn.classList.contains("advantages-menu__link--active")){
			btn.classList.add("advantages-menu__link--active");
		} 
	}
	if(btn.classList.contains("advantages-menu__link--active")) {
		btn.classList.remove"advantages-menu__link--active");
	}
};*/

/*

  Имитация регистрации
  нерабочая

*/

let formPopupReg = document.querySelector('.form-reg');
let formPopupRegBtn = document.querySelector('.nav-user__link-reg');
let formPopupRegClose = formPopupReg.querySelector('.btn-close-form');

let formReg = formPopupReg.querySelector('.form');
let nameReg = formReg.querySelector('input[name=name]');
let sonameReg = formReg.querySelector('input[name=soname]');

let userName = document.querySelector(".nav-login__link-user");

formPopupRegBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  formPopupReg.classList.add('form-reg--show');
  nameReg.focus();
});

formReg.addEventListener("submit", function(evt){
  if(!nameReg.value || !sonameReg.value) {
    evt.preventDefault();
    formPopupReg.classList.remove("form-popup--error");
    void formPopup.offsetWidth;
    formPopupReg.classList.add("form-popup--error");
  } 
  if(nameReg.value.length <= 4 || sonameReg.value.length <= 4){
    evt.preventDefault();
    formPopupReg.classList.remove("form-popup--error");
    void formPopup.offsetWidth;
    formPopupReg.classList.add("form-popup--error");
  }

});

formPopupRegClose.addEventListener("click", function() {
  formPopupReg.classList.remove('form-reg--show');
  formPopupReg.classList.remove("form-popup--error");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(formPopupReg.classList.contains('form-reg--show')) {
      formPopupReg.classList.remove('form-reg--show');
      formPopupReg.classList.remove("form-popup--error");
    }
  }
});

