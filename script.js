// MENU
const sidebar = document.getElementById("sidebar")
const menu = document.getElementById("menuBtn");
const blackbox = document.getElementById("blackscreen");

menu.addEventListener("click", function () {
    sidebar.style.left = 0;
    blackbox.style.display = "block";
    console.log(sidebar.style.left);

});

blackbox.addEventListener("click", function () {
    sidebar.style.left = (sidebar.offsetWidth * -1).toString() + "px";
    blackbox.style.display = "none";
});