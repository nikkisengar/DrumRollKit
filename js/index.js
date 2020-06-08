// function keyPressOrBtnClick(event) {
// //   var keyPress = event.which || event.keyCode;
// //   if (keyPress == 87) {
//     document.querySelector('.w').addEventListener('keydown', function () {
//       new Audio('../sounds/tom-1.mp3').play();
//     });
//   } else {
//     document.querySelector('.w').addEventListener('click', function () {
//       new Audio('../sounds/tom-1.mp3').play();
//     });
//   }
// //   document.querySelector('.a').addEventListener('keydown', function () {
//     new Audio('../sounds/tom-2.mp3').play();
//   });
// //   document.querySelector('.s').addEventListener('keydown', function () {
//     new Audio('../sounds/tom-3.mp3').play();
//   });
// //   document.querySelector('.d').addEventListener('keydown', function () {
//     new Audio('../sounds/tom-4.mp3').play();
//   });
// //   document.querySelector('.j').addEventListener('keydown', function  () {
//     new Audio('../sounds/snare.mp3').play();
//   });
// //   document.querySelector('.k').addEventListener('keydown', function () {
//     new Audio('../sounds/crash.mp3').play();
//   });
// //   document.querySelector('.l').addEventListener('keydown', function () {
//     new Audio('../sounds/kick-bass.mp3').play();
//   });
// }

// Taking number of buttons
var noOfDrumButtons = document.querySelectorAll('.drum').length;

// onClick button make sound option
for (var i = 0; i < noOfDrumButtons; i++)
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    this.style.color = 'white';
    var btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
  });

// OnKeyPress make sound option
document.addEventListener('keypress', function () {
    makeSound(event.key);
  });

// makeSound() function which detect the key press or
// the button click and then play sound
function makeSound(key) {

  switch (key) {
    case 'w':
      new Audio('sounds/tom-1.mp3').play();
      break;
    case 'a':
      new Audio('sounds/tom-2.mp3').play();
      break;
    case 's':
      new Audio('sounds/tom-3.mp3').play();
      break;
    case 'd':
      new Audio('sounds/tom-4.mp3').play();
      break;
    case 'j':
      new Audio('sounds/snare.mp3').play();
      break;
    case 'k':
      new Audio('sounds/crash.mp3').play();
      break;
    case 'l':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    default: console.log(key);

  }
}

// document.querySelector('.set').addEventListener('keyup', function (event) {
//   if (event.keyCode == 87)
//     new Audio('../sounds/tom-1.mp3').play();
//   else if (event.keyCode == 65)
//     new Audio('../sounds/tom-2.mp3').play();
//   else if (event.keyCode == 83)
//     new Audio('../sounds/tom-3.mp3').play();
//   else if (event.keyCode == 68)
//     new Audio('../sounds/tom-4.mp3').play();
//   else if (event.keyCode == 74)
//     new Audio('../sounds/snare.mp3').play();
//   else if (event.keyCode == 75)
//     new Audio('../sounds/crash.mp3').play();
//   else if (event.keyCode == 76)
//     new Audio('../sounds/kick-bass.mp3').play();
// });
