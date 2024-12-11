const clock = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function() {
    let date = new Date()
    // console.log(date.toLocaleTimeString());    // in this syntax it will show the time in inspet browser
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)