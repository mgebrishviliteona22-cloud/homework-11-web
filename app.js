let birthYear = 1995;
let currentYear = 2026;
let age = currentYear - birthYear;

console.log(age);

if (typeof age !== "number" || isNaN(age)) {
    console.log("მითითებული ასაკი არასწორია!");
} else if (age < 18) {
    console.log("თქვენ არ შეგიძლიათ მართვის მოწმობის აღება");
} else {
    console.log("თქვენ შეგიძლიათ მართვის მოწმობის აღება");
}

let temperature = 25;

if (temperature < 0) {
    console.log("ყინავს!");
} else if (temperature >= 0 && temperature <= 10) {
    console.log("ძალიან ცივა");
} else if (temperature >= 11 && temperature <= 20) {
    console.log("ცივა");
} else if (temperature >= 21 && temperature <= 30) {
    console.log("თბილა");
} else if (temperature > 30) {
    console.log("ცხელა!");
}
