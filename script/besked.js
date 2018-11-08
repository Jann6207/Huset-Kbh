let svartekst = "";

document.querySelector("form").addEventListener("submit", ajaxCall);

async function ajaxCall(e) {
    e.preventDefault();
    let navn = this.querySelector("input[type=text]").value;
    let url = "besked.php?navn=" + navn;
    let svar = await fetch(url);
    svartekst = await svar.text();
    show();
    this.querySelector("input[type=text]").value = "";
}
    function show(response) {
        document.querySelector("#response").textContent = svartekst;
    }



