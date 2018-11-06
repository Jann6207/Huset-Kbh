    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/bip_bip_bar");
            page = await jsonObject.json();


post184Output();

        }
function post184Output(){

                  //post med id 209
            let post184 = page.find(x => x.id == '184');

      //indsæt header info

            document.querySelector(".site_header").textContent = post184.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post184.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".bib_bib_bar_content").innerHTML = post184.content.rendered;

            //Billede url
            document.querySelector(".content_image").src = post184.acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post184.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post184.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post184.acf.video;



}
