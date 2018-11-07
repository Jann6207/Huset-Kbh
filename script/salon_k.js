    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/salon_K");
            page = await jsonObject.json();


post215Output();

        }

function post215Output() {

    let post215 = page.find(x => x.id == '215');

                //indsæt header info

            document.querySelector(".site_header").textContent = post215.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post215.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".salon_k_content").innerHTML = post215.content.rendered;

            //Billede url
            document.querySelector(".content_image").src = post215.acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post215.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post215.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post215.acf.video;
}
