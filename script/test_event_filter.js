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
document.querySelectorAll(".event_item").forEach( knap =>{
    knap.addEventListener("click", filtrering)
});


// Denne funktion henter data-værdien, kategori på button med class menu
// Dette giver variablen retFilter

function filtrering(){
     console.log("filter");
    eventOutPut.textContent = "";
    eventFilter=this.getAttribute("data-kategori");
    visEvents();


}


    function visEvents() {
        console.log("Vis Events Aktiveret");


        allEvents.forEach(event => {

            console.log("test");


            if(event.acf.genre==eventFilter){udSkrivEvent();}

             else if(event.acf.tema==eventFilter){udSkrivEvent();}

            else if(event.acf.venue==eventFilter){udSkrivEvent();}




            else if (eventFilter=="alle"){udSkrivEvent();};




            function udSkrivEvent(){

                console.log(eventFilter);

                let klon = eventTarget.cloneNode(true).content;

            klon.querySelector(".event_image").src = event.acf.billede.url;
            klon.querySelector(".genre").textContent = event.acf.genre;
            klon.querySelector(".venue").textContent = event.acf.venue;
            klon.querySelector(".tema").textContent = event.acf.tema;

                                    console.log("event printet");


            eventOutPut.appendChild(klon);



            };

        });


    }


