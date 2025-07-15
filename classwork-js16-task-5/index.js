const form = document.querySelector("form");

function getCategorie() {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
  const select = document.querySelector("#dropdown");

  const newOption = document.createElement("option");
  select.append(newOption);
}
getCategorie();
