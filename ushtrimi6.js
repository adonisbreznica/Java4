const eHena = 95;
const eMartja = 80;
const eMerkura = 115;
let totalMinuta = eHena + eMartja + eMerkura;
let ore = totalMinuta / 60;

let minutaMbetura = totalMinuta % 60;

console.log("Minutat gjithsej: " + totalMinuta);
console.log("Koha në orë: " + ore);
console.log("Minutat e mbetura: " + minutaMbetura);
