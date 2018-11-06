    document.addEventListener("DOMContentLoaded", getJson);

        let page;

        //henter json fil fra WP url
        async function getJson() {

            let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/bliv_en_del_af_huset");
            page = await jsonObject.json();

            post210Output();

        }

function post210Output() {

    let post210 = page.find(x => x.id == '210');

                //indsæt header info

            document.querySelector(".site_header").textContent = post210.acf.header;

            //indsæt tag-line info

            document.querySelector(".tag_line").textContent = post210.acf.tagline;

            //indsætter content i valgt html class

            document.querySelector(".bliv_en_del_af_huset_content").innerHTML = post210.content.rendered;

            //Billede url
            document.querySelector(".content_image").src = post210.acf.billede.url;
            //alt tekst url
            document.querySelector(".content_image").alt = post210.acf.billede.alt;
            //title
            document.querySelector(".content_image").title = post210.acf.billede.title;

            //Video
            document.querySelector(".video_container").innerHTML = post210.acf.video;
}
