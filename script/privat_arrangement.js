    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/privat_arrangements");
            page = await jsonObject.json();


            post179Output();

        }

function post179Output() {

    let post179 = page.find(x => x.id == '179');

                //indsæt header info

            document.querySelector(".site_header").textContent = post179.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post179.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".privat_arrangement_content").innerHTML = post179.content.rendered;

            //Billede url
            document.querySelector("img").src = post179.acf.billede.url;
            //alt tekst url
            document.querySelector("img").alt = post179.acf.billede.alt;
            //title
            document.querySelector("img").title = post179.acf.billede.title;

            //Video

}
