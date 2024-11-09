// let min = document.getElementById('min');
// let hour = document.getElementById('hour');
// let sec = document.getElementById('seconds');
// let secVal = sec.innerText;
// let minVal = min.innerText;
// let hourVal = hour.innerText;

// function MakeTime () {
//    secVal++
//    sec.innerText = secVal;
//    if ( secVal == 59) {
//       secVal = 0
//       minVal ++
//       min.innerText = minVal;
//    }
//  else if ( minVal == 59) {
//    minVal = 0
//    hourVal ++
//    hour.innerText = hourVal;
//  }
//    }
// setInterval(MakeTime,1000)
// Initialize variables for HTML elements
let hourElement = document.getElementById('hour');
let minuteElement = document.getElementById('min');
let secondElement = document.getElementById('seconds');

// Function to update the clock
function updateClock() {
    // Get current time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update HTML elements
    hourElement.innerText = hours;
    minuteElement.innerText = minutes;
    secondElement.innerText = seconds;
}

// Set interval to update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();