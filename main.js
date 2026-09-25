const sketch = require('./sketch.js')
const g = require('./geometry')

function loop() {

    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }

}

function main() {
    sketch.setup();
    console.log(g.square(10));
    loop();
    sketch.tearDown();
}

main();