// DOM Elements

let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let name = document.getElementById("name");
let focus = document.getElementById("focus");

// Set time


function showTime() {
    let today = new Date();
        hour = today.getHours();
        min = today.getMinutes();
        sec = today.getSeconds();

        // show AM PM
        const amPm = hour >= 12 ? "PM" : "AM";
        console.log(amPm);
    
        time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec} ${amPm}`;
    setTimeout(showTime, 1000);
}

showTime();
