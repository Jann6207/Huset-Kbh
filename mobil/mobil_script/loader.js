document.addEventListener("DOMContentLoaded", start);
let TimeOut;


function start() {
    TimeOut = setTimeout(showPage, 3000);
}
// Når DOM er loaded, skal loaderne fjernes & content tilføjes
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}

// Når brugeren scrolls, udfør denne funktion
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
