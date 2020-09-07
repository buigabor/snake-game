import {
    update as updateSnake,
    draw as drawSnake,
    getSnakeHead,
    snakeIntersection,
    SNAKE_SPEED
} from "./snake.js";

import {
    update as updateFood,
    draw as drawFood,
} from "./food.js";

import {
    outsideGrid
} from "./grid.js";

let gameOver = false;
let lastRenderTime = 0;
const gameBoard = document.body.querySelector(".game-board")

function main(currentTime) {

    if (gameOver) {
        if (confirm("You lost! Press Ok to restart.")){ //if you confirm the popup
            window.location= "/"; //refresh page
        }
        return;
    }

    window.requestAnimationFrame(main) // how long since the last time we rendered
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return // render interval based on snake speed, faster snake = faster render
    lastRenderTime = currentTime;
    update();
    draw();
}

function update() {
    updateSnake()
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = "";
    drawFood(gameBoard);
    drawSnake(gameBoard);
}

window.requestAnimationFrame(main);

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};