/*

  Фильтр плитка список

*/

let flexBtn = document.querySelector(".visual-btn");
let catalog = document.querySelector(".catalog-list");

flexBtn.onclick = function(){
  flexBtn.classList.toggle("visual-btn--list");
  catalog.classList.toggle("products-list--list");
}