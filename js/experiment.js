

let logoSite = document.querySelector(".logo");


logoSite.onclick = function() {
  let text = logoSite.textContent

   logoSite.textContent = text.toLowerCase();
}

