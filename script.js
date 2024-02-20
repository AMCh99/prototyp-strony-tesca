window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

function imgFunction(){
    alert("Nie klikaj w to bo to jeszcze nie działa!!!\n\nJa jednak szanuje mortadelke, lubię ją, nie znam lepszej wedliny do usmażenia niż mortadela. Smażysz ją i potem keczap, #!$%@? najlepsze jedzenie na świecie dla mnie. Ja nazywałem to zawsze kiełbasa chrupiąca nie? Zawsze było mamo mamo zrób mi chrupiąca no nie? To jest najlepsze jedzenie w życiu albo ewentualnie taką kiełbasę tą chudą kupujesz te pętka, kroisz na plasterki i z cebulką na patelce podsmażasz i na kanapki i tak samo przepyszne kiełbasa z cebulą.")
}