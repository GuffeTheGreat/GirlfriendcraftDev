
let getModID = kind  => {

    switch (kind) {
            case 'sugilite':
                return 'caverns_and_chasms';
            case 'pink_salt':
            case 'rose_pink_salt':
            case 'pastel_pink_salt':
                return 'galosphere';
            case 'dolerite':
            case 'saffron_travertine':
            case 'persimmon_travertine':
            case 'ivory_travertine':
            case 'peach_travertine':
                return 'atmospheric';
            case 'seared_stone':
            case 'scorched_stone':
                return 'tconstruct';
            case 'livingrock':
            case 'shimmerrock':
                return 'botania';
            case 'nephrite':
                return 'spelunkery';
            case 'argillite':
            case 'chalk':
                return 'regions_unexplored';
            case 'jasper':
            case 'shale':
            case 'permafrost':
            case 'limestone':
            case 'myalite':
            case 'soul_sandstone':
                return 'quark';
        }

}

let getStoneType = kind => (type) => {

let modID = getModID(kind);

switch (type) {
            case 'block_tag':
                return 'minecraft:' + kind + '_blocks'
            case 'slab_tag':
                return 'minecraft:' + kind + '_slabs'
            case 'small_brick':
                return 'stonezone:c/' + modID + '/small_' + kind + '_bricks';
            case 'cut':
                return 'stonezone:c/' + modID + '/cut_' + kind;
            case 'polished':
                return 'stonezone:c/' + modID + '/polished_cut_' + kind;
            case 'brick':
                return 'stonezone:c/' + modID + '/cut_' + kind + '_bricks';


            case 'small_brick_slab':
                return 'stonezone:c/' + modID + '/small_' + kind + '_brick_slab';
            case 'cut_slab':
                return 'stonezone:c/' + modID + '/cut_' + kind + '_slab';
            case 'polished_slab':
                return 'stonezone:c/' + modID + '/polished_cut_' + kind + '_slab';
            case 'brick_slab':
                return 'stonezone:c/' + modID + '/cut_' + kind + '_brick_slab';


            case 'small_brick_wall':
                return 'stonezone:c/' + modID + '/small_' + kind + '_brick_wall';
            case 'cut_wall':
                return 'stonezone:c/' + modID + '/cut_' + kind + '_wall';
            case 'polished_wall':
                return 'stonezone:c/' + modID + '/polished_cut_' + kind + '_wall';
            case 'brick_wall':
                return 'stonezone:c/' + modID + '/cut_' + kind + '_brick_wall';


            case 'small_brick_stairs':
                return 'stonezone:c/' + modID + '/small_' + kind + '_brick_stairs';
            case 'cut_stairs':
                return 'stonezone:c/' + modID + '/cut_' + kind + '_stairs';
            case 'polished_stairs':
                return 'stonezone:c/' + modID + '/polished_cut_' + kind + '_stairs';
            case 'brick_stairs':
                return 'stonezone:c/' + modID + '/cut_' + kind + '_brick_stairs';

            case 'pillar':
                return 'stonezone:c/' + modID + '/' + kind + '_pillar';
            case 'layered':
                return 'stonezone:c/' + modID + '/layered_' + kind;

        }
}

let stoneKinds = [
    'sugilite',
    'pink_salt',
    'rose_pink_salt',
    'pastel_pink_salt',
    'dolerite',
    'seared_stone',
    'scorched_stone',
    'myalite',
    'soul_sandstone',
    'jasper',
    'shale',
    'limestone',
    'permafrost',
    'argillite',
    'chalk',
    'nephrite',
    'livingrock',
    'shimmerrock',
    'peach_travertine',
    'persimmon_travertine',
    'ivory_travertine',
    'saffron_travertine',
];


