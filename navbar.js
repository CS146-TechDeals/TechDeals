//Referenced from https://www.w3schools.com/css/css_navbar.asp
function createResponsiveNav(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}