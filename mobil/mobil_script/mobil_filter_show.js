    document.addEventListener("DOMContentLoaded", showSubFilter);



function showSubFilter(){
    console.log("CLICK PÅ KNAP");



    document.querySelector(".genre_tekst").addEventListener("click", showMusikMenu);
    document.querySelector(".venues_tekst").addEventListener("click", showVenuesMenu);


}

function showMusikMenu(){

    console.log("Hvis musik menu");
    document.querySelector(".genre_block").classList.add("show");

        document.querySelector(".venues_block").classList.remove("show");



}


function showVenuesMenu(){

    console.log("Hvis venues menu");
        document.querySelector(".genre_block").classList.remove("show");

    document.querySelector(".venues_block").classList.add("show");



}
