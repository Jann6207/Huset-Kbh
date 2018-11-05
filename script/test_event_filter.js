    document.addEventListener("DOMContentLoaded", getJson);


    let allEvents;

    let eventTarget = document.querySelector(".event_template");
    let eventOutPut = document.querySelector(".event_kalender");

    eventFilter = "alle";


    //henter json fil fra WP url


    async function getJson() {

        let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/event");
        allEvents = await jsonObject.json();

        console.log(allEvents);

        visEvents();


    }

    //Her laver vi eventlisteneres på alle buttons, som så kalder funktionen filtrering ved click.
    document.querySelectorAll(".event_item").forEach(knap => {
        knap.addEventListener("click", filtrering)
    });


    // Denne funktion henter data-værdien, kategori på button med class menu
    // Dette giver variablen retFilter

    function filtrering() {

        console.log("filter");
        document.querySelector(".genre_block").classList.remove("show");
        eventOutPut.textContent = "";
        eventFilter = this.getAttribute("data-kategori");
        visEvents();


    }


    function visEvents() {
        console.log("Vis Events Aktiveret");


        allEvents.forEach(event => {

            console.log("test");


            if (event.acf.genre == eventFilter) {


                udSkrivEvent();
            } else if (eventFilter == "alle") {

                console.log("HEJ JEG HEDEDER BRIEAAN");
                udSkrivEvent();
            }

            else if (event.acf.venue == eventFilter) {

                udSkrivEvent();
            }



            function udSkrivEvent() {

                console.log(eventFilter);

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