ServerEvents.tags('item', event => {

    stoneKinds.forEach(kind => {

        // Blocks
    let smallBrickId = getStoneType(kind)('small_brick');
    let cutId = getStoneType(kind)('cut');
    let polishedCutId = getStoneType(kind)('polished');
    let cutBrickId = getStoneType(kind)('brick');
    
        // Slabs
    let smallBrickSlabId = getStoneType(kind)('small_brick_slab');
    let cutSlabId = getStoneType(kind)('cut_slab');
    let polishedCutSlabId = getStoneType(kind)('polished_slab');
    let cutBrickSlabId = getStoneType(kind)('brick_slab');

        // Stairs
    let smallBrickStairsId = getStoneType(kind)('small_brick_stairs');
    let cutStairsId = getStoneType(kind)('cut_stairs');
    let polishedCutStairsId = getStoneType(kind)('polished_stairs');
    let cutBrickStairsId = getStoneType(kind)('brick_stairs');

        // Walls
    let smallBrickWallId = getStoneType(kind)('small_brick_wall');
    let cutWallId = getStoneType(kind)('cut_wall');
    let polishedCutWallId = getStoneType(kind)('polished_wall');
    let cutBrickWallId = getStoneType(kind)('brick_wall');

        // Layered and Pillar
    let layeredId = getStoneType(kind)('layered');
    let pillarId = getStoneType(kind)('pillar');

        // Tags
    let blockTagId = getStoneType(kind)('block_tag');
    let slabTagId = getStoneType(kind)('slab_tag');

    // Add Blocks to Tags
    event.add(blockTagId, smallBrickId);
    event.add(blockTagId, polishedCutId);
    event.add(blockTagId, cutBrickId);

    event.add(blockTagId, smallBrickWallId);
    event.add(blockTagId, polishedCutWallId);
    event.add(blockTagId, cutBrickWallId);

    event.add(blockTagId, smallBrickStairsId);
    event.add(blockTagId, polishedCutStairsId);
    event.add(blockTagId, cutBrickStairsId);

    if (kind != 'chalk' && kind != 'jasper' && kind != 'shale' && kind != 'myalite') {
    event.add(blockTagId, pillarId);
    }
    event.add(blockTagId, layeredId);

    // Add Blocks to Tags
    event.add(slabTagId, smallBrickSlabId);
    event.add(slabTagId, polishedCutSlabId);
    event.add(slabTagId, cutBrickSlabId);

     if (kind != 'ivory_travertine' && kind != 'persimmon_travertine' && kind != 'saffron_travertine' && kind != 'peach_travertine' && kind != 'sculk_stone' && kind != 'gloomslate') {
    // Cut Recipes
    event.add(blockTagId, cutId);
    event.add(blockTagId, cutStairsId);
    event.add(blockTagId, cutWallId);
    event.add(slabTagId, cutSlabId);
     }
    })
})

