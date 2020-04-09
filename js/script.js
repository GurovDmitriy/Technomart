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

/*let slides = document.querySelectorAll(".slider__item");
let btnSliderPre = document.querySelector(".slider__btn-pre");
let btnSliderNxt = document.querySelector(".slider__btn-next");


let sliderSwicher = function(slide) {
    btnSliderNxt.onclick = function() {
      if(slide.classList.contains("slider__item--show")){
        console.log(slide);
      }
      
    }
}

for(let j = 0; j < slides.length; j++) {
  sliderSwicher(slides[j]);
};
*/

/*

	Переключение меню сервисов на главной

*/

let menuAdvBtns = document.querySelectorAll(".advantages-menu__link");
let menuAdvSlides = document.querySelectorAll(".advantages-list__item");

let servisesSwitcher = function(menuAdvBtn, menuAdvSlide) {
  menuAdvBtn.onclick = function(evt) {
    evt.preventDefault();

    for(let menuBtnClean of menuAdvBtns) {
      if(menuBtnClean !== menuAdvBtn && menuBtnClean.classList.contains("advantages-menu__link--active")) {
        menuBtnClean.classList.remove("advantages-menu__link--active");
      }
    }

    for(let menuSlideClean of menuAdvSlides) {
      if(menuSlideClean !== menuAdvSlide && menuSlideClean.classList.contains("advantages-list__item--show")) {
        menuSlideClean.classList.remove("advantages-list__item--show");
      }
    }
    menuAdvBtn.classList.add("advantages-menu__link--active");
    menuAdvSlide.classList.add("advantages-list__item--show");
  }
}

for(let i = 0; i < menuAdvBtns.length; i++) {
  servisesSwitcher(menuAdvBtns[i], menuAdvSlides[i]);
};

/*Имитация регистрации
  нерабочая*/

/*let formPopupReg = document.querySelector('.form-reg');
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
*/
