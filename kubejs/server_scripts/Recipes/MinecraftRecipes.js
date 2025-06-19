ServerEvents.recipes(event => {

  // Helper function to create shaped recipes
  const shaped = (output, pattern, ingredients) => {
      event.shaped(output, pattern, ingredients);
  };

  // Helper function to create shapeless recipes
  const shapeless = (output, ingredients) => {
      event.shapeless(output, ingredients);
  };

  // Gilded Blackstone
  shaped('minecraft:gilded_blackstone', [
      ' A ',
      'ABA',
      ' A '
  ], {
      A: 'minecraft:gold_nugget',
      B: 'minecraft:blackstone'
  });


}); // End of Script