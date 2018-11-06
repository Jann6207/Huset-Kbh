    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/bastard_cafe");
            page = await jsonObject.json();


post172Output();

        }

function post172Output (){

            //post med id 209
            let post172 = page.find(x => x.id == '172');


        //indsæt header info

            document.querySelector(".site_header").textContent = post172.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post172.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".bastard_content").innerHTML = post172.content.rendered;

            //Billede url
            document.querySelector(".content_image").src = post172.acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post172.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post172.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post172.acf.video;


}
