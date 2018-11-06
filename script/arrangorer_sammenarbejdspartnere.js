    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/arrangorer_samarbejd");
            page = await jsonObject.json();


post202Output();

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
