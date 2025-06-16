// Listen to item tag event
ServerEvents.tags('item', event => {


  // Disabled Items
  const removeTags = [
    

    // Zinc
      'create:zinc_ingot', 
      'create:zinc_nugget', 
      'create:zinc_block', 
      'createaddition:zinc_sheet', 
      'spelunkery:raw_zinc_nugget', 
      'create:crushed_raw_zinc', 
      'create:raw_zinc',
      'create:raw_zinc_block', 
      'create:zinc_ore', 
      'create:deepslate_zinc_ore', 
      'spelunkery:andesite_zinc_ore', 
      'spelunkery:diorite_zinc_ore', 
      'spelunkery:granite_zinc_ore',

    //Brass
    'create:brass_ingot',
    'create:brass_nugget',
    'create:brass_sheet',
    'create:brass_block',
    'createaddition:brass_rod',

    /*
    // Stone Tools
    'minecraft:enchanting_table',
    'minecraft:shulker_shell',
    'tconstruct:enderman_head',
    'quark:granite_pillar', 
    'quark:diorite_pillar', 
    'quark:andesite_pillar', 
    'create:tuff_pillar', 
    'quark:calcite_pillar', 
    'quark:dripstone_pillar',
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'spelunkery:andesite_gold_ore',
    'spelunkery:diorite_gold_ore',
    'spelunkery:granite_gold_ore',
    'spelunkery:tuff_gold_ore',
    'caverns_and_chasms:silver_ingot',
    'caverns_and_chasms:silver_nugget',
    'caverns_and_chasms:silver_block',
    'caverns_and_chasms:raw_silver',
    'caverns_and_chasms:raw_silver_block',
    'caverns_and_chasms:silver_ore',
    'galosphere:silver_ingot',
    'galosphere:silver_nugget',
    'galosphere:silver_block',
    'galosphere:raw_silver',
    'galosphere:raw_silver_block',
    'galosphere:silver_ore',
    'galosphere:deepslate_silver_ore',
    'oreganized:silver_ore',
    'oreganized:deepslate_silver_ore',
    'spelunkery:andesite_silver_ore',
    'spelunkery:diorite_silver_ore',
    'spelunkery:granite_silver_ore',
    'spelunkery:tuff_silver_ore',
    'create:zinc_ingot',
    'create:zinc_nugget',
    'create:zinc_block',
    'create:raw_zinc',
    'create:raw_zinc_block',
    'spelunkery:raw_zinc_nugget',
    'create:crushed_raw_zinc',
    'create:raw_zinc_block',
    'create:zinc_ore',
    'create:deepslate_zinc_ore',
    'spelunkery:andesite_zinc_ore',
    'spelunkery:diorite_zinc_ore',
    'spelunkery:granite_zinc_ore',
    'create:brass_ingot',
    'create:brass_nugget',
    'create:brass_sheet',
    'create:brass_block',
    'createaddition:electrum_ingot',
    'createaddition:electrum_nugget',
    'createaddition:electrum_block',
    'createaddition:brass_rod',
    'tconstruct:cobalt_ingot',
    'tconstruct:cobalt_nugget',
    'tconstruct:cobalt_block',
    'tconstruct:raw_cobalt',
    'tconstruct:raw_cobalt_block',
    'tconstruct:cobalt_ore',
    'tconstruct:gold_bars',
    //'tconstruct:rose_gold_block',
    'spelunkery:wooden_channel',
    'spelunkery:wooden_sluice',
    'spelunkery:stone_channel',
    'spelunkery:stone_sluice',
    'caverns_and_chasms:calcite_stairs',
    'caverns_and_chasms:calcite_wall',
    'caverns_and_chasms:calcite_slab',
    'caverns_and_chasms:tuff_stairs', 
    'caverns_and_chasms:tuff_slab', 
    'caverns_and_chasms:tuff_wall', 
    'caverns_and_chasms:polished_tuff', 
    'caverns_and_chasms:polished_tuff_stairs', 
    'caverns_and_chasms:polished_tuff_slab',
    'create:crushed_raw_osmium',
    'create:crushed_raw_platinum',
    'create:crushed_raw_tin',
    'create:crushed_raw_quicksilver',
    'create:crushed_raw_nickel',
    'create:crushed_raw_uranium',
    'create:crushed_raw_aluminum',
    'create:experience_nugget',
    'create:experience_block',
    'create:sand_paper',
    'create:red_sand_paper',
    'create:handheld_worldshaper',
    'create:creative_motor',
    'create:creative_fluid_tank',
    'create:creative_crate',
    'create:creative_blaze_cake',
    'oreganized:bush_hammer',

    // Farmers Delight
    'farmersdelight:flint_knife',

    // Quark Tuff Blocks
    'quark:polished_tuff', 
    'quark:tuff_bricks', 
    'quark:chiseled_tuff_bricks', 
    'quark:tuff_bricks_wall', 
    'quark:tuff_bricks_slab', 
    'quark:tuff_bricks_stairs', 
    'quark:tuff_slab', 
    'quark:tuff_stairs', 
    'quark:polished_tuff_slab', 
    'quark:polished_tuff_stairs',
    'quark:tuff_wall'

*/
    
  ];

  removeTags.forEach((item) => {
    event.removeAllTagsFrom(item)
    event.add('girlfriendcraft:disabled', item)
  });

})