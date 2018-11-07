    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/arrangorer_samarbejd");
            page = await jsonObject.json();


post202Output();
            sreenSize();

        }

function post202Output (){

         //post med id 209
            let post202 = page.find(x => x.id == '202');

        //indsæt header info

            document.querySelector(".site_header").textContent = post202.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post202.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".arrangore_sammenarbejdspartnere_content").innerHTML = post202.content.rendered;

            //Billede url
            document.querySelector(".content_image").src = post202.acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post202.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post202.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post202.acf.video;
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
            document.querySelector(".section_10").addEventListener("click", section_10_mobil);
            document.querySelector(".section_11").addEventListener("click", section_11_mobil);
            document.querySelector(".section_12").addEventListener("click", section_12_mobil);
            document.querySelector(".section_13").addEventListener("click", section_13_mobil);
            document.querySelector(".section_14").addEventListener("click", section_14_mobil);
            document.querySelector(".section_15").addEventListener("click", section_15_mobil);
            document.querySelector(".section_16").addEventListener("click", section_16_mobil);
            document.querySelector(".section_17").addEventListener("click", section_17_mobil);
            document.querySelector(".section_18").addEventListener("click", section_18_mobil);

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

  function section_10_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_10");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

  function section_11_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_11");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

  function section_12_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_12");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

  function section_13_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_13");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

  function section_14_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_14");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

  function section_15_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_15");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

  function section_16_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_16");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };
  function section_17_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_17");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };
  function section_18_mobil() {
        console.log("HEJ");

        let a = document.querySelector(".show_18");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };
