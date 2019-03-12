


function world() {


    // background
    canvasContext.fillStyle = '#0066cc';
    canvasContext.fillRect(0, 0, 1000, 600);

    // platform
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(0, 500, 1000, 100);


    // Object
    canvasContext.fillStyle = "#336600";
    canvasContext.fillRect(800, 440, 10, 60);
    
    // Object2
    canvasContext.fillStyle = "#336600";
    canvasContext.fillRect(220, 470, 10, 30);
    
    // Object3
    canvasContext.fillStyle = "#336600";
    canvasContext.fillRect(200, 450, 10, 50);

    // Object4
    canvasContext.fillStyle = "#336600";
    canvasContext.fillRect(780, 470, 10, 30);


    //First set of Clouds

    // Cloud1
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(310, 50, 30, 20, Math.PI*2  , true);
    canvasContext.fill();
    
    // Cloud2
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(320, 50, 30, 20, Math.PI*2  , true);
    canvasContext.fill();

    // Cloud3
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(330, 50, 30, 20, Math.PI*2  , true);
    canvasContext.fill();

    // Cloud4
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(340, 50, 30, 20, Math.PI*2  , true);
    canvasContext.fill();

    // Cloud5
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(350, 50, 40, 20, Math.PI*2  , true);
    canvasContext.fill();

    // Cloud6
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(390, 50, 30, 20, Math.PI*2  , true);
    canvasContext.fill();
    

    // Second set of Clouds

    // Cloud2
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(700, 100, 30, 20, Math.PI*2  , true);
    canvasContext.fill();

    // Cloud3
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(690, 100, 30, 20, Math.PI*2  , true);
    canvasContext.fill();

    // Cloud4
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(730, 100, 30, 20, Math.PI*2  , true);
    canvasContext.fill();

    // Cloud5
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(680, 100, 40, 20, Math.PI*2  , true);
    canvasContext.fill();

    // The Sun
    canvasContext.fillStyle = "yellow";
    canvasContext.beginPath();
    canvasContext.arc(0, 0, 60, 20, Math.PI*2  , true);
    canvasContext.fill();



}





