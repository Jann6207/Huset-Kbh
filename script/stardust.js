    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/stardust");
            page = await jsonObject.json();



post191Output();
     sreenSize();   }

function post191Output (){

         //post med id 209
            let post191 = page.find(x => x.id == '191');

        //indsæt header info

            document.querySelector(".site_header").textContent = post191.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post191.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".stardust_content").innerHTML = post191.content.rendered;

            //Billede url
        document.querySelector(".content_image").style.backgroundImage = "url('" +  post191.acf.billede.url + "')";
            //alt tekst url
            document.querySelector(".content_image").alt = post191.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post191.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post191.acf.video;

}


// SCREEN LISTENER ÅBNER OG LUKKER ET ELEMENT

function sreenSize(){
    console.log("screeeen siiize");
    if (window.matchMedia("(min-width: 1000px)").matches) {
  /* the viewport is at least 400 pixels wide */
} else {

    document.querySelector(".section_1").addEventListener("click", section_1_mobil);
    document.querySelector(".section_2").addEventListener("click", section_2_mobil);
    document.querySelector(".section_3").addEventListener("click", section_3_mobil);
    document.querySelector(".section_4").addEventListener("click", section_4_mobil);




  /* the viewport is less than 400 pixels wide */
}
}

    function section_1_mobil(){

            console.log("HEJ");

    let a = document.querySelector(".show_1");

    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }

        };


 function section_2_mobil(){

            console.log("HEJ");

    let a = document.querySelector(".show_2");

    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }

        };


 function section_3_mobil(){

            console.log("HEJ");

    let a = document.querySelector(".show_3");

    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }

        };

 function section_4_mobil(){

            console.log("HEJ");

    let a = document.querySelector(".show_4");

    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }

        };



