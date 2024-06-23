const navBar = document.getElementById("side-bar");
//console.log(navBar);
const content = document.querySelector(".content");

//

/*btn.addEventListener("click", () => {
  //console.log(e);
  if (navBar.style.left != "0px") {
    navBar.style.left = "0px";
    //console.log(navBar.style.left);
  } else {
    navBar.style.left = "-230px";
    //console.log(navBar.style.left);
  }
});*/

btn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

content.addEventListener("click", () => {
  navBar.classList.remove("active");
});
