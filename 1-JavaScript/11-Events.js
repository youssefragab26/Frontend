let button = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");
let button4 = document.getElementById("button-4");
let button5 = document.getElementById("button-5");
let input = document.getElementById("input");
//ON CLICK
button.onclick = function () {
    console.log("clicked");
}
button2.onclick = function () {
    document.body.style.background = 'black';
}

button.addEventListener("click", function () {
    document.body.style.background = 'red';
})
button.addEventListener("click", function () {
    button.style.background = 'blue';
})
button.addEventListener("click", function () {
    button.style.color = 'white';
})
//
button3.onmousemove = function () {
    console.log("mouse up");
}
let i = 1;
input.onkeydown = function () {
    console.log("keyup " + i++);
}
