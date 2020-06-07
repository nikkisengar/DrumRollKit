
document.querySelector('.w').addEventListener('keydown', function (event) {
  if (event.keyCode == 87) {
    // event.preventDefault();
    new Audio('../sounds/tom-1.mp3').play();
  }
});

document.querySelector('.a').addEventListener('keyup', function (event) {
  if (event.keyCode == 65)
    new Audio('../sounds/tom-2.mp3').play();
});

document.querySelector('.s').addEventListener('keyup', function (event) {
  if (event.keyCode == 83)
    new Audio('../sounds/tom-3.mp3').play();
});

document.querySelector('.d').addEventListener('keyup', function (event) {
  if (event.keyCode == 68)
    new Audio('../sounds/tom-4.mp3').play();
});

document.querySelector('.j').addEventListener('keyup', function (event) {
  if (event.keyCode == 74)
    new Audio('../sounds/snare.mp3').play();
});

document.querySelector('.k').addEventListener('keyup', function (event) {
  if (event.keyCode == 75)
    new Audio('../sounds/crash.mp3').play();
});

document.querySelector('.l').addEventListener('keyup', function (event) {
  if (event.keyCode == 76)
    new Audio('../sounds/kick-bass.mp3').play();
});
