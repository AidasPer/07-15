const form = document.querySelector("form");
const select = document.querySelector("#dropdown");

fetch("https://api.chucknorris.io/jokes/categories")
  .then((responce) => responce.json())
  .then((data) => {
    getCategorie(data);
  })
  .catch((error) => console.error("Error fetching data:", error));

function getCategorie() {
  const newOption = document.createElement("option");
  newOption.textContent = "new";
  select.append(newOption);
  console.log(select);
}
getCategorie();
