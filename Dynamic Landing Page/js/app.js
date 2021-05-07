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
        // console.log(amPm);

    // 12 hour format
    hour = hour % 12 || 12;
    
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Image
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
        console.log(hour);

    if (hour < 12) {
        // set background image and greeting
        document.body.style.backgroundImage = "url('morning.jpg')";
        greeting.textContent = "Good Morning, ";
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('afternoon.jpg')";
        greeting.textContent = "Good Afternoon, ";
    } else {
        document.body.style.backgroundImage = "url('night.jpg')";
        greeting.textContent = "Good Evening, ";
        document.body.style.color = "white";
    }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

showTime();
setBgGreet();
getName();
