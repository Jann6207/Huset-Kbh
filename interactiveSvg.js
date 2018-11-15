document.addEventListener("DOMContentLoaded", function () {
    runProgram();
});

async function runProgram() {

    // 1. Load svg map


    let mySvg = await fetch("findyourway.svg");
    let svg = await mySvg.text();

    document.querySelector("#find_vej").innerHTML = svg;


    // 2. find etager og skuld dem

    let etage_1 = document.querySelector
