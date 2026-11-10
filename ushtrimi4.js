const cmimiProduktit1 = 35;
const sasiaProduktit1 = 2;
const cmimiProduktit2 = 24;
const sasiaProduktit2 = 1;
const zbritjaPerqindje = 15;
const transporti = 4;

let cmimiParaZbritjes = (cmimiProduktit1 * sasiaProduktit1) +
                        (cmimiProduktit2 * sasiaProduktit2);

let shumaZbritjes = cmimiParaZbritjes * zbritjaPerqindje / 100;

let cmimiPasZbritjes = cmimiParaZbritjes - shumaZbritjes;

let totali = cmimiPasZbritjes + transporti;

console.log("Çmimi para zbritjes: " + cmimiParaZbritjes.toFixed(2) + " €");
console.log("Zbritja 15%: " + shumaZbritjes.toFixed(2) + " €");
console.log("Çmimi pas zbritjes: " + cmimiPasZbritjes.toFixed(2) + " €");
console.log("Transporti: " + transporti.toFixed(2) + " €");
console.log("Çmimi përfundimtar: " + totali.toFixed(2) + " €");
