

let slabBlocks = [
    { tag: 'minecraft:stone_', block: 'stone' },
    { tag: 'minecraft:cobblestone_', block: 'cobblestone' },
    { tag: 'minecraft:mossy_cobblestone_', block: 'mossy_cobblestone' },
    { tag: 'minecraft:stone_', block: 'smooth_stone' },
    { tag: 'minecraft:stone_', block: 'stone_brick' },
    { tag: 'minecraft:mossy_stone_', block: 'mossy_stone_brick' },
    { tag: 'minecraft:granite_', block: 'granite' },
    { tag: 'minecraft:granite_', block: 'polished_granite' },
    { tag: 'minecraft:andesite_', block: 'andesite' },
    { tag: 'minecraft:andesite_', block: 'polished_andesite' },
    { tag: 'minecraft:diorite_', block: 'diorite' },
    { tag: 'minecraft:diorite_', block: 'polished_diorite' },
    { tag: 'minecraft:deepslate_', block: 'polished_deepslate' },
    { tag: 'minecraft:deepslate_', block: 'deepslate_brick' },
    { tag: 'minecraft:deepslate_', block: 'deepslate_tile' },
    { tag: 'minecraft:cobbled_deepslate_', block: 'cobbled_deepslate' },
    { tag: 'minecraft:sandstone_', block: 'sandstone' },
    { tag: 'minecraft:sandstone_', block: 'smooth_sandstone' },
    { tag: 'minecraft:red_sandstone_', block: 'red_sandstone' },
    { tag: 'minecraft:red_sandstone_', block: 'smooth_red_sandstone' },
    { tag: 'minecraft:sandstone_', block: 'cut_sandstone' },
    { tag: 'minecraft:red_sandstone_', block: 'cut_red_sandstone' },
    { tag: 'minecraft:prismarine_', block: 'prismarine' },
    { tag: 'minecraft:dark_prismarine_', block: 'dark_prismarine' },
    { tag: 'minecraft:blackstone_', block: 'blackstone' },
    { tag: 'minecraft:blackstone_', block: 'polished_blackstone' },
    { tag: 'minecraft:quartz_', block: 'smooth_quartz' },

    { tag: 'minecraft:waxed_copper_', block: 'waxed_cut_copper' },
    { tag: 'minecraft:waxed_copper_', block: 'waxed_exposed_cut_copper' },
    { tag: 'minecraft:waxed_copper_', block: 'waxed_weathered_cut_copper' },
    { tag: 'minecraft:waxed_copper_', block: 'waxed_oxidized_cut_copper' },

    { tag: 'minecraft:copper_', block: 'cut_copper' },
    { tag: 'minecraft:copper_', block: 'exposed_cut_copper' },
    { tag: 'minecraft:copper_', block: 'weathered_cut_copper' },
    { tag: 'minecraft:copper_', block: 'oxidized_cut_copper' },

    { tag: 'minecraft:brick_', block: 'brick' },
    { tag: 'minecraft:mud_brick_', block: 'mud_brick' },
    { tag: 'minecraft:prismarine_', block: 'prismarine_brick' },
    { tag: 'minecraft:nether_brick_', block: 'nether_brick' },
    { tag: 'minecraft:red_nether_brick_', block: 'red_nether_brick' },
    { tag: 'minecraft:blackstone_', block: 'polished_blackstone_brick' },
    { tag: 'minecraft:end_stone_', block: 'end_stone_brick' },

    { tag: 'minecraft:purpur_', block: 'purpur' },
    { tag: 'minecraft:quartz_', block: 'quartz' }
 
  ];

  let ModId = 'minecraft'



  ServerEvents.tags('item', event => {

    slabBlocks.forEach(entry => {

    event.add(entry.tag + 'slabs', ModId + ':' + entry.block + '_slab');

    })
})

ServerEvents.recipes(event => {
    slabBlocks.forEach(entry => {

    event.stonecutting(ModId +':' + entry.block + '_slab', '#' + entry.tag  + 'slabs')
    event.stonecutting(Item.of(ModId +':' + entry.block + '_slab',2), '#' + entry.tag  + 'blocks')

    event.remove({ output: ModId +':' + entry.block + '_slab', type: 'minecraft:stonecutting' });
    
    })  
})
