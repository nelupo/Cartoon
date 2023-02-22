let character = document.querySelector(".characterIMG");
let text = document.querySelector(".character")
console.log(character);
let answer = prompt("What is your favourite character?");
if (answer == "minions" || answer == "Minions") {
  text.innerHTML = "Minions";
  character.src = "./GIFs/minions.gif";
} else if (answer == "boss baby") {
  text.innerHTML = "Boss Baby";
  character.src = "./GIFs/bossbaby.gif";
} else if (answer == "incredibles") {
  text.innerHTML = "Incredibles";
  character.src = "./GIFs/incredibles.gif";
} else if (answer == "dracula") {
  text.innerHTML = "Dracula";
  character.src = "./GIFs/hoteltransylvania.gif";
} else if (answer == "kung fu panda") {
  text.innerHTML = "Kung Fu Panda";
  character.src = "./GIFs/panda.gif";
} else {
  alert("Goodbye :)");
}
