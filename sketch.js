const r = require('raylib');

const WIDTH = 400;
const HEIGHT = 400;

const FPS = 60;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Moving Circle");
    r.SetTargetFPS(FPS);
}

function running() {
    return !r.WindowShouldClose();
}

function draw() {
    r.ClearBackground(r.WHITE)
    r.BeginDrawing();
    r.EndDrawing();
}

function update() {}

function tearDown() {
    return r.CloseWindow();
}
module.exports = {
    setup,
    running,
    draw,
    update,
    tearDown,
}           