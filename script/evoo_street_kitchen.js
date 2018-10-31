    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/evoo_street_kitchen/186");
            page = await jsonObject.json();

            //indsæt header info

            document.querySelector(".site_header").textContent = page.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = page.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".evoo_street_kitchen_content").innerHTML = page.content.rendered;

            //Billede url
            document.querySelector("img").src = page.acf.billede.url;
            //alt tekst url
            document.querySelector("img").alt = page.acf.billede.alt;
            //title
            document.querySelector("img").title = page.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = page.acf.video;


        }
