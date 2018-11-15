$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPaaMenubutton);
}

function trykPaaMenubutton() {
    console.log("Tryk paa menubutton");
    $("nav").slideToggle (".navbar2");
    $(".menubutton").toggleClass("kryds");




}


/* POP UP START */

 function ShowNewsletter() {
        setTimeout(function () {
            document.getElementById("newsletter_container").style.visibility = "visible";
        }, 2000);
    }

$(document).ready(function(){
    $("button").click(function(){
        $("#newsletter_container").remove();
    });
});

/* POP UP SLUT */

/* TILBAGE TIL TOP KNAP START */


 $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

/* TILBAGE TIL TOP KNAP SLUT */


/*
function trykPaaDropdownbutton() {
    console.log("Tryk paa dropdown_mobile");
    $(".dropdownbutton").slideToggle(".dropdown_content_mobile");
    $(".dropdownbutton").toggleClass("drop");




}
*/
