/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Bruno Siqueira de Paulo";

let currentYear = new Date().getFullYear();

let profilePicture = "images/me.png";

let favoriteFoods = [
  "apple",
  "banana",
  "orange",
  "strawberry",
  "grape",
  "watermelon",
  "kiwi",
  "mango",
  "pineapple",
  "blueberry",
];

let newFood = "Lemon";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelectorAll("img")[2];

console.log(imageElement);

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

foodElement.innerHTML = `<br>${favoriteFoods}`;

favoriteFoods.push(newFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;
