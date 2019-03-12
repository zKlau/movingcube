window.addEventListener('keydown', checkKeyPressed, false);

    function checkKeyPressed(key) {


        // D
        if (key.keyCode == "68") {
            move = move + 15;
            eye1speed = eye1speed + 15;
            eye2speed = eye2speed + 15;
    
        };
    
        // A
        if (key.keyCode == "65") {
            move = move - 15;
            eye1speed = eye1speed - 15;
            eye2speed = eye2speed - 15;
    
        };
    
        // W 
        if (key.keyCode == "87") {
            jump = jump - 100;
            eyejump = eyejump - 90;
        };
        if (key.keyCode == "32") {
            jump = jump - 100;
            eyejump = eyejump - 90;
        };
    
        // S
        // if(key.keyCode == "83") {
        //       jump = jump + 15;
        //  }
    
        //Border
        if (jump > originalPos) {
            jump = originalPos;
        }
        if (move > 950) {
            move = 949
        }
        if (move < 0) {
            move = 2
        }
        if (jump < 0) {
            jump = 2;
        }
    
        // Eye Border
        if (eyejump > eyepos) {
            eyejump = eyepos;
        }
        if (eye1speed > 950) {
            eye1speed = 949
        }
        if (eye1speed < 0) {
            eye1speed = 2
        }
        if (eyejump < 0) {
            eyejump = 2;
        }
    
        // Eye 2 border
        if (eyejump > eyepos) {
            eyejump = eyepos;
        }
        if (eye2speed > 950) {
            eye2speed = 949
        }
        if (eye2speed < 0) {
            eye2speed = 2
        }
        if (eyejump < 0) {
            eyejump = 2;
        }
    
    }
    

 

