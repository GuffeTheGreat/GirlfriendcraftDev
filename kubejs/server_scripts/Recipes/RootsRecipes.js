ServerEvents.recipes(event => {

  // Helper function to create shaped recipes
  const shaped = (output, pattern, ingredients) => {
      event.shaped(output, pattern, ingredients);
  };

  // Helper function to create shapeless recipes
  const shapeless = (output, ingredients) => {
      event.shapeless(output, ingredients);
  };

  // Brazier
  shaped('rootsclassic:brazier', [
      'ABA',
      'ACA',
      'A A'
  ], {
      A: 'minecraft:iron_ingot',
      B: 'farmersdelight:rope',
      C: 'minecraft:cauldron'
  });

  // Altar
  shaped('rootsclassic:altar', [
      'ADA',
      'BCB',
      ' B '
  ], {
      A: 'rootsclassic:verdant_sprig',
      B: 'quark:sturdy_stone',
      C: 'create:golden_sheet',
      D: '#botania:petals'
  });


}); // End of Script