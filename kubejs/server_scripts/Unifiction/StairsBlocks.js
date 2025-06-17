

let stairsblockBlocks = [
    { tag: 'minecraft:purpur_blocks', block: 'purpur' },
    { tag: 'minecraft:quartz_blocks', block: 'quartz' }


  ];

  let ModId = 'minecraft'
 





  ServerEvents.tags('item', event => {

    stairsblockBlocks.forEach(entry => {

    event.add(entry.tag, ModId + ':' + entry.block + '_stairs');

    })
})

ServerEvents.recipes(event => {
    stairsblockBlocks.forEach(entry => {

    event.stonecutting(ModId +':' + entry.block + '_stairs', '#' + entry.tag)

    event.remove({ output: ModId +':' + entry.block + '_stairs' });

            event.shaped(
            Item.of(ModId +':' + entry.block + '_stairs', 3),
            [
              'A ',
              'AA'
            ],
            {
              A: ModId +':' + entry.block + "_block"
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
              A: ModId +':' + entry.block + "_block"
            }
          )  



        
    })  
})
