    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/offentlig_arrangment");
            page = await jsonObject.json();


            post177Output();

        }

function post177Output() {

    //post med  id 177

    let post177 = page.find(x => x.id == '177');

                //indsæt header info

            document.querySelector(".site_header").textContent = post177.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post177.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".offentligt_arrangement_content").innerHTML = post177.content.rendered;

            //Billede url
            document.querySelector(".content_image").src = post177.acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post177.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post177.acf.billede.title;

            //Video

}
