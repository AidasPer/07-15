class Joke {
  constructor(value, url, updated_at) {
    this.value = value;
    TouchList.url = url;
    this.updated_at = updated_at;
  }
  createJokeCard() {
    let regex = /[^a-z]/gi;
    textLength += this.value.replace(regex, "").length;
    count++;
    renderJokesData(count, textLength);
    const jokeCard = document.createElement("div");
    jokeCard.classList.add("jokeCard");
    const img = document.createElement("img");
    img.src = "chuck-norris.png";
    const p1 = document.createElement("p");
    p1.textContent = `Updated @ ${this.updated_at}`;
    const p2 = document.createElement("p");
    p2.textContent = `${this.value}`;
    const a = document.createElement("a");
    a.href = `${this.url}`;
    a.textContent = `Link to joke`;
    a.setAttribute("target", "_blank");
    const button1 = document.createElement("button");
    button1.classList.add("btn");
    button1.textContent = "random card color";
    button1.addEventListener(
      "click",
      () => (jokeCard.style.background = generateGrad())
    );
    const button2 = document.createElement("button");
    button2.textContent = "close";
    button2.classList.add("btn");
    button2.addEventListener("click", () => {
      count--;
      textLength -= this.value.replace(regex, "").length;
      renderJokesData(count, textLength);
      jokeCard.remove();
    });
    jokeCard.append(img, p1, a, p2, button1, button2);
    return jokeCard;
  }
}

const jokesContainer = document.querySelector("#jokeZone");
const jokesCount = document.querySelector(".jokesCount");
const jokesLength = document.querySelector(".jokesLength");

let textLength = 0;
let count = 0;
document.querySelector("#add__jokes").addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random/")
    .then((response) => response.json())
    .then((data) => {
      const { value, url, updated_at } = data;
      const joke = new Joke(value, url, updated_at);
      let jokeCard = joke.createJokeCard();
      jokesContainer.append(jokeCard);
    })
    .catch((error) => console.log(error));
});

document.querySelector("#clear__jokes").addEventListener("click", () => {
  location.reload();
});

const renderJokesData = (count, textLength) => {
  if (count !== 0 && textLength !== 0) {
    jokesCount.textContent = `Jokes in page: ${count}`;
    jokesLength.textContent = `Total letters in jokes: ${textLength}`;
  } else {
    jokesCount.textContent = `Jokes in page:`;
    jokesLength.textContent = `Total letters in jokes: `;
  }
};

let randomColor = () => {
  let hexString = "0123456789abcdef";
  let hexCode = "#";
  for (i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
};

let generateGrad = () => {
  let colorOne = randomColor();
  let colorTwo = randomColor();
  let colorThree = randomColor();
  let color4 = randomColor();
  return `linear-gradient(135deg, ${colorOne}, ${colorTwo}, ${colorThree}, ${color4})`;
};
