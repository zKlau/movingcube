window.onload = function main() {

    canvas = document.getElementById('game');
    canvasContext = canvas.getContext('2d');

    //Run the game

    setInterval(function () {
        world();
        character()
        gravity()

    }, 1000 / 30);

    // setInterval(gravity, 1000/30);


}