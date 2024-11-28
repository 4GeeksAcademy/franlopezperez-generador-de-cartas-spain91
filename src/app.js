window.onload = function() {
  const symbols = ["♦", "♥", "♠", "♣"];
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  function createCard() {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.querySelector(".top-left").textContent = randomSymbol;
    document.querySelector(".body").textContent = randomNumber;
    document.querySelector(".bottom-right").textContent = randomSymbol;

    const card = document.querySelector(".card");
    if (randomSymbol === "♥" || randomSymbol === "♦") {
      card.classList.remove("text-dark");
      card.classList.add("text-danger");
    } else {
      card.classList.remove("text-danger");
      card.classList.add("text-dark");
    }
  }

  createCard();

  document.getElementById("generate").addEventListener("click", createCard);
};
