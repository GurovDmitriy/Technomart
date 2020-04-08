/*

  Фильтр плитка список

*/

let flexBtn = document.querySelector(".visual-btn");
let catalog = document.querySelector(".catalog-list");

flexBtn.onclick = function(){
  flexBtn.classList.toggle("visual-btn--list");
  catalog.classList.toggle("products-list--list");
}

/*

  Фильтр

*/

let formFilter = document.querySelector(".form-filter");
let formFilterSub = formFilter.querySelector(".form-filter__btn");
let formInputs = formFilter.querySelectorAll("input[type=checkbox]");
let catalogItems = document.querySelectorAll(".products-list__link");


formFilterSub.onclick = function(evt) {
  evt.preventDefault();

  for(let cleanClass of catalogItems){
    cleanClass.classList.remove("products-list__link--hidden");
  }

  for(let formInput of formInputs) {
    if(!formInput.checked) {
      nameFirmValue = formInput.value;
      for(let catalogItem of catalogItems) {
        nameFirmCatalog = catalogItem.querySelector(".products-list__text");
        if(nameFirmCatalog.textContent.includes(nameFirmValue)){
          catalogItem.classList.add("products-list__link--hidden");
        } 
      }
    }
  }
};

