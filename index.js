const buttons = document.querySelectorAll("button");

const playSound = (key) => {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();

      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();

      break;
    case "s":
      new Audio("sounds/snare.mp3").play();

      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();

      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();

      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();

      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();

      break;

    default:
      console.log("wrong key");
      break;
  }
};
const animation = (key) => {
  const animation = document.querySelector("." + key);
  console.log(animation);
  animation.classList.add("animation");
  setTimeout(() => {
    animation.classList.remove("animation");
  }, 100);
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    var buttonInnerText = buttons[i].textContent;
    console.log(buttonInnerText);
    playSound(buttonInnerText);
    animation(buttonInnerText);
  });
}
document.addEventListener("keypress", (event) => {
  playSound(event.key);
  animation(event.key);
});
