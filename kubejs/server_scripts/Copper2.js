ServerEvents.recipes(event => {

  const i = (item) => ({ item: item, count: 1 });
  const t = (tag) => ({ tag: tag, count: 1 });

  const createItemApplication = (event, input, withItem, result) => {
    event.custom({
      type: 'create:item_application',
      ingredients: [input, i(withItem)],
      results: [result]
    });
  };

  const createItemApplicationWithTag = (event, input, withTag, result) => {
    event.custom({
      type: 'create:item_application',
      ingredients: [input, t(withTag)],
      results: [result]
    });
  };

  const createFillingRecipe = (event, output, input) => {
     event.custom({
    type: "create:filling",
    ingredients: [
      { item: input },{amount: 50,  fluid: "minecraft:water"}
      
    ],
    results: [
      { item: output }
    ]
  })
  };

  const removeWaxingRecipe = (event, output) => {
    event.remove({ input: 'minecraft:honeycomb', output: output });
    event.remove({ type: 'create:deploying', output: output });
  };

  const blockoreprocessingrecipes = [
    {
      normal: 'minecraft:copper_block',
      exposed: 'minecraft:exposed_copper',
      weathered: 'minecraft:weathered_copper',
      oxidized: 'minecraft:oxidized_copper',
      waxed_normal: 'minecraft:waxed_copper_block',
      waxed_exposed: 'minecraft:waxed_exposed_copper',
      waxed_weathered: 'minecraft:waxed_weathered_copper',
      waxed_oxidized: 'minecraft:waxed_oxidized_copper',
    },
    {
        normal: 'minecraft:cut_copper',
        exposed: 'minecraft:exposed_cut_copper',
        weathered: 'minecraft:weathered_cut_copper',
        oxidized: 'minecraft:oxidized_cut_copper',
        waxed_normal: 'minecraft:waxed_cut_copper',
        waxed_exposed: 'minecraft:waxed_exposed_cut_copper',
        waxed_weathered: 'minecraft:waxed_weathered_cut_copper',
        waxed_oxidized: 'minecraft:waxed_oxidized_cut_copper'
      },
      {
        normal: 'minecraft:cut_copper_stairs',
        exposed: 'minecraft:exposed_cut_copper_stairs',
        weathered: 'minecraft:weathered_cut_copper_stairs',
        oxidized: 'minecraft:oxidized_cut_copper_stairs',
        waxed_normal: 'minecraft:waxed_cut_copper_stairs',
        waxed_exposed: 'minecraft:waxed_exposed_cut_copper_stairs',
        waxed_weathered: 'minecraft:waxed_weathered_cut_copper_stairs',
        waxed_oxidized: 'minecraft:waxed_oxidized_cut_copper_stairs'
      },
      {
        normal: 'minecraft:cut_copper_slab',
        exposed: 'minecraft:exposed_cut_copper_slab',
        weathered: 'minecraft:weathered_cut_copper_slab',
        oxidized: 'minecraft:oxidized_cut_copper_slab',
        waxed_normal: 'minecraft:waxed_cut_copper_slab',
        waxed_exposed: 'minecraft:waxed_exposed_cut_copper_slab',
        waxed_weathered: 'minecraft:waxed_weathered_cut_copper_slab',
        waxed_oxidized: 'minecraft:waxed_oxidized_cut_copper_slab'
      },
      {
        normal: 'quark:cut_copper_vertical_slab',
        exposed: 'quark:exposed_cut_copper_vertical_slab',
        weathered: 'quark:weathered_cut_copper_vertical_slab',
        oxidized: 'quark:oxidized_cut_copper_vertical_slab',
        waxed_normal: 'quark:waxed_cut_copper_vertical_slab',
        waxed_exposed: 'quark:waxed_exposed_cut_copper_vertical_slab',
        waxed_weathered: 'quark:waxed_weathered_cut_copper_vertical_slab',
        waxed_oxidized: 'quark:waxed_oxidized_cut_copper_vertical_slab'
      },
      {
        normal: 'caverns_and_chasms:copper_bars',
        exposed: 'caverns_and_chasms:exposed_copper_bars',
        weathered: 'caverns_and_chasms:weathered_copper_bars',
        oxidized: 'caverns_and_chasms:oxidized_copper_bars',
        waxed_normal: 'caverns_and_chasms:waxed_copper_bars',
        waxed_exposed: 'caverns_and_chasms:waxed_exposed_copper_bars',
        waxed_weathered: 'caverns_and_chasms:waxed_weathered_copper_bars',
        waxed_oxidized: 'caverns_and_chasms:waxed_oxidized_copper_bars',
      },
      {
        normal: 'caverns_and_chasms:copper_button',
        exposed: 'caverns_and_chasms:exposed_copper_button',
        weathered: 'caverns_and_chasms:weathered_copper_button',
        oxidized: 'caverns_and_chasms:oxidized_copper_button',
        waxed_normal: 'caverns_and_chasms:waxed_copper_button',
        waxed_exposed: 'caverns_and_chasms:waxed_exposed_copper_button',
        waxed_weathered: 'caverns_and_chasms:waxed_weathered_copper_button',
        waxed_oxidized: 'caverns_and_chasms:waxed_oxidized_copper_button',
      },
      {
        normal: 'minecraft:lightning_rod',
        exposed: 'caverns_and_chasms:exposed_lightning_rod',
        weathered: 'caverns_and_chasms:weathered_lightning_rod',
        oxidized: 'caverns_and_chasms:oxidized_lightning_rod',
        waxed_normal: 'caverns_and_chasms:waxed_lightning_rod',
        waxed_exposed: 'caverns_and_chasms:waxed_exposed_lightning_rod',
        waxed_weathered: 'caverns_and_chasms:waxed_weathered_lightning_rod',
        waxed_oxidized: 'caverns_and_chasms:waxed_oxidized_lightning_rod',
      },
      {
        normal: 'caverns_and_chasms:floodlight',
        exposed: 'caverns_and_chasms:exposed_floodlight',
        weathered: 'caverns_and_chasms:weathered_floodlight',
        oxidized: 'caverns_and_chasms:oxidized_floodlight',
        waxed_normal: 'caverns_and_chasms:waxed_floodlight',
        waxed_exposed: 'caverns_and_chasms:waxed_exposed_floodlight',
        waxed_weathered: 'caverns_and_chasms:waxed_weathered_floodlight',
        waxed_oxidized: 'caverns_and_chasms:waxed_oxidized_floodlight',
      },
      {
        normal: 'tconstruct:copper_platform',
        exposed: 'tconstruct:exposed_copper_platform',
        weathered: 'tconstruct:weathered_copper_platform',
        oxidized: 'tconstruct:oxidized_copper_platform',
        waxed_normal: 'tconstruct:waxed_copper_platform',
        waxed_exposed: 'tconstruct:waxed_exposed_copper_platform',
        waxed_weathered: 'tconstruct:waxed_weathered_copper_platform',
        waxed_oxidized: 'tconstruct:waxed_oxidized_copper_platform',
      },
      {
        normal: 'create:copper_shingles',
        exposed: 'create:exposed_copper_shingles',
        weathered: 'create:weathered_copper_shingles',
        oxidized: 'create:oxidized_copper_shingles',
        waxed_normal: 'create:waxed_copper_shingles',
        waxed_exposed: 'create:waxed_exposed_copper_shingles',
        waxed_weathered: 'create:waxed_weathered_copper_shingles',
        waxed_oxidized: 'create:waxed_oxidized_copper_shingles',
      },
      {
        normal: 'create:copper_shingle_slab',
        exposed: 'create:exposed_copper_shingle_slab',
        weathered: 'create:weathered_copper_shingle_slab',
        oxidized: 'create:oxidized_copper_shingle_slab',
        waxed_normal: 'create:waxed_copper_shingle_slab',
        waxed_exposed: 'create:waxed_exposed_copper_shingle_slab',
        waxed_weathered: 'create:waxed_weathered_copper_shingle_slab',
        waxed_oxidized: 'create:waxed_oxidized_copper_shingle_slab',
      },
      {
        normal: 'create:copper_shingle_stairs',
        exposed: 'create:exposed_copper_shingle_stairs',
        weathered: 'create:weathered_copper_shingle_stairs',
        oxidized: 'create:oxidized_copper_shingle_stairs',
        waxed_normal: 'create:waxed_copper_shingle_stairs',
        waxed_exposed: 'create:waxed_exposed_copper_shingle_stairs',
        waxed_weathered: 'create:waxed_weathered_copper_shingle_stairs',
        waxed_oxidized: 'create:waxed_oxidized_copper_shingle_stairs',
      },
      {
        normal: 'create:copper_tiles',
        exposed: 'create:exposed_copper_tiles',
        weathered: 'create:weathered_copper_tiles',
        oxidized: 'create:oxidized_copper_tiles',
        waxed_normal: 'create:waxed_copper_tiles',
        waxed_exposed: 'create:waxed_exposed_copper_tiles',
        waxed_weathered: 'create:waxed_weathered_copper_tiles',
        waxed_oxidized: 'create:waxed_oxidized_copper_tiles',
      },
      {
        normal: 'create:copper_tile_stairs',
        exposed: 'create:exposed_copper_tile_stairs',
        weathered: 'create:weathered_copper_tile_stairs',
        oxidized: 'create:oxidized_copper_tile_stairs',
        waxed_normal: 'create:waxed_copper_tile_stairs',
        waxed_exposed: 'create:waxed_exposed_copper_tile_stairs',
        waxed_weathered: 'create:waxed_weathered_copper_tile_stairs',
        waxed_oxidized: 'create:waxed_oxidized_copper_tile_stairs',
      },
      {
        normal: 'create:copper_tiles_slab',
        exposed: 'create:exposed_copper_tiles_slab',
        weathered: 'create:weathered_copper_tiles_slab',
        oxidized: 'create:oxidized_copper_tiles_slab',
        waxed_normal: 'create:waxed_copper_tiles_slab',
        waxed_exposed: 'create:waxed_exposed_copper_tiles_slab',
        waxed_weathered: 'create:waxed_weathered_copper_tiles_slab',
        waxed_oxidized: 'create:waxed_oxidized_copper_tiles_slab',
      },
      {
        normal: 'trials:chiseled_copper',
        exposed: 'trials:chiseled_copper_exposed',
        weathered: 'trials:chiseled_copper_weathered',
        oxidized: 'trials:chiseled_copper_oxidized',
        waxed_normal: 'trials:waxed_chiseled_copper',
        waxed_exposed: 'trials:waxed_chiseled_copper_exposed',
        waxed_weathered: 'trials:waxed_chiseled_copper_weathered',
        waxed_oxidized: 'trials:waxed_chiseled_copper_oxidized',
      },
      {
        normal: 'trials:copper_bulb',
        exposed: 'trials:copper_bulb_exposed',
        weathered: 'trials:copper_bulb_weathered',
        oxidized: 'trials:copper_bulb_oxidized',
        waxed_normal: 'trials:waxed_copper_bulb',
        waxed_exposed: 'trials:waxed_copper_bulb_exposed',
        waxed_weathered: 'trials:waxed_copper_bulb_weathered',
        waxed_oxidized: 'trials:waxed_copper_bulb_oxidized',
      },
      {
        normal: 'trials:copper_trapdoor',
        exposed: 'trials:copper_trapdoor_exposed',
        weathered: 'trials:copper_trapdoor_weathered',
        oxidized: 'trials:copper_trapdoor_oxidized',
        waxed_normal: 'trials:waxed_copper_trapdoor',
        waxed_exposed: 'trials:waxed_copper_trapdoor_exposed',
        waxed_weathered: 'trials:waxed_copper_trapdoor_weathered',
        waxed_oxidized: 'trials:waxed_copper_trapdoor_oxidized',
      },
      {
        normal: 'trials:copper_door',
        exposed: 'trials:copper_door_exposed',
        weathered: 'trials:copper_door_weathered',
        oxidized: 'trials:copper_door_oxidized',
        waxed_normal: 'trials:waxed_copper_door',
        waxed_exposed: 'trials:waxed_copper_door_exposed',
        waxed_weathered: 'trials:waxed_copper_door_weathered',
        waxed_oxidized: 'trials:waxed_copper_door_oxidized',
      },
      {
        normal: 'trials:copper_grate',
        exposed: 'trials:copper_grate_exposed',
        weathered: 'trials:copper_grate_weathered',
        oxidized: 'trials:copper_grate_oxidized',
        waxed_normal: 'trials:waxed_copper_grate',
        waxed_exposed: 'trials:waxed_copper_grate_exposed',
        waxed_weathered: 'trials:waxed_copper_grate_weathered',
        waxed_oxidized: 'trials:waxed_copper_grate_oxidized',
      },
  ];

  blockoreprocessingrecipes.forEach(recipe => {
    removeWaxingRecipe(event, recipe.waxed_normal);
    removeWaxingRecipe(event, recipe.waxed_exposed);
    removeWaxingRecipe(event, recipe.waxed_weathered);
    removeWaxingRecipe(event, recipe.waxed_oxidized);

    event.remove({ output: recipe.normal, type: 'create:deploying' });
    event.remove({ output: recipe.exposed, type: 'create:deploying' });
    event.remove({ output: recipe.weathered, type: 'create:deploying' });
    event.remove({ output: recipe.oxidized, type: 'create:deploying' });

    createItemApplication(event, i(recipe.normal), 'minecraft:honeycomb', i(recipe.waxed_normal));
    createItemApplication(event, i(recipe.exposed), 'minecraft:honeycomb', i(recipe.waxed_exposed));
    createItemApplication(event, i(recipe.weathered), 'minecraft:honeycomb', i(recipe.waxed_weathered));
    createItemApplication(event, i(recipe.oxidized), 'minecraft:honeycomb', i(recipe.waxed_oxidized));

    createItemApplicationWithTag(event, i(recipe.waxed_normal), 'minecraft:axes', i(recipe.normal));
    createItemApplicationWithTag(event, i(recipe.waxed_exposed), 'minecraft:axes', i(recipe.exposed));
    createItemApplicationWithTag(event, i(recipe.waxed_weathered), 'minecraft:axes', i(recipe.weathered));
    createItemApplicationWithTag(event, i(recipe.waxed_oxidized), 'minecraft:axes', i(recipe.oxidized));

    createItemApplicationWithTag(event, i(recipe.weathered), 'minecraft:axes', i(recipe.exposed));
    createItemApplicationWithTag(event, i(recipe.oxidized), 'minecraft:axes', i(recipe.weathered));
    createItemApplicationWithTag(event, i(recipe.exposed), 'minecraft:axes', i(recipe.normal));

    createFillingRecipe(event, recipe.exposed, recipe.normal);
    createFillingRecipe(event, recipe.weathered, recipe.exposed);
    createFillingRecipe(event, recipe.oxidized, recipe.weathered);



  });
});

