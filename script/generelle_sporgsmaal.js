    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/generelle_sporgsmal");
            page = await jsonObject.json();

            post229Output();
        }

function post229Output (){

                //post med id 209
            let post209 = page.find(x => x.id == '209');



            //indsæt header info

            document.querySelector(".site_header").textContent = post209.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post209.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".generelle_sporgsmaal_content").innerHTML = post209.content.rendered;

            //Billede url
            document.querySelector(".content_image").src = post209.acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post209.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post209.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post209.acf.video;


}
