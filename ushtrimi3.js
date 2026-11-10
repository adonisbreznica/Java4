const akomodimi = 96;
const transporti = 42;
const ushqimi = 57;
const numriPersonave = 3;
const buxheti = 80;

let totali = akomodimi + transporti + ushqimi;

let pjesaPerPerson = totali / numriPersonave;

let mbetja = buxheti - pjesaPerPerson;

console.log("Kostoja totale është " + totali + " €.");
console.log("Secili person duhet të paguajë " + pjesaPerPerson.toFixed(2) + " €.");
console.log("Secilit person i mbeten " + mbetja.toFixed(2) + " € nga buxheti.");
