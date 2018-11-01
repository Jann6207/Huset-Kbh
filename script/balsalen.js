    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/balsalen");
            page = await jsonObject.json();

   post220Output();


        }
function post220Output(){

           //post med id 209
            let post220 = page.find(x => x.id == '220');

             //indsæt header info

            document.querySelector(".site_header").textContent = post220.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post220.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".balsalen_content").innerHTML = post220.content.rendered;

            //Billede url
            document.querySelector("img").src = post220.acf.billede.url;
            //alt tekst url
            document.querySelector("img").alt = post220.acf.billede.alt;
            //title
            document.querySelector("img").title = post220.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post220.acf.video;




}
