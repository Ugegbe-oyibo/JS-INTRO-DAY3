let button = document.getElementById('button');
 
let display = document.getElementById('display');
 
let gameNum = Math.floor(Math.random() * 100);
 
button.addEventListener('click' , function() {
   let game = document.getElementById ('game').value;
   if (game > gameNum) {
    display.innerHTML = `Too high, take another shot at it`
   }else if (game < gameNum) {
    display.innerHTML = `Too low, take another guess`
   }else if(game == gameNum) {
    display.innerHTML = `Welldone! Correct!!`
   } else {
    display.innerHTML = `error`
   }
})