ServerEvents.recipes(event => {
    stoneKinds.forEach(kind => {
        
            // Blocks
    let smallBrickId = getStoneType(kind)('small_brick');
    let cutId = getStoneType(kind)('cut');
    let polishedCutId = getStoneType(kind)('polished');
    let cutBrickId = getStoneType(kind)('brick');
    
        // Slabs
    let smallBrickSlabId = getStoneType(kind)('small_brick_slab');
    let cutSlabId = getStoneType(kind)('cut_slab');
    let polishedCutSlabId = getStoneType(kind)('polished_slab');
    let cutBrickSlabId = getStoneType(kind)('brick_slab');

        // Stairs
    let smallBrickStairsId = getStoneType(kind)('small_brick_stairs');
    let cutStairsId = getStoneType(kind)('cut_stairs');
    let polishedCutStairsId = getStoneType(kind)('polished_stairs');
    let cutBrickStairsId = getStoneType(kind)('brick_stairs');

        // Walls
    let smallBrickWallId = getStoneType(kind)('small_brick_wall');
    let cutWallId = getStoneType(kind)('cut_wall');
    let polishedCutWallId = getStoneType(kind)('polished_wall');
    let cutBrickWallId = getStoneType(kind)('brick_wall');

    

         // Layered and Pillar
    let layeredId = getStoneType(kind)('layered');
    let pillarId = getStoneType(kind)('pillar');

        // Tags
    let blockTagId = getStoneType(kind)('block_tag');
    let slabTagId = getStoneType(kind)('slab_tag');

    event.remove({ id: smallBrickSlabId + '_recycling' })
    event.remove({ id: polishedCutSlabId + '_recycling' })
    event.remove({ id: cutBrickSlabId + '_recycling' })  

    event.remove({ id: smallBrickStairsId })
    event.remove({ id: polishedCutStairsId })
    event.remove({ id: cutBrickStairsId })  

    event.stonecutting(smallBrickId, '#' + blockTagId)
    event.stonecutting(polishedCutId, '#' + blockTagId)
    event.stonecutting(cutBrickId, '#' + blockTagId)

    event.stonecutting(smallBrickWallId, '#' + blockTagId)
    event.stonecutting(polishedCutWallId, '#' + blockTagId)
    event.stonecutting(cutBrickWallId, '#' + blockTagId)

    event.stonecutting(smallBrickStairsId, '#' + blockTagId)
    event.stonecutting(polishedCutStairsId, '#' + blockTagId)
    event.stonecutting(cutBrickStairsId, '#' + blockTagId)

    event.stonecutting(layeredId, '#' + blockTagId)
    
    if (kind != 'chalk' && kind != 'jasper' && kind != 'shale' && kind != 'myalite') {
    event.stonecutting(pillarId, '#' + blockTagId)
    }

    event.stonecutting(Item.of(smallBrickSlabId,2), '#' + blockTagId)
    event.stonecutting(Item.of(polishedCutSlabId,2), '#' + blockTagId)
    event.stonecutting(Item.of(cutBrickSlabId,2), '#' + blockTagId)

    event.stonecutting(smallBrickSlabId, '#' + slabTagId)
    event.stonecutting(polishedCutSlabId, '#' + slabTagId)
    event.stonecutting(cutBrickSlabId, '#' + slabTagId)



          //Cut
    event.shaped(Item.of(polishedCutId,4), [
    'AA',
    'AA'
  ], {
    A: cutId
  }) 
          //Cut
    event.shaped(Item.of(cutBrickId,4), [
    'AA',
    'AA'
  ], {
    A: polishedCutId
  }) 

  event.shaped(
            Item.of(smallBrickStairsId, 3),
            [
              'A ',
              'AA'
            ],
            {
              A: smallBrickId
            }
          )

          event.shaped(
            Item.of(smallBrickStairsId, 6),
            [
              'A  ',
              'AA ',
              'AAA'
            ],
            {
              A: smallBrickId
            }
          )  

          event.shaped(
            Item.of(cutBrickStairsId, 3),
            [
              'A ',
              'AA'
            ],
            {
              A: cutBrickId
            }
          )

          event.shaped(
            Item.of(cutBrickSlabId, 6),
            [
              'A  ',
              'AA ',
              'AAA'
            ],
            {
              A: cutBrickId
            }
          )  

          event.shaped(
            Item.of(polishedCutStairsId, 3),
            [
              'A ',
              'AA'
            ],
            {
              A: polishedCutId
            }
          )

          event.shaped(
            Item.of(polishedCutStairsId, 6),
            [
              'A  ',
              'AA ',
              'AAA'
            ],
            {
              A: polishedCutId
            }
          )  

    

         if (kind != 'ivory_travertine' && kind != 'persimmon_travertine' && kind != 'saffron_travertine' && kind != 'peach_travertine' && kind != 'sculk_stone' && kind != 'gloomslate') {
    
        // Cut Recipes
    event.shaped(Item.of(cutId,4), [
    'AA',
    'AA'
  ], {
    A: smallBrickId
  }) 
                  event.shaped(
            Item.of(cutStairsId, 3),
            [
              'A ',
              'AA'
            ],
            {
              A: cutId
            }
          )

          event.shaped(
            Item.of(cutStairsId, 6),
            [
              'A  ',
              'AA ',
              'AAA'
            ],
            {
              A: cutId
            }
          ) 

          event.remove({ id: cutSlabId + '_recycling' })
    event.remove({ id: cutStairsId })
    event.stonecutting(cutId, '#' + blockTagId)
    event.stonecutting(cutWallId, '#' + blockTagId)
    event.stonecutting(cutStairsId, '#' + blockTagId)
    event.stonecutting(Item.of(cutSlabId,2), '#' + blockTagId)
    event.stonecutting(cutSlabId, '#' + slabTagId)

        }

    })

        })