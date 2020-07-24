function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "#363940";
}
  
function openNav() {
    document.getElementById("Sidenav").style.width = "290px";
    document.getElementById("main").style.marginLeft = "280px";
    document.body.style.backgroundColor = "#363940";
}