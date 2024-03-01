function draw(event) {
    let canvas = document.getElementById("hexagonCanvas");
    let ctx = canvas.getContext("2d");
    let rect = canvas.getBoundingClientRect();

    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;

    let sideLength = 50;
    let angle = Math.PI / 3; // кут повороту для шестикутника (360 / 6 = 60 градусів = π / 3 радіан)

    // Зберігаємо поточний globalAlpha
    let prevAlpha = ctx.globalAlpha;

    // Встановлюємо напівпрозорий ефект для фігур
    ctx.globalAlpha = 0.5;

    // Встановлюємо колір заливки фігур
    let color = "rgba(0, 255, 0, 0.5)"; // Зелений колір з напівпрозорістю
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.moveTo(posX + sideLength * Math.cos(0), posY + sideLength * Math.sin(0));

    for (let i = 1; i <= 6; i++) {
        ctx.lineTo(posX + sideLength * Math.cos(i * angle), posY + sideLength * Math.sin(i * angle));
    }

    ctx.closePath();
    ctx.fill();

    // Повертаємо попереднє значення globalAlpha
    ctx.globalAlpha = prevAlpha;
}
