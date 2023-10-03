const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const mainLeft = document.querySelector(".main-left"),
  nameSpan = document.querySelector(".name");

mainLeft.onmouseenter = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    nameSpan.innerText = nameSpan.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return nameSpan.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= nameSpan.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}