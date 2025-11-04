// Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

let age = 19;
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

let mark = 20;
if (mark >= 90) {
  console.log("A Grade");
} else if (mark >= 75) {
  console.log("B Grade");
} else if (mark >= 50) {
  console.log("C Grade");
} else {
  console.log("Fail");
}

// Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

let city = "    ";

if (city.toLocaleLowerCase() === "bhopal") {
  console.log("MP");
} else if (city.toLocaleLowerCase() === "delhi") {
  console.log("Capital");
} else if (city.trim() === "") {
  console.log("You entered nothing");
} else {
  console.log("Unknown City");
}

// Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

let score = 40;

let res = score > 35 ? "Pass" : "Fail";
console.log(res);

// Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

let temperature = 30;

let isHot = temperature > 30 ? "Hot" : "Pleasant";
console.log(isHot);

// Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

let day = 5;

switch (day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default:
    console.log("Type something wrong");
}

// Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let myAge = 21;
let country = "India";

if (age > 18 && country.toLocaleLowerCase() === "india") {
  console.log("You are eligible for vote");
} else {
  console.log("Not Eligible");
}
