let currentShape = 'hexagon';

function draw(event) {
    let canvas = document.getElementById("hexagonCanvas");
    let ctx = canvas.getContext("2d");
    let rect = canvas.getBoundingClientRect();

    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;

    let size, sides, angle;

    if (currentShape === 'hexagon') {
        size = Math.floor(Math.random() * 50) + 20;
        sides = 6;
        angle = Math.PI / 3;
    } else if (currentShape === 'rectangle') {
        size = Math.floor(Math.random() * 50) + 20;
        sides = 4;
        angle = Math.PI / 2;
    }

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let alpha = Math.random() * 0.5 + 0.1;
    let color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    ctx.fillStyle = 'lightgray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(posX + size * Math.cos(0), posY + size * Math.sin(0));
    for (let i = 1; i <= sides; i++) {
        ctx.lineTo(posX + size * Math.cos(i * angle), posY + size * Math.sin(i * angle));
    }
    ctx.closePath();

    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();

    let dx = Math.random() * 4 - 2;
    let dy = Math.random() * 4 - 2;

    function animate() {
        posX += dx;
        posY += dy;

        if (posX + size > canvas.width || posX - size < 0) {
            dx = -dx;
        }
        if (posY + size > canvas.height || posY - size < 0) {
            dy = -dy;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'lightgray';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(posX + size * Math.cos(0), posY + size * Math.sin(0));
        for (let i = 1; i <= sides; i++) {
            ctx.lineTo(posX + size * Math.cos(i * angle), posY + size * Math.sin(i * angle));
        }
        ctx.closePath();

        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();

        requestAnimationFrame(animate);
    }

    animate();
}

document.getElementById("hexagonCanvas").addEventListener("mousemove", draw);

document.getElementById("hexagonCanvas").addEventListener("click", function(event) {
    currentShape = currentShape === 'hexagon' ? 'rectangle' : 'hexagon';
    draw(event);
});
