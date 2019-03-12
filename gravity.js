// Create The gravity
function gravity() {

    jump = jump + 10;
    if (jump > originalPos) {
        jump = originalPos;
    }

    eyejump = eyejump + 8.2;
    if (eyejump > eyepos) {
        eyejump = eyepos;
    }
    if(eyejump < jump){
        eyejump = jump;
    }
}
