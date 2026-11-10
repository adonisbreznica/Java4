let cmimi1 = "19.90";
let cmimi2 = "8.50";
let sasia1 = 2;
let sasia2 = 3;

cmimi1 = Number(cmimi1);
cmimi2 = Number(cmimi2);

let totali1 = cmimi1 * sasia1;
let totali2 = cmimi2 * sasia2;

let shumaPorosise = totali1 + totali2;

let tarifa = shumaPorosise * 10 / 100;
let shumaFinale = shumaPorosise + tarifa;

let rezultati = shumaFinale.toFixed(2);

console.log("Artikulli 1: " + totali1.toFixed(2) + " €");
console.log("Artikulli 2: " + totali2.toFixed(2) + " €");
console.log("Shuma e porosisë: " + shumaPorosise.toFixed(2) + " €");
console.log("Tarifa 10%: " + tarifa.toFixed(2) + " €");
console.log("Shuma finale: " + rezultati + " €");
console.log("Tipi i rezultatit: " + typeof rezultati);
