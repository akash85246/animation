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

// 

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
function enemyMove(){
moveEnemyShipDownWithRandomDelay('eship1');
moveEnemyShipDownWithRandomDelay('eship2');
moveEnemyShipDownWithRandomDelay('eship3');
moveEnemyShipDownWithRandomDelay('eship4');
moveEnemyShipDownWithRandomDelay('eship5');
}

let bool=true;

document.querySelector(".b1").addEventListener("click",function(){
    if(bool)
    {
    enemyMove();
    moveBackground(); 
    document.querySelector(".b1").innerHTML="Pause";
    score();
    bool=false;
    }
})
var n=0;
function score(){
setInterval(() => {
    document.getElementById("score").innerHTML=n;
    n=n+1;

    var eship1_left=Math.abs(document.querySelector("#eship1").getBoundingClientRect().left);
    var eship1_right=Math.abs(document.querySelector("#eship1").getBoundingClientRect().right);
    var eship1_top=Math.abs(document.querySelector("#eship1").getBoundingClientRect().top);
    var eship1_bottom=Math.abs(document.querySelector("#eship1").getBoundingClientRect().bottom);
    
    var eship2_left=Math.abs(document.querySelector("#eship2").getBoundingClientRect().left);
    var eship2_right=Math.abs(document.querySelector("#eship2").getBoundingClientRect().right);
    var eship2_top=Math.abs(document.querySelector("#eship2").getBoundingClientRect().top);
    var eship2_bottom=Math.abs(document.querySelector("#eship2").getBoundingClientRect().bottom);

    var eship3_left=Math.abs(document.querySelector("#eship3").getBoundingClientRect().left);
    var eship3_right=Math.abs(document.querySelector("#eship3").getBoundingClientRect().right);
    var eship3_top=Math.abs(document.querySelector("#eship3").getBoundingClientRect().top);
    var eship3_bottom=Math.abs(document.querySelector("#eship3").getBoundingClientRect().bottom);

    var eship4_left=Math.abs(document.querySelector("#eship4").getBoundingClientRect().left);
    var eship4_right=Math.abs(document.querySelector("#eship4").getBoundingClientRect().right);
    var eship4_top=Math.abs(document.querySelector("#eship4").getBoundingClientRect().top);
    var eship4_bottom=Math.abs(document.querySelector("#eship4").getBoundingClientRect().bottom);

    var eship5_left=Math.abs(document.querySelector("#eship5").getBoundingClientRect().left);
    var eship5_right=Math.abs(document.querySelector("#eship5").getBoundingClientRect().right);
    var eship5_top=Math.abs(document.querySelector("#eship5").getBoundingClientRect().top);
    var eship5_bottom=Math.abs(document.querySelector("#eship5").getBoundingClientRect().bottom);

    var myShip_left=Math.abs(document.querySelector("#alia").getBoundingClientRect().left);
    var myShip_right=Math.abs(document.querySelector("#alia").getBoundingClientRect().right);
    var myShip_top=Math.abs(document.querySelector("#alia").getBoundingClientRect().top);
    var myShip_bottom=Math.abs(document.querySelector("#alia").getBoundingClientRect().bottom);

    if(((eship1_left<myShip_left && myShip_left<eship1_right)||(eship1_left<myShip_right && myShip_right<eship1_right)) && ((eship1_top<myShip_top && myShip_top<eship1_bottom)||(eship1_top<myShip_bottom && myShip_bottom<eship1_bottom)))
    {
        setTimeout(() => {
            alert("Game Over");
        })
        location.reload();
    }
}, 3000);
}

