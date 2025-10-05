/*document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    alert("I got clicked");
  });
});*/

var numberOfDrumButtons = document.querySelectorAll("button.drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document
    .querySelectorAll("button.drum")
    [i].addEventListener("click", function () {
      var keyLetter = this.innerHTML;
      playSound(keyLetter);
      buttonAnimation(keyLetter);
    });
}

// keyBoard wird aktiviert
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log(innerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
