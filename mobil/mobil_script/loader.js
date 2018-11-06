document.addEventListener("DOMContentLoaded", start);
let TimeOut;


function start() {
    TimeOut = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
