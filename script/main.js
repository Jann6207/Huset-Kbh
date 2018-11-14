document.addEventListener("DOMContentLoaded", getJson);


var slideIndex = 0;



function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 15000); // Change image every 2 seconds

}

    let page;

    //henter json fil fra WP url
    async function getJson() {

        let jsonObject = await fetch("http://jakobfalkenberg.dk/kea/2sem/tema7/huset/wordpress/wp-json/wp/v2/news_slide");
        page = await jsonObject.json();

        showSlides();
        postOutput();
    }

    function postOutput() {



    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------NEWS SLIDER TOP-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        //----------------------POST 395
        let post395 = page.find(x => x.id == '395');
        //indsæt header info
        document.querySelector(".slide_text_1").innerHTML = post395.content.rendered;

        document.querySelector(".slide_header_1").textContent = post395.acf.header;

        document.querySelector(".tagline_1").textContent = post395.acf.tag_line;

        document.querySelector(".slide_image_1").src = post395.acf.billede.url;


        //---------------------------------------------------


        //----------------------POST 393

        let post393 = page.find(x => x.id == '393');
        //indsæt header info
        document.querySelector(".slide_text_2").innerHTML = post393.content.rendered;

        document.querySelector(".slide_header_2").textContent = post393.acf.header;

        document.querySelector(".tagline_2").textContent = post393.acf.tag_line;

        document.querySelector(".slide_image_2").src = post393.acf.billede.url;

        //---------------------------------------------------



        //----------------------POST 392

        let post392 = page.find(x => x.id == '392');
        //indsæt header info
        document.querySelector(".slide_text_3").innerHTML = post392.content.rendered;

        document.querySelector(".slide_header_3").textContent = post392.acf.header;

        document.querySelector(".tagline_3").textContent = post392.acf.tag_line;

        document.querySelector(".slide_image_3").src = post392.acf.billede.url;

        //---------------------------------------------------

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Events PROMOTION KOMMENDE EVENTS 412-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                let post412 = page.find(x => x.id == '412');
        //indsæt header info
        document.querySelector(".kommende_events_text").innerHTML = post412.content.rendered;

        document.querySelector(".kommende_events_header").textContent = post412.acf.header;

        document.querySelector(".kommende_events_tagline").textContent = post412.acf.tag_line;



  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------FRIVILLIGT ARBEJDE FORSIDE PROMOTION 408-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


          let post408 = page.find(x => x.id == '408');
        //indsæt header info
        document.querySelector(".f_a_text").innerHTML = post408.content.rendered;

        document.querySelector(".f_a_header").textContent = post408.acf.header;

        document.querySelector(".f_a_tagline").textContent = post408.acf.tag_line;

        document.querySelector(".f_a_video").innerHTML = post408.acf.video;







  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


         console.log("bklåååå")

    }





