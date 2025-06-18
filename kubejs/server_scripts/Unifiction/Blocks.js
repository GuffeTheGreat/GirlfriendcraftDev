

let blockBlocks = [
  { tag: 'minecraft:stone_blocks', block: 'stone' },
    { tag: 'minecraft:cobblestone_blocks', block: 'cobblestone' },
    { tag: 'minecraft:mossy_cobblestone_blocks', block: 'mossy_cobblestone' },
    { tag: 'minecraft:stone_blocks', block: 'smooth_stone' },
    { tag: 'minecraft:stone_blocks', block: 'stone_bricks' },
    { tag: 'minecraft:mossy_stone_blocks', block: 'mossy_stone_bricks' },
    { tag: 'minecraft:granite_blocks', block: 'granite' },
    { tag: 'minecraft:andesite_blocks', block: 'andesite' },
    { tag: 'minecraft:diorite_blocks', block: 'diorite' },
    { tag: 'minecraft:granite_blocks', block: 'polished_granite' },
    { tag: 'minecraft:andesite_blocks', block: 'polished_andesite' },
    { tag: 'minecraft:diorite_blocks', block: 'polished_diorite' },
    { tag: 'minecraft:tuff_blocks', block: 'tuff' },
    { tag: 'minecraft:calcite_blocks', block: 'calcite' },
    { tag: 'minecraft:dripstone_blocks', block: 'dripstone_block' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate' },
    { tag: 'minecraft:deepslate_blocks', block: 'polished_deepslate' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate_bricks' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate_tiles' },
    { tag: 'minecraft:cobbled_deepslate_blocks', block: 'cobbled_deepslate' },
    { tag: 'minecraft:sandstone_blocks', block: 'sandstone' },
    { tag: 'minecraft:red_sandstone_blocks', block: 'red_sandstone' },
    { tag: 'minecraft:sandstone_blocks', block: 'cut_sandstone' },
    { tag: 'minecraft:red_sandstone_blocks', block: 'cut_red_sandstone' },
    { tag: 'minecraft:sandstone_blocks', block: 'smooth_sandstone' },
    { tag: 'minecraft:red_sandstone_blocks', block: 'smooth_red_sandstone' },
    { tag: 'minecraft:prismarine_blocks', block: 'prismarine' },
    { tag: 'minecraft:prismarine_blocks', block: 'prismarine_bricks' },
    { tag: 'minecraft:dark_prismarine_blocks', block: 'dark_prismarine' },
    { tag: 'minecraft:netherrack_blocks', block: 'netherrack' },
    { tag: 'minecraft:blackstone_blocks', block: 'blackstone' },
    { tag: 'minecraft:blackstone_blocks', block: 'polished_blackstone' },

    { tag: 'minecraft:basalt_blocks', block: 'basalt' },
    { tag: 'minecraft:basalt_blocks', block: 'polished_basalt' },
    { tag: 'minecraft:basalt_blocks', block: 'smooth_basalt' },

    { tag: 'minecraft:brick_blocks', block: 'bricks' },
    { tag: 'minecraft:quartz_blocks', block: 'quartz_block' },
    { tag: 'minecraft:quartz_blocks', block: 'quartz_bricks' },
    { tag: 'minecraft:mud_brick_blocks', block: 'mud_bricks' },
    { tag: 'minecraft:nether_brick_blocks', block: 'nether_bricks' },
    { tag: 'minecraft:red_nether_brick_blocks', block: 'red_nether_bricks' },
    { tag: 'minecraft:blackstone_blocks', block: 'polished_blackstone_bricks' },
    { tag: 'minecraft:end_stone_blocks', block: 'end_stone' },
    { tag: 'minecraft:end_stone_blocks', block: 'end_stone_bricks' },
    { tag: 'minecraft:purpur_blocks', block: 'purpur_block' },

    { tag: 'minecraft:copper_blocks', block: 'cut_copper' },
    { tag: 'minecraft:copper_blocks', block: 'exposed_cut_copper' },
    { tag: 'minecraft:copper_blocks', block: 'weathered_cut_copper' },
    { tag: 'minecraft:copper_blocks', block: 'oxidized_cut_copper' },

    { tag: 'minecraft:copper_block_blocks', block: 'copper_block' },
    { tag: 'minecraft:copper_block_blocks', block: 'exposed_copper' },
    { tag: 'minecraft:copper_block_blocks', block: 'weathered_copper' },
    { tag: 'minecraft:copper_block_blocks', block: 'oxidized_copper' },

    { tag: 'minecraft:waxed_copper_blocks', block: 'waxed_cut_copper' },
    { tag: 'minecraft:waxed_copper_blocks', block: 'waxed_exposed_cut_copper' },
    { tag: 'minecraft:waxed_copper_blocks', block: 'waxed_weathered_cut_copper' },
    { tag: 'minecraft:waxed_copper_blocks', block: 'waxed_oxidized_cut_copper' },

    { tag: 'minecraft:waxed_copper_block_blocks', block: 'waxed_copper_block' },
    { tag: 'minecraft:waxed_copper_block_blocks', block: 'waxed_exposed_copper' },
    { tag: 'minecraft:waxed_copper_block_blocks', block: 'waxed_weathered_copper' },
    { tag: 'minecraft:waxed_copper_block_blocks', block: 'waxed_oxidized_copper' },

    { tag: 'minecraft:glass_blocks', block: 'glass' },
    { tag: 'minecraft:glass_pane', block: 'glass_pane' },
 
  ];

  let ModId = 'minecraft'



  ServerEvents.tags('item', event => {

    blockBlocks.forEach(entry => {

    event.add(entry.tag, ModId + ':' + entry.block);

    })
})

ServerEvents.recipes(event => {
    blockBlocks.forEach(entry => {

    event.stonecutting(ModId +':' + entry.block, '#' + entry.tag)

    event.remove({ output: ModId +':' + entry.block, type: 'minecraft:stonecutting' });
    
    })  
})
