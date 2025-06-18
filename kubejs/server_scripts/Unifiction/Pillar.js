

let pillarBlocks = [
  
    { tag: 'minecraft:purpur_blocks', block: 'purpur' },
    { tag: 'minecraft:quartz_blocks', block: 'quartz' },

 
  ];

  let ModId = 'minecraft'



  ServerEvents.tags('item', event => {

    pillarBlocks.forEach(entry => {

    event.add(entry.tag, ModId + ':' + entry.block + '_pillar');

    })
})

ServerEvents.recipes(event => {
    pillarBlocks.forEach(entry => {

    event.stonecutting(ModId +':' + entry.block + '_pillar', '#' + entry.tag)

    event.remove({ output: ModId +':' + entry.block + '_pillar', type: 'minecraft:stonecutting' });
    
    })  
})
