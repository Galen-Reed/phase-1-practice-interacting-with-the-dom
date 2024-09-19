let startInterval;
let counter = 0;
let paused = false
const pause = document.getElementById("pause");
const heart = document.getElementById("heart");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const buttons = document.getElementsByTagName("button");
let buttonsArray = [];

for (let i=0; i < buttons.length; i++) {
    if (buttons[i].id != "pause") {
        buttonsArray.push(buttons[i])
    }
};

function disableButton(button) {
    button.setAttribute("disabled", true)
};

function enableButton(button) {
    button.removeAttribute("disabled");
};

document.addEventListener("DOMContentLoaded", (event) => {
    startInterval = setInterval(startCount, 1000);
});

function startCount() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
};

function replacePause() {
    pause.textContent = "resume"
};

function replaceResume() {
    pause.textContent = "pause"
};

plus.addEventListener("click", function() {
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter
});

minus.addEventListener("click", function() {
    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter
});

pause.addEventListener("click", function() {
    if (paused == false) {
        clearInterval(startInterval);
        buttonsArray.forEach(button => {
            disableButton(button)
        })
        replacePause()
    } else {
        startInterval = setInterval(startCount, 1000)
        replaceResume()
        buttonsArray.forEach(button => {
        enableButton(button)
        });
   }
   paused = !paused;
});


