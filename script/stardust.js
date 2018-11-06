    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/stardust");
            page = await jsonObject.json();



post191Output();
        }

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
            document.querySelector(".content_image").src = post191.acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post191.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post191.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post191.acf.video;

}
