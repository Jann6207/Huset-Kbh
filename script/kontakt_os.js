    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/kontakt_os");
            page = await jsonObject.json();


post203Output();
        }

function post203Output() {

    let post203 = page.find(x => x.id == '203');

                //indsæt header info

            document.querySelector(".site_header").textContent = post203.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post203.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".kontakt_os_content").innerHTML = post203.content.rendered;

            //Billede url
            document.querySelector("img").src = post203.acf.billede.url;
            //alt tekst url
            document.querySelector("img").alt = post203.acf.billede.alt;
            //title
            document.querySelector("img").title = post203.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post203.acf.video;

}
