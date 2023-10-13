/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
  name: "Bruno Siquieira",
  photo: "images/me.png",
  favoriteFoods: [
    "apple",
    "banana",
    "orange",
    "strawberry",
    "grape",
    "watermelon",
    "mango",
  ],
  hobbies: [
    "Reading",
    "Painting",
    "Gardening",
    "Cooking",
    "Hiking",
    "Photography",
    "Singing",
    "Dancing",
    "Yoga",
  ],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: "São Paulo, SP",
    length: "1 year",
  },
  {
    place: "São José dos Campos, SP",
    length: "21 year",
  },
  {
    place: "Chapecó, SC",
    length: "1 year",
  },
  {
    place: "Florianópolis, SC",
    length: "1 year",
  },
);
/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;
/* Name */

/* Photo with attributes */
const imageElement = document.querySelectorAll("img")[2];
imageElement.setAttribute("src", myProfile.photo);
// imageElement.setAttribute("alt", `Profile image of ${myProfile.name}`);
/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach((hobbie) => {
  let li = document.createElement("li");
  li.textContent = hobbie;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((place) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;
  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});