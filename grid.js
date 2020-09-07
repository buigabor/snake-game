const GRID_SIZE_MAX = 21;
const GRID_SIZE_MIN = 1;

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE_MAX) + 1,
        y: Math.floor(Math.random() * GRID_SIZE_MAX) + 1
    }
}

export function outsideGrid(position) {
    if (position.x > GRID_SIZE_MAX || position.x < GRID_SIZE_MIN || position.y > GRID_SIZE_MAX || position.y < GRID_SIZE_MIN) {
        return true;
    }
}