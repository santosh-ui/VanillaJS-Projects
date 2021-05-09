// DOM Elements

let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let name = document.getElementById("name");
let focus = document.getElementById("focus");

// Show time


function showTime() {
  // let today = new Date(2020, 10, 12, 10, 9, 20);
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
  // let today = new Date(2020, 10, 12, 10, 9, 20);
    let today = new Date(),
        hour = today.getHours();
        // console.log(hour);

    if (hour < 12) {
        // set background image and greeting
        document.body.style.backgroundImage = "url('morning.jpg')";
        // document.body.style.width = '100vw';
        // document.body.style.height = '100vh';
        greeting.textContent = "Good Morning, ";
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('afternoon.jpg')";
        // document.body.style.width = '100vw';
        // document.body.style.height = '100vh';
        greeting.textContent = "Good Afternoon, ";
    } else {
        document.body.style.backgroundImage = "url('night.jpg')";
        // document.body.style.width = '100vw';
        // document.body.style.height = '100vh';
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

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText); // set key: focus to value of target's (element) inner value (text).
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName); // params: (event, function call)
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();
