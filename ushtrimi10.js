let pjesemarres = 45;
let pagesa = 12;
let salla = 180;
let materialet = 95;
let reklama = 60;

let teArdhurat = pjesemarres * pagesa;
let shpenzimet = salla + materialet + reklama;
let diferenca = teArdhurat - shpenzimet;

console.log("===== RAPORTI FINANCIAR =====");
console.log("Të ardhurat: " + teArdhurat + " €");
console.log("Shpenzimet totale: " + shpenzimet + " €");
console.log("Diferenca fillestare: " + diferenca + " €");

shpenzimet += 25;

diferenca = teArdhurat - shpenzimet;

console.log("-----------------------------");
console.log("Shpenzimet e paparashikuara: 25 €");
console.log("Shpenzimet e reja totale: " + shpenzimet + " €");
console.log("Diferenca e re: " + diferenca + " €");
console.log("=============================");
