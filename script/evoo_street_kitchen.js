    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/evoo_street_kitchen/186");
            page = await jsonObject.json();



        }
function post186Output (){

       //post med id 186
            let post186 = page.find(x => x.id == '186');


            //indsæt header info

            document.querySelector(".site_header").textContent = post186.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post186.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".evoo_street_kitchen_content").innerHTML = post186.content.rendered;

            //Billede url
            document.querySelector("img").src = post186.acf.billede.url;
            //alt tekst url
            document.querySelector("img").alt = post186.acf.billede.alt;
            //title
            document.querySelector("img").title = post186.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post186.acf.video;

}
