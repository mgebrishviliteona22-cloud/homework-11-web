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
