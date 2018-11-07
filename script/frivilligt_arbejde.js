    document.addEventListener("DOMContentLoaded", getJson);




        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/frivilligt_arbejde");
            page = await jsonObject.json();


post160Output();
            sreenSize();

        }

function post160Output() {

    //post med id 160

    let post160 = page.find(x => x.id == '160');

                //indsæt header info

            document.querySelector(".site_header").textContent = post160.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post160.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".frivilligt_arbejde_content").innerHTML = post160.content.rendered;

            //Billede url
            document.querySelector(".content_image").src = post160
                .acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post160.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post160.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post160.acf.video;

}

// SCREEN LISTENER ÅBNER OG LUKKER ET ELEMENT

function sreenSize(){
    console.log("screeeen siiize");
    if (window.matchMedia("(min-width: 1000px)").matches) {
  /* the viewport is at least 400 pixels wide */
} else {

    document.querySelector(".section_1").addEventListener("click", section1_mobil);


  /* the viewport is less than 400 pixels wide */
}
}

    function section1_mobil(){

            console.log("HEJ");

    let a = document.querySelector(".show_1");

    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }

        };


 function section2_mobil(){

            console.log("HEJ");

    let a = document.querySelector(".show_1");

    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }

        };
