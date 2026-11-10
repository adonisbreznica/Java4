const vlera1 = "25";
const vlera2 = "17";
const vlera3 = "8";

let rezultatiTekst = vlera1 + vlera2 + vlera3;

console.log("Mbledhja pa konvertim: " + rezultatiTekst);

let numri1 = Number(vlera1);
let numri2 = Number(vlera2);
let numri3 = Number(vlera3);

let shuma = numri1 + numri2 + numri3;

let mesatarja = shuma / 3;

console.log("Shuma: " + shuma);
console.log("Mesatarja: " + mesatarja);
console.log("Tipi i shumës: " + typeof shuma);
console.log("Tipi i mesatares: " + typeof mesatarja);
console.log("Tipi i rezultatit tekst: " + typeof rezultatiTekst);
