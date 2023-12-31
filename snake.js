import { getInputDirection } from "./input.js";


export const snakeSpeed = 5; //this number is how many times snake moves per second, this case 2 times per second
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
export let score = 0;
let scoreBoard = document.getElementById('score');
export let scoreCount = 0;

export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    //console.log("update");
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

}
export function draw(gameBoard) {
    console.log('draw Snake');
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount) {
    newSegments += amount
    score++;
    scoreBoard.textContent = score;

}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    })
}

function equalPositions(position1, position2) {
    return (
        position1.x === position2.x && position1.y === position2.y
    )
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments = 0;
}

export function getSnakeHead() {
    return snakeBody[0];
}


export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}