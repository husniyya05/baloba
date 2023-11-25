const menu = document.querySelector(".menu-home");
const home = document.querySelector(".a-home");

function toggleMobile() {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
  
}

home.addEventListener("click", toggleMobile);


const ahref = document.querySelector(".a-watch");
const watchMenu = document.querySelector(".watch-menu");

function mobile() {
  if(watchMenu.style.display === "none" || watchMenu.style.display === ""){
    watchMenu.style.display = "block";
  }
  else{
    menu.style.display = "none";
  }
}

home.addEventListener("click", mobile);