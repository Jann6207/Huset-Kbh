    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/husets_biograf");
            page = await jsonObject.json();


            post113Output();
        }


function post113Output() {

    let post113 = page.find(x => x.id == '113');

                //indsæt header info

            document.querySelector(".site_header").textContent = post113.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post113.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".husets_biograf_content").innerHTML = post113.content.rendered;

            //Billede url
            document.querySelector("img").src = post113.acf.billede.url;
            //alt tekst url
            document.querySelector("img").alt = post113.acf.billede.alt;
            //title
            document.querySelector("img").title = post113.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post113.acf.video;


}
