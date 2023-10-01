function moveBackground() {
    const background = document.querySelector(".screen>.game-container>.background");
    var position = 0;
    var speed = 5;

    function updateBackground() {
        position += speed;
        background.style.backgroundPosition = `0px ${position}px`;
        requestAnimationFrame(updateBackground);
    }
    updateBackground();
}

moveBackground(); 

