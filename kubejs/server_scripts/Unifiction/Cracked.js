

let crackedBlocks = [
    { tag: 'minecraft:stone_blocks', block: 'stone_bricks' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate_bricks' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate_tiles' },
    { tag: 'minecraft:nether_brick_blocks', block:  'nether_bricks'},
    { tag: 'minecraft:blackstone_blocks', block: 'polished_blackstone_bricks' }

  ];

  let ModId = 'minecraft'
 





  ServerEvents.tags('item', event => {

    crackedBlocks.forEach(entry => {

    event.add(entry.tag, ModId + ':cracked_' + entry.block);

    })
})

ServerEvents.recipes(event => {
    crackedBlocks.forEach(entry => {

    event.stonecutting(ModId+':cracked_' + entry.block, '#' + entry.tag)

    event.custom({
    type: 'create:item_application',
    ingredients: [
        { item: ModId+':' + entry.block },
        { item: 'another_furniture:furniture_hammer' }
    ],
    results: [
        { item: ModId+':cracked_' + entry.block }
    ]
});
          
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [{ item: ModId+':' + entry.block}],
        tool: { item :'another_furniture:furniture_hammer' },
        result: [{item: ModId+':cracked_' + entry.block}]
    });

        
    })
    
})
