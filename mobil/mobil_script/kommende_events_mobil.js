    document.addEventListener("DOMContentLoaded", getJson);


    let allEvents;

    let eventTarget = document.querySelector(".event_template");
    let eventOutPut = document.querySelector(".event_kalender");


    //henter json fil fra WP url


    async function getJson() {

        let jsonObject = await fetch("https://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/event");
        allEvents = await jsonObject.json();


            eventOutPut.textContent = "";


        visEvents();




    }




    function visEvents() {


        allEvents.forEach(event => {


                let klon = eventTarget.cloneNode(true).content;

                klon.querySelector(".event_image").src = event.acf.billede.url;
                klon.querySelector(".event_image").alt = event.acf.billede.alt;
                klon.querySelector(".event_image").title = event.acf.billede.title;



                klon.querySelector(".genre").textContent = event.acf.genre;
                klon.querySelector(".venue").textContent = event.acf.venue;
                klon.querySelector(".pris").textContent = "Pris" + " " + event.acf.pris + "kr.";
                klon.querySelector(".event_navn").textContent = event.acf.event_navn;


                klon.querySelector(".dag").textContent = event.acf.dato_dag;
                klon.querySelector(".maaned").textContent = event.acf.dato_maaned;
                klon.querySelector(".tid").textContent = "kl." + event.acf.tidspunkt;


//                klon.querySelector(".grey_bg").addEventListener("click", () =>{
//                   visModal(event);
//               })

                eventOutPut.appendChild(klon);
        })

    }

//
//function visModal(event){
//    console.log("vis modal");
//
//    modal.classList.remove("skjul_modal");
//    modal.querySelector(".luk span").style.display = "block";
//
//    modal.classList.add("vis_modal");
//
//
////    modal.classList.add("vis");
//
//    modal.querySelector(".modal_title").textContent = event.acf.event_navn;
//    modal.querySelector(".modal_genre").textContent = event.acf.genre;
//    modal.querySelector(".modal_venue").textContent = event.acf.venue;
//
//
//    //bilelde + meta
//    modal.querySelector(".modal_image_com img").src = event.acf.billede.url;
//    modal.querySelector(".modal_image_com img").alt = event.acf.billede.alt;
//    modal.querySelector(".modal_image_com img").title = event.acf.billede.title;
//
//    //tidspunkt
//    modal.querySelector(".modal_dag").textContent = event.acf.dato_dag;
//    modal.querySelector(".modal_maaned").textContent = event.acf.dato_maaned;
//    modal.querySelector(".modal_tid").textContent = "kl." + event.acf.tidspunkt;
//
//    //pris
//    modal.querySelector(".modal_pris").textContent = "Pris" + " " + event.acf.pris + "kr.";
//
//    //beskrivelse
//    modal.querySelector(".modal_langbeskrivelse").innerHTML = event.content.rendered;
//
//
//
//
//    modal.querySelector(".luk").addEventListener("click", skjulModal);
//
//
//}

//
//function skjulModal(retter){
//     modal.classList.remove("vis_modal");
//
//    modal.classList.add("skjul_modal");
//
//    console.log("remove vis")
//
//    modal.querySelector(".luk span").style.display = "none";
//}

