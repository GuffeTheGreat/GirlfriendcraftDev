
ServerEvents.recipes(event => {

    let smallbrickrecipes = [
    { output: '4x stonezone:c/caverns_and_chasms/small_sugilite_bricks', input: 'caverns_and_chasms:polished_sugilite' },
    { output: '4x stonezone:c/botania/small_livingrock_bricks', input: 'botania:livingrock_bricks' },
    { output: '4x stonezone:c/botania/small_shimmerrock_bricks', input: 'botania:shimmerrock' },
    { output: '4x stonezone:c/quark/small_permafrost_bricks', input:  'quark:permafrost_bricks'},
    { output: '4x stonezone:c/quark/small_shale_bricks', input: 'quark:shale_bricks' },
    { output: '4x stonezone:c/quark/small_limestone_bricks', input: 'quark:limestone_bricks' },
    { output: '4x stonezone:c/regions_unexplored/small_argillite_bricks', input: 'regions_unexplored:argillite' },
    { output: '4x stonezone:c/regions_unexplored/small_chalk_bricks', input: 'regions_unexplored:chalk_bricks', },
    { output: '4x stonezone:c/quark/small_myalite_bricks', input: 'quark:myalite_bricks' },
    { output: '4x stonezone:c/quark/small_jasper_bricks', input: 'quark:jasper_bricks' },
    { output: '4x stonezone:c/galosphere/small_pink_salt_bricks', input: 'galosphere:pink_salt_bricks' },
    { output: '4x stonezone:c/galosphere/small_rose_pink_salt_bricks', input:'galosphere:rose_pink_salt_bricks'  },
    { output: '4x stonezone:c/galosphere/small_pastel_pink_salt_bricks', input: 'galosphere:pastel_pink_salt_bricks' },
    { output: '4x stonezone:c/atmospheric/small_dolerite_bricks', input: 'atmospheric:polished_dolerite' },
    { output: '4x stonezone:c/atmospheric/small_ivory_travertine_bricks', input: 'atmospheric:ivory_travertine' },
    { output: '4x stonezone:c/atmospheric/small_peach_travertine_bricks', input: 'atmospheric:peach_travertine' },
    { output: '4x stonezone:c/atmospheric/small_persimmon_travertine_bricks', input: 'atmospheric:persimmon_travertine' },
    { output: '4x stonezone:c/atmospheric/small_saffron_travertine_bricks', input: 'atmospheric:saffron_travertine' },
    { output: '4x stonezone:c/quark/small_soul_sandstone_bricks', input: 'quark:smooth_soul_sandstone' },
    { output: '4x stonezone:c/spelunkery/small_nephrite_bricks', input: 'spelunkery:polished_nephrite_bricks' },
    { output: '4x stonezone:c/tconstruct/small_seared_stone_bricks', input: 'tconstruct:seared_paver' },
    { output: '4x stonezone:c/tconstruct/small_scorched_stone_bricks', input: 'tconstruct:scorched_road' },
    { output: '4x minecraft:smooth_stone', input: 'supplementaries:stone_tile' },

  ];

  smallbrickrecipes.forEach(recipe => {

event.shaped(recipe.output, [
    'AA',
    'AA'
  ], {
    A: recipe.input
  }) 
  });


})