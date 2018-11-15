document.addEventListener("DOMContentLoaded", function () {
    runProgram();
});

async function runProgram() {


    // 1. Load svg map


    let mySvg = await fetch("svg/findyourway_2.svg");
    let svg = await mySvg.text();

    document.querySelector(".find_vej_svg").innerHTML = svg;


    // 2. find etager og skuld dem

    let etage_1 = document.querySelector("#_x31_ polygon");
    let etage_2 = document.querySelector("#_x32_ polygon");
    let etage_3 = document.querySelector("#_x33_ polygon");
    let etage_4 = document.querySelector("#_x34_ polygon");
    let etage_5 = document.querySelector("#_x35_ polygon");
    let etage_6 = document.querySelector("#_x36_ polygon");
    let etage_7 = document.querySelector("#_x37_ polygon");
    let etage_8 = document.querySelector("#_x38_ polygon");
    let etage_9 = document.querySelector("#_x39_ polygon");

    etage_1.addEventListener("click", set_color_1);
    etage_2.addEventListener("click", set_color_2);
    etage_3.addEventListener("click", set_color_3);
    etage_4.addEventListener("click", set_color_4);
    etage_5.addEventListener("click", set_color_5);
    etage_6.addEventListener("click", set_color_6);
    etage_7.addEventListener("click", set_color_7);
    etage_8.addEventListener("click", set_color_8);
    etage_9.addEventListener("click", set_color_9);

}

function set_color_1(){

    console.log("hej");
    document.querySelector("#_x31_ polygon").setAttribute("fill","#123456");


    setTimeout(function() { location_1(); }, 200);


}

function location_1(){

    window.location = "balsalen.html";

};

function set_color_2(){

    console.log("hej");
    document.querySelector("#_x32_ polygon").setAttribute("fill","#123456");

    setTimeout(function() { location_2(); }, 200);

}

function location_2(){

    window.location = "salon_k.html";

};

function set_color_3(){

    console.log("hej");
    document.querySelector("#_x33_ polygon").setAttribute("fill","#123456");

    setTimeout(function() { location_3(); }, 200);

}

function location_3(){

    window.location = "stardust.html";

};

function set_color_4(){

    console.log("hej");
    document.querySelector("#_x34_ polygon").setAttribute("fill","#123456");

    setTimeout(function() { location_4(); }, 200);

}

function location_4(){

    window.location = "xenon_vox.html";

};


function set_color_5(){

    console.log("hej");
    document.querySelector("#_x35_ polygon").setAttribute("fill","#123456");

    setTimeout(function() { location_5(); }, 200);

}

function location_5(){

    window.location = "evoo_street_kitchen.html";

};

function set_color_6(){

    console.log("hej");
    document.querySelector("#_x36_ polygon").setAttribute("fill","#123456");

    setTimeout(function() { location_6(); }, 200);

}

function location_6(){

    window.location = "bib_bib_bar.html";

};

function set_color_7(){

    console.log("hej");
    document.querySelector("#_x37_ polygon").setAttribute("fill","#123456");

    setTimeout(function() { location_7(); }, 200);

}

function location_7(){

    window.location = "musikcafeen.html";

};

function set_color_8(){

    console.log("hej");
    document.querySelector("#_x38_ polygon").setAttribute("fill","#123456");

    setTimeout(function() { location_8(); }, 200);

}

function location_8(){

    window.location = "husets_biograf.html";

};

function set_color_9(){

    console.log("hej");
    document.querySelector("#_x39_ polygon").setAttribute("fill","#123456");

    setTimeout(function() { location_9(); }, 200);

}

function location_9(){

    window.location = "bastard_cafe.html";

};
