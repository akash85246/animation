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
// for enemy movement
var speed =1.5;
function moveEnemyShipDown(shipId) {
    const enemyShip = document.getElementById(shipId);
    let currentPosition = 0; 

    const animationInterval = setInterval(() => {
        currentPosition += speed; 
        enemyShip.style.transform = `translateY(${currentPosition}px)`;

        if (currentPosition >= window.innerHeight) {
            clearInterval(animationInterval);
            enemyShip.style.transform = 'translateY(0)';
            moveEnemyShipDown(shipId);
        }
    }, 20); 
}

function moveEnemyShipDownWithRandomDelay(shipId) {
    setTimeout(() => {
        moveEnemyShipDown(shipId);
    }, Math.random() * 20500); 
}
moveEnemyShipDownWithRandomDelay('eship1');
moveEnemyShipDownWithRandomDelay('eship2');
moveEnemyShipDownWithRandomDelay('eship3');
moveEnemyShipDownWithRandomDelay('eship4');
moveEnemyShipDownWithRandomDelay('eship5');
//for collison
