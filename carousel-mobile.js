var ptoggle = document.getElementById("promo-carousel");
function toggleSlide(x) {
    if (x.matches) { // If media query matches
        ptoggle.classList.toggle("slide");
    } 
    else{
        ptoggle.classList.toggle("slide");
    }  
}
var x = window.matchMedia("(max-width: 700px)");
toggleSlide(x); // Call listener function at run time
x.addListener(toggleSlide); // Attach listener function on state 