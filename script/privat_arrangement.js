    document.addEventListener("DOMContentLoaded", getJson);

    let page;

    //henter json fil fra WP url
    async function getJson() {

        let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/privat_arrangements");
        page = await jsonObject.json();


        post179Output();
        sreenSize();
    }

    function post179Output() {

        let post179 = page.find(x => x.id == '179');

        //indsæt header info

        document.querySelector(".site_header").textContent = post179.acf.header;

        //indsæt tag-line info

        document.querySelector(".tag_line").textContent = post179.acf.tagline;

        //indsætter content i valgt html class

        document.querySelector(".privat_arrangement_content").innerHTML = post179.content.rendered;

        //Billede url
        document.querySelector(".content_image").src = post179.acf.billede.url;
        //alt tekst url
        document.querySelector(".content_image").alt = post179.acf.billede.alt;
        //title
        document.querySelector(".content_image").title = post179.acf.billede.title;

        //Video
    }

    // SCREEN LISTENER ÅBNER OG LUKKER ET ELEMENT

    function sreenSize() {
        console.log("screeeen siiize");
        if (window.matchMedia("(min-width: 1000px)").matches) {
            /* the viewport is at least 400 pixels wide */
        } else {

            document.querySelector(".section_1").addEventListener("click", section_1_mobil);
            document.querySelector(".section_2").addEventListener("click", section_2_mobil);
            document.querySelector(".section_3").addEventListener("click", section_3_mobil);
            document.querySelector(".section_4").addEventListener("click", section_4_mobil);
            document.querySelector(".section_5").addEventListener("click", section_5_mobil);
            document.querySelector(".section_6").addEventListener("click", section_6_mobil);
            document.querySelector(".section_7").addEventListener("click", section_7_mobil);
            document.querySelector(".section_8").addEventListener("click", section_8_mobil);
            document.querySelector(".section_9").addEventListener("click", section_9_mobil);

            /* the viewport is less than 400 pixels wide */
        }
    }

    function section_1_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_1");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };


    function section_2_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_2");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    function section_3_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_3");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    function section_4_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_4");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    function section_5_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_5");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    function section_6_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_6");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    function section_7_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_7");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    function section_8_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_8");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    function section_9_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_9");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };
