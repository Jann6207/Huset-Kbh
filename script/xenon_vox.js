    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/xenon_vox");
            page = await jsonObject.json();



            post190Output();
        }

function post190Output() {

    let post190 = page.find(x => x.id == '190');

                //indsæt header info

            document.querySelector(".site_header").textContent = post190.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post190.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".xenon_vox_content").innerHTML = post190.content.rendered;

            //Billede url
            document.querySelector("img").src = post190.acf.billede.url;
            //alt tekst url
            document.querySelector("img").alt = post190.acf.billede.alt;
            //title
            document.querySelector("img").title = post190.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post190.acf.video;
}
