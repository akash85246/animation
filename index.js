// for looping back ground
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

// alias ship movement

const spaceship = document.querySelector('#alia');
const container = document.querySelector('.background');


var spaceshipX = container.clientWidth / 2; 
var spaceshipY = container.clientHeight / 2;

const step = 10;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            spaceshipY -= step;
            break;
        case 'ArrowDown':
            spaceshipY += step;
            break;
        case 'ArrowLeft':
            spaceshipX -= step;
            break;
        case 'ArrowRight':
            spaceshipX += step;
            break;
    }

    spaceshipX = Math.max(0, Math.min(container.clientWidth - spaceship.clientWidth, spaceshipX));
    spaceshipY = Math.max(0, Math.min(container.clientHeight - spaceship.clientHeight, spaceshipY));

    spaceship.style.left = spaceshipX + 'px';
    spaceship.style.top = spaceshipY + 'px';
});
