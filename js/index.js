let button = document.querySelectorAll("button");

// EventListener for click

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        let PressBtn = this.textContent;
        makesound(PressBtn);
        animateBtn(PressBtn);
    });
}

// EventListener for keyprress

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    animateBtn(event.key);
});


// make sound

function makesound(key) {
    if (key === "w") {
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play(); 
}
else if (key === "a"){
    let audio = new Audio("sounds/tom-2.mp3");
    audio.play();
}
else if (key === "s"){
    let audio = new Audio("sounds/tom-3.mp3");
    audio.play();
}
else if (key === "d"){
    let audio = new Audio("sounds/tom-4.mp3");
    audio.play();
}
else if (key === "j"){
    let audio = new Audio("sounds/snare.mp3");
    audio.play();
}
else if (key === "k"){
    let audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
}
else if (key === "l"){
    let audio = new Audio("sounds/crash.mp3");
    audio.play();
}
else{
    console.log("pleace press perticular keys");
}
}


// AnimateBtn
function animateBtn(key) {
    var button = document.querySelector("." + key);
    button.classList.add("pressed-key");

    setTimeout(function()  {
        button.classList.remove("pressed-key");
    }, 200);
}