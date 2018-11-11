    document.addEventListener("DOMContentLoaded", getJson);


    let allEvents;

    let eventTarget = document.querySelector(".event_template");
    let eventOutPut = document.querySelector(".event_kalender");

    let modal = document.querySelector(".modal_wrapper");


    let eventGenre = "alle";
    let eventVenue = "alle";
    document.querySelector(".genre_text_2").textContent = eventGenre;




    //henter json fil fra WP url


    async function getJson() {

        let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/event/?per_page=100");
        allEvents = await jsonObject.json();

        console.log(allEvents);


        visEvents();



    }


  document.querySelectorAll(".event_vis_alle").forEach(knap => {

        knap.addEventListener("click", resetAlle)
    });



function resetAlle (){

    console.log("reset aæææeæeæe");

      document.querySelectorAll(".event_venue").forEach(venue => {

      venue.classList.remove("when_clicked");
     venue.parentElement.style.backgroundColor = "lightgray";

    });

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

        knap.addEventListener("click", filtrering_venue);


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

     if (window.innerWidth >= 1240){
           document.querySelectorAll(".event_venue").forEach(knap => {

        knap.classList.remove("when_clicked");
        knap.parentElement.style.backgroundColor = "lightgray";



    });


        this.classList.add("when_clicked");
        this.parentElement.style.backgroundColor = "black";

     }
        eventOutPut.textContent = "";
        eventVenue = this.getAttribute("data-venue");




        visEvents();


    }


    function visEvents() {
        console.log(eventGenre + eventVenue);


        allEvents.forEach(event => {

        document.querySelector(".genre_text_2").textContent = eventGenre;
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



                if(eventGenre == "alle"){

                document.querySelector(".genre_text_2").textContent = "Alle";

                }else {

                document.querySelector(".genre_text_2").textContent =  eventGenre;

                };

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

                klon.querySelector(".grey_bg").addEventListener("click", () =>{
                   visModal(event);
               })


                eventOutPut.appendChild(klon);




            };

        });

    }


function visModal(event){
    console.log("vis modal");

    modal.classList.remove("skjul_modal");
    modal.querySelector(".luk span").style.display = "block";
    modal.classList.add("vis_modal");


//    modal.classList.add("vis");

    modal.querySelector(".modal_title").textContent = event.acf.event_navn;
    modal.querySelector(".modal_genre").textContent = event.acf.genre;
    modal.querySelector(".modal_venue").textContent = event.acf.venue;


    //bilelde + meta
    modal.querySelector(".modal_image_com img").src = event.acf.billede.url;
    modal.querySelector(".modal_image_com img").alt = event.acf.billede.alt;
    modal.querySelector(".modal_image_com img").title = event.acf.billede.title;

    //tidspunkt
    modal.querySelector(".modal_dag").textContent = event.acf.dato_dag;
    modal.querySelector(".modal_maaned").textContent = event.acf.dato_maaned;
    modal.querySelector(".modal_tid").textContent = "kl." + event.acf.tidspunkt;

    //pris
    modal.querySelector(".modal_pris").textContent = "Pris" + " " + event.acf.pris + "kr.";

    //beskrivelse
    modal.querySelector(".modal_langbeskrivelse").innerHTML = event.content.rendered;




    modal.querySelector(".luk").addEventListener("click", skjulModal);


}


function skjulModal(retter){
     modal.classList.remove("vis_modal");

    modal.classList.add("skjul_modal");

    console.log("remove vis")

}

