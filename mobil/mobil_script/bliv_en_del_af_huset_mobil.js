    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/bliv_en_del_af_huset");
            page = await jsonObject.json();

            post210Output();
            screenSize();

        }

function post210Output() {

    let post210 = page.find(x => x.id == '210');

                //indsæt header info

            document.querySelector(".site_header").textContent = post210.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post210.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".bliv_en_del_af_huset_content").innerHTML = post210.content.rendered;

            //Billede url
        document.querySelector(".content_image").style.backgroundImage = "url('" +  post210.acf.billede.url + "')";
            //alt tekst url
            document.querySelector(".content_image").alt = post210.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post210.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post210.acf.video;
}

// SCREEN LISTENER ÅBNER OG LUKKER ET ELEMENT

function screenSize(){
    console.log("screeeen siiize");
    if (window.matchMedia("(min-width: 1000px)").matches) {
  /* the viewport is at least 400 pixels wide */
} else {

    document.querySelector(".section_1").addEventListener("click", section_1_mobil);
    document.querySelector(".section_2").addEventListener("click", section_2_mobil);
     document.getElementById("search_button").addEventListener("click", search_mobil);





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

    function search_mobil() {
        console.log("HEJ");

        let a = document.getElementById("search_bar");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };


