

let chiseledBlocks = [
    { tag: 'minecraft:stone_blocks', block: 'stone_bricks' },
    { tag: 'minecraft:deepslate_blocks', block: 'deepslate' },
    { tag: 'minecraft:sandstone_blocks', block: 'sandstone' },
    { tag: 'minecraft:red_sandstone_blocks', block:  'red_sandstone'},
    { tag: 'minecraft:nether_brick_blocks', block: 'nether_bricks' },
    { tag: 'minecraft:blackstone_blocks', block:  'polished_blackstone'},
    { tag: 'minecraft:quartz_blocks', block:  'quartz_block'},

  ];

  let ModId = 'minecraft'
 





  ServerEvents.tags('item', event => {

    chiseledBlocks.forEach(entry => {

    event.add(entry.tag, ModId + ':chiseled_' + entry.block);

    })
})

ServerEvents.recipes(event => {
    chiseledBlocks.forEach(entry => {

    event.stonecutting(ModId + ':chiseled_' + entry.block, '#' + entry.tag)

    event.remove({ output: ModId+':chiseled_' + entry.block });

    event.custom({
    type: 'create:item_application',
    ingredients: [
        { item: ModId+':' + entry.block },
        { item: 'oreganized:scribe' }
    ],
    results: [
        { item: ModId+':chiseled_' + entry.block }
    ]
});
          
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [{ item: ModId+':' + entry.block}],
        tool: { item :'oreganized:scribe' },
        result: [{item: ModId+':chiseled_' + entry.block}]
    });

        
    })
    
})
