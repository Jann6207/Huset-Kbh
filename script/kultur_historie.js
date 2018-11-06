    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/kultur_historie");
            page = await jsonObject.json();

            post196Output();



        }


function post196Output() {
    console.log("test");

    //post med id 196

    let post196 = page.find(x => x.id == '196');

                //indsæt header info

            document.querySelector(".site_header").textContent = post196.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post196.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".kultur_historie_content").innerHTML = post196.content.rendered;

            //Billede url
            document.querySelector(".content_image").src = post196.acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post196.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post196.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post196.acf.video;
}
