let fleteGjithsej = 157;
let fletePerStudent = 6;

let grupet = parseInt(fleteGjithsej / fletePerStudent);

let mbetja = fleteGjithsej % fletePerStudent;

let kontrolli = (grupet * fletePerStudent) + mbetja;

console.log("Fletët gjithsej: " + fleteGjithsej);
console.log("Grupet e plota: " + grupet);
console.log("Fletët e mbetura: " + mbetja);
console.log("Kontrolli: " + kontrolli);
