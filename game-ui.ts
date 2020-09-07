///<reference path="libs/babylon.d.ts" />
///<reference path="libs/gen-3d-engine.ts" />
///<reference path="sample-state.ts" />

window.addEventListener('DOMContentLoaded', () => {
    let game = new miGen3DEngine.cUI3DEngine(2);
    game.opt = {
        showGrid: false,
        showImages: true, // shows digits on the blocks
        showLogos: false,
        hasPhysics: false // does not work yet
    };
    // Create the ground, camera and background
    game.createWorld();
    let state = new SampleState()
    // We first have to create (meta) objects from the state
    game.createObjects(state.to_blocks())
    // Then we use these create objects and align them to the state
    game.updateScene(state.to_states())

});