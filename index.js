// task1;

let age = 19;

if (age >= 0 && age <= 2) {
  console.log("rebyonok");
} else if (age >= 12 && age <= 18) {
  console.log("podrostok");
} else if (age > 18 && age < 60) {
  console.log("vzrosliy");
} else if (age >= 60) {
  console.log("pensioner");
} else {
  console.log("vvedite pravilnoe chislo");
}

// task2;

let chislo = 5;

if (chislo == 0) {
  console.log(")");
} else if (chislo == 1) {
  console.log("!");
} else if (chislo == 2) {
  console.log("@");
} else if (chislo == 3) {
  console.log("#");
} else if (chislo == 4) {
  console.log("$");
} else if (chislo == 5) {
  console.log("%");
} else if (chislo == 6) {
  console.log("^");
} else if (chislo == 7) {
  console.log("&");
} else if (chislo == 8) {
  console.log("*");
} else if (chislo == 9) {
  console.log("(");
} else {
  console.log("vvedite pravilnoye chislo");
}

// task3;

let suji = "116";

if (suji[0] == suji[1] || suji[0] == suji[2] || suji[2] == suji[1]) {
  console.log("yest odinakoviye sifri");
} else {
  console.log("net odinakovix sifr");
}

// task4
let year = 2012;

if (year % 4 == 0 && year % 100 !== 0) {
  console.log("Visokosniy god");
} else {
  console.log("Nevisokosniy god");
}

// task5;

let usd = prompt("Vvedite summu");
let EUR = 10;
let UAN = 20;
let AZN = 35;

let currency = prompt("Vvedite valyutu:EUR,UAN,AZN");

if (currency == "EUR") {
  alert(usd * EUR + "EUR");
} else if (currency == "UAN") {
  alert(usd * UAN + "UAN");
} else if (currency == "AZN") {
  console.log(usd * AZN + "AZN");
} else {
  alert("Viberite odin iz valyut");
}

// task6;

let okrujnost = 60;
let kvadrat = 50;
if (okrujnost < kvadrat) {
  console.log("okrujnost mojet pomestitsya v ukazanniy kvadrat");
} else {
  console.log(" okrujnost Ne mojet pomestitsya v ukazanniy kvadrat");
}

// task7

let firstQ = prompt("Japantree? 1.sakura, 2.yolka, 3.palma");
let secQ = prompt("japanSport? 1.sumo,2.football,3.basketball");
let thirdQ = prompt("japanCar? 1.toyota,2.jiguli,3.merc");
let result = 0;
if (firstQ == "1") {
  result += 2;
}
if (secQ == "1") {
  result += 2;
}
if (thirdQ == "1") {
  result += 2;
}
console.log(result);
