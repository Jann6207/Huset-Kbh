    document.addEventListener("DOMContentLoaded", getJson);


    let allEvents;

    let eventTarget = document.querySelector(".event_template");
    let eventOutPut = document.querySelector(".event_kalender");

    let eventGenre = "alle";
    let eventVenue = "alle";




    //henter json fil fra WP url


    async function getJson() {

        let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/event/?per_page=100");
        allEvents = await jsonObject.json();

        console.log(allEvents);


        visEvents();



    }

    document.querySelector(".event_vis_alle").addEventListener("click", resetAlle);

function resetAlle (){

    eventGenre = "alle";
    eventVenue = "alle";
    eventOutPut.textContent = "";


    visEvents();


}

    //Her laver vi eventlisteneres på alle buttons, som så kalder funktionen filtrering ved click.
//genre
    document.querySelectorAll(".event_genre").forEach(knap => {

        knap.addEventListener("click", filtrering_genre)
    });

//venues
    document.querySelectorAll(".event_venue").forEach(knap => {

        knap.addEventListener("click", filtrering_venue)
    });

    // Denne funktion henter data-værdien, kategori på button med class menu
    // Dette giver variablen retFilter

    function filtrering_genre() {

        console.log("mauuu er" + " " + eventGenre + "-" + eventVenue);


        eventOutPut.textContent = "";
        eventGenre = this.getAttribute("data-genre");

        visEvents();


    }

  function filtrering_venue() {

        console.log("mauuu er" + " " + eventGenre + "-" + eventVenue);


        eventOutPut.textContent = "";
        eventVenue = this.getAttribute("data-venue");

        visEvents();


    }


    function visEvents() {
        console.log(eventGenre + eventVenue);


        allEvents.forEach(event => {

            console.log("test");

if (eventGenre == "alle" && eventVenue == "alle") {

    udSkrivEvent();

    }else if(eventGenre == event.acf.genre && eventVenue == event.acf.venue){

           udSkrivEvent();
             }


        else if(eventGenre == event.acf.genre && eventVenue == "alle"){

        udSkrivEvent();

    }else if(eventVenue == event.acf.venue && eventGenre == "alle"){

                     udSkrivEvent();

             }



//            if (event.acf.genre == eventGenre ) {
//
//
//                udSkrivEvent();
//            } else if (eventFilter == "alle") {
//
//                console.log("HEJ JEG HEDEDER BRIEAAN");
//                udSkrivEvent();
//            }
//
//            else if (event.acf.venue == eventFilter) {
//
//                udSkrivEvent();
//            }



            function udSkrivEvent() {

                console.log(eventGenre + " " + eventVenue);

                let klon = eventTarget.cloneNode(true).content;

                klon.querySelector(".event_image").src = event.acf.billede.url;
                klon.querySelector(".genre").textContent = event.acf.genre;
                klon.querySelector(".venue").textContent = event.acf.venue;
                klon.querySelector(".pris").textContent = "Pris" + " " + event.acf.pris + "kr.";
                klon.querySelector(".event_navn").textContent = event.acf.event_navn;


                klon.querySelector(".dag").textContent = event.acf.dato_dag;
                klon.querySelector(".maaned").textContent = event.acf.dato_maaned;
                klon.querySelector(".tid").textContent = "kl." + event.acf.tidspunkt;






                console.log("event printet");


                eventOutPut.appendChild(klon);




            };

        });

    }
