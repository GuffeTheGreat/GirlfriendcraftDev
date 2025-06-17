

let stairsBrickBlocks = [
    { tag: 'minecraft:stone_blocks', block: 'stone_brick' },
    { tag: 'minecraft:mossy_stone_blocks', block: 'mossy_stone_brick' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate_brick' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate_tile' },
    { tag: 'minecraft:brick_blocks', block: 'brick' },
    { tag: 'minecraft:mud_brick_blocks', block: 'mud_brick' },
    { tag: 'minecraft:prismarine_blocks', block: 'prismarine_brick' },
    { tag: 'minecraft:nether_brick_blocks', block: 'nether_brick' },
    { tag: 'minecraft:red_nether_brick_blocks', block: 'red_nether_brick' },
    { tag: 'minecraft:blackstone_blocks', block: 'polished_blackstone_brick' },
    { tag: 'minecraft:end_stone_blocks', block: 'end_stone_brick' },
     


  ];

  let ModId = 'minecraft'
 





  ServerEvents.tags('item', event => {

    stairsBrickBlocks.forEach(entry => {

    event.add(entry.tag, ModId + ':' + entry.block + '_stairs');

    })
})

ServerEvents.recipes(event => {
    stairsBrickBlocks.forEach(entry => {

    event.stonecutting(ModId +':' + entry.block + '_stairs', '#' + entry.tag)

    event.remove({ output: ModId +':' + entry.block + '_stairs' });

            event.shaped(
            Item.of(ModId +':' + entry.block + '_stairs', 3),
            [
              'A ',
              'AA'
            ],
            {
              A: ModId +':' + entry.block + 's'
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
              A: ModId +':' + entry.block + 's'
            }
          )  



        
    })  
})
