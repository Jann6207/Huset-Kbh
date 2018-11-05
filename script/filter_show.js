    document.addEventListener("DOMContentLoaded", showSubFilter);



function showSubFilter(){
    console.log("CLICK PÅ KNAP");



    document.querySelector(".genre_tekst").addEventListener("click", show);


}

function show(){

    console.log("Hvis menu");
    document.querySelector(".genre_block").classList.add("show");



}


