    document.addEventListener("DOMContentLoaded", showSubFilter);



    function showSubFilter() {
        console.log("CLICK PÅ KNAP");


        if (window.innerWidth <= 999){

            console.log("jeg hedder EDAMAMAMA")
        document.querySelector(".genre_tekst").addEventListener("click", showMusikMenu);
        document.querySelector(".venues_tekst").addEventListener("click", showVenuesMenu);

        //sub filter

        document.querySelector(".tema_musik").addEventListener("click", show_sub_musik);
        document.querySelector(".tema_film").addEventListener("click", show_sub_film);
        document.querySelector(".tema_ord").addEventListener("click", show_sub_ord);
        document.querySelector(".tema_scenekunst").addEventListener("click", show_sub_scenekunst);
        document.querySelector(".tema_andet").addEventListener("click", show_sub_andet);


        document.querySelectorAll(".event_genre").forEach(knap => {

        knap.addEventListener("click", lukAlleSub)
    })

          document.querySelectorAll(".event_venue").forEach(knap => {

        knap.addEventListener("click", lukAlleSub)
    })


        }

        else {

        document.querySelector(".tema_musik").addEventListener("click", show_sub_musik);
        document.querySelector(".tema_film").addEventListener("click", show_sub_film);
        document.querySelector(".tema_ord").addEventListener("click", show_sub_ord);
        document.querySelector(".tema_scenekunst").addEventListener("click", show_sub_scenekunst);
        document.querySelector(".tema_andet").addEventListener("click", show_sub_andet);
        }



    }

    function showMusikMenu() {

        console.log("Hvis musik menu");

                    document.querySelector(".venues_block").style.display = "none";


  let a = document.querySelector(".genre_block");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }


    }



    function showVenuesMenu() {

        console.log("Hvis venues menu");

        document.querySelector(".genre_block").style.display = "none";


          let a = document.querySelector(".venues_block");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }



    }


    function show_sub_musik() {


        console.log("show musik sub");

        let a = document.querySelector(".musik_filter");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }

    }

function show_sub_film() {


        console.log("show film sub");

        let a = document.querySelector(".film_filter");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }

    }
function show_sub_ord() {


        console.log("show ord sub");

        let a = document.querySelector(".ord_filter");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }

    }

function show_sub_scenekunst() {


        console.log("show scenekunst sub");

        let a = document.querySelector(".scenekunst_filter");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }

    }

function show_sub_andet() {


        console.log("show andet sub");

        let a = document.querySelector(".andet_filter");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }

    }

function lukAlleSub(){


    document.querySelector(".venues_block").style.display = "none";
    document.querySelector(".genre_block").style.display = "none";



}
