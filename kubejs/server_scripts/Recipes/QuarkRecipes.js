ServerEvents.recipes(event => {

  // Helper function to create shaped recipes
  const shaped = (output, pattern, ingredients) => {
      event.shaped(output, pattern, ingredients);
  };

  // Helper function to create shapeless recipes
  const shapeless = (output, ingredients) => {
      event.shapeless(output, ingredients);
  };

  // Sturdy Stone
  shaped('4x quark:sturdy_stone', [
      'AB',
      'BA'
  ], {
      A: 'minecraft:stone',
      B: 'minecraft:deepslate'
  });


}); // End of Script