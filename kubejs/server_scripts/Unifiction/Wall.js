

let wallBlocks = [
    { tag: 'minecraft:cobblestone_blocks', block: 'cobblestone' },
    { tag: 'minecraft:mossy_cobblestone_blocks', block: 'mossy_cobblestone' },
    { tag: 'minecraft:stone_blocks', block: 'stone_brick' },
    { tag: 'minecraft:mossy_stone_blocks', block: 'mossy_stone_brick' },
    { tag: 'minecraft:granite_blocks', block: 'granite' },
    { tag: 'minecraft:andesite_blocks', block: 'andesite' },
    { tag: 'minecraft:diorite_blocks', block: 'diorite' },
    { tag: 'minecraft:deepslate_blocks', block: 'polished_deepslate' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate_brick' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate_tile' },
    { tag: 'minecraft:cobbled_deepslate_blocks', block: 'cobbled_deepslate' },
    { tag: 'minecraft:sandstone_blocks', block: 'sandstone' },
    { tag: 'minecraft:red_sandstone_blocks', block: 'red_sandstone' },
    { tag: 'minecraft:prismarine_blocks', block: 'prismarine' },
    { tag: 'minecraft:blackstone_blocks', block: 'blackstone' },
    { tag: 'minecraft:blackstone_blocks', block: 'polished_blackstone' },

    { tag: 'minecraft:brick_blocks', block: 'brick' },
    { tag: 'minecraft:mud_brick_blocks', block: 'mud_brick' },
    { tag: 'minecraft:nether_brick_blocks', block: 'nether_brick' },
    { tag: 'minecraft:red_nether_brick_blocks', block: 'red_nether_brick' },
    { tag: 'minecraft:blackstone_blocks', block: 'polished_blackstone_brick' },
    { tag: 'minecraft:end_stone_blocks', block: 'end_stone_brick' },

 
  ];

  let ModId = 'minecraft'



  ServerEvents.tags('item', event => {

    wallBlocks.forEach(entry => {

    event.add(entry.tag, ModId + ':' + entry.block + '_wall');

    })
})

ServerEvents.recipes(event => {
    wallBlocks.forEach(entry => {

    event.stonecutting(ModId +':' + entry.block + '_wall', '#' + entry.tag)

    event.remove({ output: ModId +':' + entry.block + '_wall', type: 'minecraft:stonecutting' });
    
    })  
})
