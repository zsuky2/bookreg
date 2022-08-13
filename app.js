var title = document.getElementById("title");
var author = document.getElementById("author");
var number = document.getElementById("number");
var table = document.querySelector("table");
var form = document.querySelector("form");

//1. lépés: Készítsünk egy submit eseményt a formra, melynek hatására bele tudjuk rakni a könyv adatait a táblázatunkba:

form.addEventListener("submit", function (e) {

    //megakadályozzuk,. hogy az adatok elküldése után frissüljön az oldal
    e.preventDefault()

    //Lefuttatjuk a függvényünket, amely hozzáadja a táblázathoz a könyv adatait
    addBook();
})


//2. lépés: csináljuk meg az addBook függvényt
function addBook() {

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerText = title.value;
    td2.innerText = author.value;
    td3.innerText = number.value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);

    title.value = "";
    author.value = "";
    number.value = "";

}