import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
import { score, scoreCount } from "./snake.js";
let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
let gameOver = false;



function main(currentTime) {
    if (gameOver) {
        console.log(score);


        if (confirm("You lost, Press ok to play again")) {
            window.location = '/'
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) {
        return;
    };

    lastRenderTime = currentTime;
    //console.log(currentTime);
    //console.log("Render");

    //every game should have these both functions
    update();
    draw();

}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}
