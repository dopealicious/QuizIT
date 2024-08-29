//============================================================================
// Finds a scene object by name and then finds its parent object. Then, finds
// the parent object's children.
//
// Project setup:
// - Insert a Plane, a 3D Text object and a Null Object to the scene
// - Drag the plane and 3D text objects into the null object
//============================================================================

const Scene = require('Scene');
const Diagnostics = require('Diagnostics');
const Patches = require('Patches');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane in the scene and log its identifier to the console
  const plane = await Scene.root.findFirst('rectangle0');

    // Send the boolean to the Patch Editor as 'myBoolean'
    await Patches.inputs.setBoolean('myBoolean', myBoolean);

})(); // Enable async/await in JS [part 2]