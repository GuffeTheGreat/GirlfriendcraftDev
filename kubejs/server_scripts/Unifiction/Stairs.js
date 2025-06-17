

let stairsBlocks = [
    { tag: 'minecraft:stone_blocks', block: 'stone' },
    { tag: 'minecraft:cobblestone_blocks', block: 'cobblestone' },
    { tag: 'minecraft:mossy_cobblestone_blocks', block: 'mossy_cobblestone' },
    { tag: 'minecraft:granite_blocks', block: 'granite' },
    { tag: 'minecraft:granite_blocks', block: 'polished_granite' },
    { tag: 'minecraft:andesite_blocks', block: 'andesite' },
    { tag: 'minecraft:andesite_blocks', block: 'polished_andesite' },
    { tag: 'minecraft:diorite_blocks', block: 'diorite' },
    { tag: 'minecraft:diorite_blocks', block: 'polished_diorite' },
    { tag: 'minecraft:deepslate_blocks', block: 'polished_deepslate' },
    { tag: 'minecraft:cobbled_deepslate_blocks', block: 'cobbled_deepslate' },
    { tag: 'minecraft:sandstone_blocks', block: 'sandstone' },
    { tag: 'minecraft:sandstone_blocks', block: 'smooth_sandstone' },
    { tag: 'minecraft:red_sandstone_blocks', block: 'red_sandstone' },
    { tag: 'minecraft:red_sandstone_blocks', block: 'smooth_red_sandstone' },
    { tag: 'minecraft:prismarine_blocks', block: 'prismarine' },
    { tag: 'minecraft:dark_prismarine_blocks', block: 'dark_prismarine' },
    { tag: 'minecraft:blackstone_blocks', block: 'blackstone' },
    { tag: 'minecraft:blackstone_blocks', block: 'polished_blackstone' },
    { tag: 'minecraft:quartz_blocks', block: 'smooth_quartz' },

    { tag: 'minecraft:waxed_copper_blocks', block: 'waxed_cut_copper' },
    { tag: 'minecraft:waxed_copper_blocks', block: 'waxed_exposed_cut_copper' },
    { tag: 'minecraft:waxed_copper_blocks', block: 'waxed_weathered_cut_copper' },
    { tag: 'minecraft:waxed_copper_blocks', block: 'waxed_oxidized_cut_copper' },

    { tag: 'minecraft:copper_blocks', block: 'cut_copper' },
    { tag: 'minecraft:copper_blocks', block: 'exposed_cut_copper' },
    { tag: 'minecraft:copper_blocks', block: 'weathered_cut_copper' },
    { tag: 'minecraft:copper_blocks', block: 'oxidized_cut_copper' },
     


  ];

  let ModId = 'minecraft'
 





  ServerEvents.tags('item', event => {

    stairsBlocks.forEach(entry => {

    event.add(entry.tag, ModId + ':' + entry.block + '_stairs');

    })
})

ServerEvents.recipes(event => {
    stairsBlocks.forEach(entry => {

    event.stonecutting(ModId +':' + entry.block + '_stairs', '#' + entry.tag)

    event.remove({ output: ModId +':' + entry.block + '_stairs' });

            event.shaped(
            Item.of(ModId +':' + entry.block + '_stairs', 3),
            [
              'A ',
              'AA'
            ],
            {
              A: ModId +':' + entry.block
            }
          )

          event.shaped(
            Item.of(ModId +':' + entry.block + '_stairs', 6),
            [
              'A  ',
              'AA ',
              'AAA'
            ],
            {
              A: ModId +':' + entry.block
            }
          )  



        
    })  
})
