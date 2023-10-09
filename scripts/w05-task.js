/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
var templeList = [];

/* async displayTemples Function */

const displayTemples = async (temples) => {
  temples.map((temple) => {
    let articleElement = document.createElement("article");

    let h3Element = document.createElement("h3");
    h3Element.textContent = temple.templeName;

    let imageElement = document.createElement("img");
    imageElement.src = temple.imageUrl;
    imageElement.alt = temple.location;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imageElement);
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templeList = await response.json();
  displayTemples(templeList);
  console.log(templeList);
};

/* reset Function */

function reset() {
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
}

/* sortBy Function */

function sortBy(temples) {
  reset();
  console.log("entrei");
  let filter = document.getElementById("sortBy");
  console.log({ message: "aqui", filter: filter.value });
  switch (filter.value) {
    case "utah":
      let utah = temples.filter(function (temple) {
        return temple.location.toLocaleLowerCase().includes("utah");
      });
      displayTemples(utah);
      break;
    case "notutah":
      let notutah = temples.filter(function (temple) {
        return !temple.location.toLocaleLowerCase().includes("utah");
      });
      displayTemples(notutah);
      break;
    case "older":
      console.log("c");
      let older = temples.filter(function (temple) {
        return new Date(temple.dedicated) < new Date(1950, 0, 1);
      });
      displayTemples(older);
      break;
    case "all":
      console.log("d");
      displayTemples(temples);
    default:
      displayTemples(temples);
  }
}

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});
