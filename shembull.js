const cmimiLibrit = 12.50;
const cmimiFletores = 1.80;
const sasiaLibrave = 3;
const sasiaFletoreve = 4;

let kostoLibrave = cmimiLibrit * sasiaLibrave;
let kostoFletoreve = cmimiFletores * sasiaFletoreve;

let totali = kostoLibrave + kostoFletoreve;

totali += 2.50;

console.log("===== FATURA =====");
console.log("Librat: 3 x 12.50 € = " + kostoLibrave + " €");
console.log("Fletoret: 4 x 1.80 € = " + kostoFletoreve + " €");
console.log("Transporti: 2.50 €");
console.log("------------------");
console.log("Totali: " + totali.toFixed(2) + " €");
