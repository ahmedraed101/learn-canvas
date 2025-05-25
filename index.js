let canvas;
let ctx;
let flowField;
let flowFieldAnimation;

window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onresize = function () {
    cancelAnimationFrame(flowFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFeildEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0)
}


const mouse = {
    x: 0, y: 0
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
})

// window.addEventListener("mousedown", (event) => {
//     ctx.beginPath
// })