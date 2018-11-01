    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/musikcafe");
            page = await jsonObject.json();


            post187Output();

        }

function post187Output() {


    let post187 = page.find(x => x.id == '187');

                //indsæt header info

            document.querySelector(".site_header").textContent = post187.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post187.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".musickafeen_wrapper_content").innerHTML = post187.content.rendered;

            //Billede url
            document.querySelector("img").src = post187.acf.billede.url;
            //alt tekst url
            document.querySelector("img").alt = post187.acf.billede.alt;
            //title
            document.querySelector("img").title = post187.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post187.acf.video;

}
