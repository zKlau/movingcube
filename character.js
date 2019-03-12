function character() {
    // character
    canvasContext.fillStyle = "#ff3300";
    canvasContext.fillRect(move, jump, 50, 50);

    // Eye 1
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(eye1speed, eyejump, 8, 30, Math.PI * 2, true);
    canvasContext.fill();

    // Eye 2
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(eye2speed, eyejump, 8, 30, Math.PI * 2, true);
    canvasContext.fill();
}