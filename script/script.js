$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPaaMenubutton);
}

function trykPaaMenubutton() {
    console.log("Tryk paa menubutton");
    $("nav").slideToggle(".navbar2");
    $(".menubutton").toggleClass("kryds");




}



/*
function trykPaaDropdownbutton() {
    console.log("Tryk paa dropdown_mobile");
    $(".dropdownbutton").slideToggle(".dropdown_content_mobile");
    $(".dropdownbutton").toggleClass("drop");




}
*/
