    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/bastard_cafe/172");
            page = await jsonObject.json();

            //indsætter content i valgt html class

            document.querySelector(".bastard_content").innerHTML = page.content.rendered;

            //Billede url
            document.querySelector("img").src = page.acf.billede.url;
            //alt tekst url
            document.querySelector("img").alt = page.acf.billede.alt;
            //title
            document.querySelector("img").title = page.acf.billede.title;



        }
