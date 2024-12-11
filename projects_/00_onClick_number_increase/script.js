const button = document.getElementById('button');
const countDisplay = document.getElementById('counter-display')
let cookieCounter = 0 

button.addEventListener("click", increaseCount);

function increaseCount() {
    cookieCounter++;
    countDisplay.innerHTML = cookieCounter
}
