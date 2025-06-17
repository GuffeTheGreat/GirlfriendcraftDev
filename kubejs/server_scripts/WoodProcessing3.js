
let getModId = sort => {

    switch (sort) {
    case 'oak':
    case 'birch':
    case 'jungle':
    case 'spruce':
    case 'acacia':
    case 'dark_oak':
    case 'mangrove':
    case 'cherry':
    case 'crimson': 
    case 'warped':
        return 'minecraft';
    case 'palm':
        return 'beachparty'
    case 'ancient': 
    case 'blossom':
        return 'quark'
    case 'pale_oak':
        return 'vanillabackport'
    case 'azalea':
        return 'caverns_and_chasms'    
    case 'bloom':
    case 'echo':
        return 'deeperdarker'
    case 'skyroot':
    case 'greenheart':
    case 'bloodshroom':
    case 'enderbark':
        return 'tconstruct'
    case 'mauve':
    case 'baobab':
    case 'blackwood':
    case 'cobalt':
    case 'brimwood':
    case    'cypress':
    case 'dead':
    case 'eucalyptus':
    case 'joshua':
    case 'kapok':
    case 'larch':
    case 'magnolia':
    case 'maple':
    case 'palm':
    case 'pine':
    case 'redwood':
    case 'socotra':
    case 'willow':
    case 'blue_bioshroom':
    case 'yellow_bioshroom':
    case 'green_bioshroom':
    case 'pink_bioshroom':
        return 'regions_unexplored'
    case 'grimwood':
    case 'aspen':
    case 'yucca':
    case 'morado':
    case 'kousa':
    case 'laurel':
    case 'rosewood':
        return 'atmospheric'
    case 'river':
        return 'upgrade_aquatic'
    }
    
}

let getWoodType = sort => (type) => {

    switch (type) {
        case 'logs':
        case 'blocks':
        case 'slabs':
        case 'storage_blocks':
            return 'minecraft:' + sort + '_' + type;
        case 'stripped_logs': 
            return 'minecraft:stripped_' + sort + '_logs';
        case 'unstripped_logs': 
            return 'minecraft:unstripped_' + sort + '_logs';
        case 'log':
            if (sort == 'pink_bioshroom' || sort == 'blue_bioshroom' || sort == 'yellow_bioshroom' || sort == 'green_bioshroom' || sort == 'crimson' || sort == 'warped') {
            return getModId(sort) + ":" + sort + '_stem';
            } else if (sort == 'bloom') {
            return 'deeperdarker:blooming_stem'
            } else {
            return getModId(sort) + ":" + sort + '_log';
            }
        case 'wood':
            if (sort == 'pink_bioshroom' || sort == 'blue_bioshroom' || sort == 'yellow_bioshroom' || sort == 'green_bioshroom' || sort == 'crimson' || sort == 'warped') {
            return getModId(sort) + ":" + sort + '_hyphae';
            } else if (sort == 'grimwood' || sort == 'rosewood' ) {
                return getModId(sort) + ":" + sort
            } else {
            return getModId(sort) + ":" + sort + '_wood';
            }
        case 'stripped_log':
            if (sort == 'pink_bioshroom' || sort == 'blue_bioshroom' || sort == 'yellow_bioshroom' || sort == 'green_bioshroom' || sort == 'crimson' || sort == 'warped') {
            return getModId(sort) + ":" + 'stripped_' + sort + '_stem';
            } else if (sort == 'bloom') {
            return 'deeperdarker:stripped_blooming_stem'
            } else {
            return getModId(sort) + ":" + 'stripped_' + sort + '_log';
            }
        case 'stripped_wood':
            if (sort == 'pink_bioshroom' || sort == 'blue_bioshroom' || sort == 'yellow_bioshroom' || sort == 'green_bioshroom' || sort == 'crimson' || sort == 'warped') {
            return getModId(sort) + ":" + 'stripped_' + sort + '_hyphae';
            } else if (sort == 'grimwood' || sort == 'rosewood' ) {
                return getModId(sort) + ":stripped_" + sort
            } else {
            return getModId(sort) + ":" + 'stripped_' + sort + '_wood';
            }
        case 'hollow_log':
            if (sort == 'crimson' || sort == 'warped') {
            return 'quark:hollow_' + sort + '_stem';
            } else if (getModId(sort) == 'quark' || getModId(sort) == 'minecraft') {
            return 'quark:hollow_' + sort + '_log';
            } else {
            return 'everycomp:q/' + getModId(sort) + '/hollow_' + sort + '_log';            
            }
        case 'planks':
        case 'stairs':
        case 'fence':
        case 'fence_gate':
        case 'door':
        case 'trapdoor':
        case 'pressure_plate':
        case 'button':
        case 'slab':
        case 'sign':
        case 'hanging_sign':
            if (getModId(sort) == 'quark' && type == 'stairs') {
                return 'quark:' + sort + '_planks_' + type;    
            } else if (getModId(sort) == 'quark' && type == 'slab') {
                return 'quark:' + sort + '_planks_' + type;    
            } else if (getModId(sort) == 'tconstruct' && type == 'stairs') {
                return 'tconstruct:' + sort + '_planks_' + type;    
            } else if (getModId(sort) == 'tconstruct' && type == 'slab') { 
                return 'tconstruct:' + sort + '_planks_' + type; 
            } else{
            return getModId(sort) + ":" + sort + '_' + type;
            }
        case 'stripped_post':
            if (getModId(sort) == 'quark' || getModId(sort) == 'minecraft') {
            return 'quark:stripped_' + sort + '_post';
            } else {
                return 'everycomp:q/' + getModId(sort) + '/stripped_' + sort + '_post'; 
            }
        case 'vertical_planks':
            if (getModId(sort) == 'quark' || getModId(sort) == 'minecraft') {
            return 'quark:vertical_' + sort + '_planks';
            } else {
                return 'everycomp:q/' + getModId(sort) + '/vertical_' + sort + '_planks'; 
            }
            
        case 'vertical_slab':
        case 'post':
        case 'ladder':
        case 'chest':
            if  (sort == 'oak' && type == 'ladder') {
            return 'minecraft:ladder';
            } else if (getModId(sort) == 'quark' && type == 'vertical_slab') {
                return 'quark:' + sort + '_planks_' + type;    
            } else if (getModId(sort) == 'quark' || getModId(sort) == 'minecraft') {
            return 'quark:' + sort + '_' + type;
            } else {
            return 'everycomp:q/' + getModId(sort) + '/' + sort + '_' + type; 
            }
        case 'bench':
        case 'shutter':
        case 'chair':
        case 'table':
        case 'flower_box':
        case 'shelf':
        case 'drawer':
            if (getModId(sort) == 'minecraft') {
            return 'another_furniture:' + sort + '_' + type;
            } else {
            return 'everycomp:af/' + getModId(sort) + '/' + sort + '_' + type    
            }     
        case 'cabinet':
            if (getModId(sort) == 'minecraft') {
            return 'farmersdelight:' + sort + '_' + type;
            } else {
            return 'everycomp:fd/' + getModId(sort) + '/' + sort + '_' + type    
            }      
        case 'window':
            if (getModId(sort) == 'minecraft') {
            return 'create:' + sort + '_' + type;
            } else {
            return 'everycomp:c/' + getModId(sort) + '/' + sort + '_' + type    
            }
        case 'sign_post':
          if (getModId(sort) == 'minecraft') {
            return 'supplementaries:' + type + '_' + sort;
            } else {
            return 'supplementaries:' + getModId(sort) + '/' + type + '_' + sort    
            }
        default:
             console.warn(`Unhandled wood type combination requested: id=${id}, type=${type}`);
             return null; 
    }
}

let woodTypes = [
    'oak',
    'birch',
    'jungle',
    'spruce',
    'acacia',
    'dark_oak',
    'mangrove',
    'cherry',
    'crimson', 
    'warped', 

    'palm',

    'ancient',
    'blossom',

    'pale_oak',

    'pine',
    'eucalyptus',

    'aspen',
    'yucca',
    'morado',
    'kousa',
    'laurel',
    'rosewood',

    //'river',


    
];

//let blockTypes = ['logs','stripped_logs','unstripped_logs','blocks','slabs','log', 'wood', 'hollow_log', 'stripped_log', 'stripped_wood','stairs','slab','fence','fence_gate','door','trapdoor','pressure_plate','button','sign','hanging_sign','vertical_planks'];

ServerEvents.tags('item', event => {

    woodTypes.forEach(sort => {

    let unstrippedLogsId = getWoodType(sort)('unstripped_logs');
    let logId = getWoodType(sort)('log');
    let woodId = getWoodType(sort)('wood');
    let hollowLogId = getWoodType(sort)('hollow_log');

    let strippedLogsId = getWoodType(sort)('stripped_logs');
    let strippedLogId = getWoodType(sort)('stripped_log');
    let strippedWoodId = getWoodType(sort)('stripped_wood');

    let logsId = getWoodType(sort)('logs');

    let blocksId = getWoodType(sort)('blocks');
    let planksId = getWoodType(sort)('planks');
    let stairsId = getWoodType(sort)('stairs');
    let fenceId = getWoodType(sort)('fence');
    let fenceGateId = getWoodType(sort)('fence_gate');
    let doorId = getWoodType(sort)('door');
    let trapdoorId = getWoodType(sort)('trapdoor');
    let pressurePlateId = getWoodType(sort)('pressure_plate');
    let buttonId = getWoodType(sort)('button');
    let verticalPlanksId = getWoodType(sort)('vertical_planks');
    let signId = getWoodType(sort)('sign');
    let hangingSignId = getWoodType(sort)('hanging_sign');

    let chairId = getWoodType(sort)('chair');
    let tableId = getWoodType(sort)('table');
    let benchId = getWoodType(sort)('bench');
    let flowerBoxId = getWoodType(sort)('flower_box');
    let shutterId = getWoodType(sort)('shutter');
    let shelfId = getWoodType(sort)('shelf');

    let windowId = getWoodType(sort)('shelf');

    let slabId = getWoodType(sort)('slab');
    let verticalSlabId = getWoodType(sort)('vertical_slab');
    let slabsId = getWoodType(sort)('slabs');

    let storageBlocksId = getWoodType(sort)('storage_blocks');
    let chestId = getWoodType(sort)('chest');
    let cabinetId = getWoodType(sort)('cabinet');
    let drawerId = getWoodType(sort)('drawer');

    let signPostId = getWoodType(sort)('sign_post');

    // Add Logs to Tags
    event.add(unstrippedLogsId, logId);
    event.add(unstrippedLogsId, woodId);
    event.add(unstrippedLogsId, hollowLogId);

    event.add('minecraft:unstripped_logs', '#'+unstrippedLogsId);

    // Add Unstripped Logs to Tags
    event.add(strippedLogsId, strippedLogId);
    event.add(strippedLogsId, strippedWoodId);

    event.add('minecraft:stripped_logs', '#'+strippedLogsId);

    // Complete Tags
    event.add(logsId, '#'+strippedLogsId);
    event.add(logsId, '#'+unstrippedLogsId);
    event.add('minecraft:logs', '#'+logsId);

    // Block Types
    event.add(blocksId, planksId);
    event.add(blocksId, stairsId);
    event.add(blocksId, fenceId);
    event.add(blocksId, fenceGateId);
    event.add(blocksId, doorId);
    event.add(blocksId, trapdoorId);
    event.add(blocksId, pressurePlateId);
    event.add(blocksId, buttonId);
    event.add(blocksId, verticalPlanksId);
    event.add(blocksId, signId);
    event.add(blocksId, hangingSignId);

    event.add(blocksId, chairId);
    event.add(blocksId, tableId);
    event.add(blocksId, shelfId);
    event.add(blocksId, flowerBoxId);
    event.add(blocksId, shutterId);
    event.add(blocksId, benchId);

    event.add(blocksId, windowId);

    event.add(slabsId, slabId);
    event.add(slabsId, verticalSlabId);
    event.add(slabsId, signPostId);

    event.add(storageBlocksId, chestId);
    event.add(storageBlocksId, cabinetId);
    event.add(storageBlocksId, drawerId);

    })


    // Block Types
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_planks');
    event.add("minecraft:bamboo_blocks", 'quark:vertical_bamboo_planks');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_mosaic');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_stairs');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_mosaic_stairs');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_fence');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_fence_gate');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_door');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_trapdoor');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_pressure_plate');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_button');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_sign');
    event.add("minecraft:bamboo_blocks", 'minecraft:bamboo_hanging_sign');

    event.add("minecraft:bamboo_blocks", 'another_furniture:bamboo_chair');
    event.add("minecraft:bamboo_blocks", 'another_furniture:bamboo_table');
    event.add("minecraft:bamboo_blocks", 'another_furniture:bamboo_shelf');
    event.add("minecraft:bamboo_blocks", 'another_furniture:bamboo_flower_box');
    event.add("minecraft:bamboo_blocks", 'another_furniture:bamboo_shutter');
    event.add("minecraft:bamboo_blocks", 'another_furniture:bamboo_bench');

    event.add("minecraft:bamboo_blocks", 'create:bamboo_window');

    event.add("minecraft:bamboo_slabs", 'minecraft:bamboo_slab');
    event.add("minecraft:bamboo_slabs", 'quark:bamboo_vertical_slab');
    event.add("minecraft:bamboo_slabs", 'minecraft:bamboo_mosaic_slab');
    event.add("minecraft:bamboo_slabs", 'quark:bamboo_mosaic_vertical_slab');

    event.add("minecraft:bamboo_slabs", 'supplementaries:sign_post_bamboo');

    event.add("minecraft:bamboo_storage_blocks", 'quark:bamboo_chest');
    event.add("minecraft:bamboo_storage_blocks", 'farmersdelight:bamboo_cabinet');
    event.add("minecraft:bamboo_storage_blocks", 'another_furniture:bamboo_drawer');

})

ServerEvents.recipes(event => {

    woodTypes.forEach(sort => {

    let logsId = getWoodType(sort)('logs');

    let unstrippedLogsId = getWoodType(sort)('unstripped_logs');
    let logId = getWoodType(sort)('log');
    let woodId = getWoodType(sort)('wood');
    let hollowLogId = getWoodType(sort)('hollow_log');

    let strippedLogsId = getWoodType(sort)('stripped_logs');
    let strippedLogId = getWoodType(sort)('stripped_log');
    let strippedWoodId = getWoodType(sort)('stripped_wood');

    let blocksId = getWoodType(sort)('blocks');
    let planksId = getWoodType(sort)('planks');
    let stairsId = getWoodType(sort)('stairs');
    let fenceId = getWoodType(sort)('fence');
    let fenceGateId = getWoodType(sort)('fence_gate');
    let doorId = getWoodType(sort)('door');
    let trapdoorId = getWoodType(sort)('trapdoor');
    let pressurePlateId = getWoodType(sort)('pressure_plate');
    let buttonId = getWoodType(sort)('button');
    let verticalPlanksId = getWoodType(sort)('vertical_planks');
    let signId = getWoodType(sort)('sign');
    let hangingSignId = getWoodType(sort)('hanging_sign');

    let chairId = getWoodType(sort)('chair');
    let tableId = getWoodType(sort)('table');
    let benchId = getWoodType(sort)('bench');
    let flowerBoxId = getWoodType(sort)('flower_box');
    let shutterId = getWoodType(sort)('shutter');
    let shelfId = getWoodType(sort)('shelf');

    let windowId = getWoodType(sort)('window');

    let signPostId = getWoodType(sort)('sign_post');

    let slabId = getWoodType(sort)('slab');
    let verticalSlabId = getWoodType(sort)('vertical_slab');
    let slabsId = getWoodType(sort)('slabs');

    let strippedPostId = getWoodType(sort)('stripped_post');
    let postId = getWoodType(sort)('post');
    let ladderId = getWoodType(sort)('ladder');

    let storageBlocksId = getWoodType(sort)('storage_blocks');
    let chestId = getWoodType(sort)('chest');
    let cabinetId = getWoodType(sort)('cabinet');
    let drawerId = getWoodType(sort)('drawer');

    // Log Recipes
    event.stonecutting(logId, '#' + unstrippedLogsId)
    event.stonecutting(hollowLogId, '#' + unstrippedLogsId)

    if (sort != 'bloom') {
    event.stonecutting(woodId, '#' + unstrippedLogsId)
    

    event.remove({ output: woodId });
    event.shaped(Item.of(woodId, 4),[
      'AA',
      'AA'
    ], {
      A: logId
    }) 

    // Stripped Logs Recipes 
    event.stonecutting(strippedWoodId, '#' + strippedLogsId)

    event.remove({ output: strippedWoodId });
    event.shaped(Item.of(strippedWoodId, 4),[
      'AA',
      'AA'
    ], {
      A: strippedLogId
    }) 

    }

    event.stonecutting(strippedLogId, '#' + strippedLogsId)

    // Post Recipes
    if (sort != 'bloom') {
    event.remove({ output: strippedPostId });
    event.stonecutting(Item.of(strippedPostId,3), '#' + strippedLogsId)
    event.shaped(Item.of(strippedPostId, 9),[
      'A',
      'A',
      'A'
    ], {
      A: strippedWoodId
    }) 

    event.remove({ output: postId });
    event.stonecutting(Item.of(postId,3), '#' + unstrippedLogsId)
    event.shaped(Item.of(postId, 9),[
      'A',
      'A',
      'A'
    ], {
      A: woodId
    }) 
    }

    // Block Stonecutting
    event.stonecutting(planksId, '#' + blocksId)
    event.stonecutting(stairsId, '#' + blocksId)
    event.stonecutting(fenceId, '#' + blocksId)
    event.stonecutting(fenceGateId, '#' + blocksId)
    event.stonecutting(doorId, '#' + blocksId)
    event.stonecutting(trapdoorId, '#' + blocksId)
    event.stonecutting(pressurePlateId, '#' + blocksId)
    event.stonecutting(buttonId, '#' + blocksId)
    event.stonecutting(signId, '#' + blocksId)
    event.stonecutting(hangingSignId, '#' + blocksId)
    event.stonecutting(verticalPlanksId, '#' + blocksId)
if (sort != 'palm') {
    event.stonecutting(chairId, '#' + blocksId)
    event.stonecutting(tableId, '#' + blocksId)
}
    event.stonecutting(shelfId, '#' + blocksId)
    event.stonecutting(benchId, '#' + blocksId)
    event.stonecutting(shutterId, '#' + blocksId)
    event.stonecutting(flowerBoxId, '#' + blocksId)

    event.stonecutting(windowId, '#' + blocksId)

    event.stonecutting(Item.of(ladderId,4), '#' + blocksId)

    // Slab Cutting
    event.stonecutting(Item.of(slabId,2), '#' + blocksId)
    event.stonecutting(Item.of(verticalSlabId,2), '#' + blocksId)

    event.stonecutting(slabId, '#' + slabsId)
    event.stonecutting(verticalSlabId, '#' + slabsId)

    event.remove({ output: slabId, type: 'create:cutting' }); 
    event.remove({ output: buttonId, type: 'create:cutting' }); 

    // Sign Posts
    event.stonecutting(Item.of(signPostId,2), '#' + blocksId)
    event.stonecutting(signPostId, '#' + slabsId)

    // Debarking -----
    event.remove({ output: strippedLogId });
        event.custom({
            type: 'create:cutting',
            ingredients: [
              { item: logId }
            ],
            processingTime: 50,
            results: [
              { item: strippedLogId },{ item: 'farmersdelight:tree_bark' }
            ]
          })

          event.custom({
            type: 'create:cutting',
            ingredients: [
              { item: woodId }
            ],
            processingTime: 50,
            results: [
              { item: strippedWoodId },{ item: 'farmersdelight:tree_bark' }
            ]
          })

          event.custom({
            type: 'create:item_application',
            ingredients: [logId, ({ tag: 'minecraft:axes', count: 1 })],
            results: [strippedLogId]
          });

          event.custom({
            type: 'create:item_application',
            ingredients: [woodId, ({ tag: 'minecraft:axes', count: 1 })],
            results: [strippedWoodId]
          });

          event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
              { item: logId }
            ],
            tool: { tag: 'forge:tools/axes' },
            result: [
              { item: strippedLogId},{item: 'farmersdelight:tree_bark'}
            ]
          })

          event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
              { item: woodId }
            ],
            tool: { tag: 'forge:tools/axes' },
            result: [
              { item: strippedWoodId},{item: 'farmersdelight:tree_bark'}
            ]
          })

          
        // Planks Recipe 
        event.remove({ output: planksId }); 
        event.shapeless(
            Item.of(planksId, 4), 
            [
                '#'+logsId
            ]
          )
          // From Vertical Plank
          event.shapeless(
            Item.of(planksId, 1),
            [
                verticalPlanksId
            ]
          )
        
          event.custom({
            type: 'create:cutting',
            ingredients: [
              { tag: strippedLogsId }
            ],
            processingTime: 50,
            results: [
              { item: planksId, count : 6 },
            ]
          })
          
          event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
              { tag: strippedLogsId }
            ],
            tool: { tag: 'forge:tools/axes' },
            result: [
              { item: planksId, count : 6},
            ]
          })

    // Random Block Recipes

        // Stairs
        event.remove({ output: stairsId });
        event.shaped(Item.of(stairsId, 3), [
            'A ',
            'AA'
        ], {
            A: planksId
        });

        event.shaped(Item.of(stairsId, 6), [
            'A  ',
            'AA ',
            'AAA'
        ], {
            A: planksId
        });

        // Fence
        event.remove({ output: fenceId });
        event.shaped(Item.of(fenceId, 4), [
            'ABA',
            'ABA'
        ], {
            A: planksId,
            B: 'minecraft:stick'
        });

        // Fence Gate
        event.remove({ output: fenceGateId });
        event.shaped(Item.of(fenceGateId, 2), [
            'BAB',
            'BAB'
        ], {
            A: planksId,
            B: 'minecraft:stick'
        });

        // Door
        event.remove({ output: doorId });
        event.shaped(Item.of(doorId, 6), [
            'AA',
            'AA',
            'AA'
        ], {
            A: planksId
        });

        // Trapdoor
        event.remove({ output: trapdoorId });
        event.shaped(Item.of(trapdoorId, 6), [
            'AAA',
            'AAA'
        ], {
            A: planksId
        });

        // Pressure Plate
        event.remove({ output: pressurePlateId });
        event.shaped(Item.of(pressurePlateId, 2), [
            'AA'
        ], {
            A: planksId
        });

        // Sign
        event.remove({ output: signId });
        event.shaped(Item.of(signId, 6), [
            'AAA',
            'AAA',
            ' B ',
        ], {
            A: planksId,
            B: 'minecraft:stick'
        });

         // Hanging Sign
         event.remove({ output: hangingSignId });
        event.shaped(Item.of(hangingSignId, 6), [
            'B B',
            'AAA',
            'AAA',
        ], {
            A: planksId,
            B: 'minecraft:chain'
        });

        // Window
        event.remove({ output: windowId });
         event.shaped(Item.of(windowId, 3), [
            ' A ',
            'ABA'
        ], {
            A: planksId,
            B: '#forge:glass'
        });

        // Bench
        event.remove({ output: benchId });
         event.shaped(Item.of(benchId, 3), [
            'B  ',
            'AAA',
            'B B',
        ], {
            A: planksId,
            B: 'minecraft:stick'
        });

        // Shutter
        event.remove({ output: shutterId });
         event.shaped(Item.of(shutterId, 3), [
            'AA',
            'AA',
            'AA',
        ], {
            A: slabId
        });

        // Flower Box
        event.remove({ output: flowerBoxId });
         event.shaped(Item.of(flowerBoxId, 4), [
            'CBC',
            'AAA'
        ], {
            A: planksId,
            C: slabId,
            B: '#minecraft:dirt'
        });

    // Storage Blocks

    event.stonecutting(chestId, '#' + storageBlocksId)
    if (sort != 'palm') {
    event.stonecutting(cabinetId, '#' + storageBlocksId)
    }
    event.stonecutting(drawerId, '#' + storageBlocksId)

    // Drawer And Cabinet Recipes
    event.remove({ output: drawerId });
    event.remove({ output: cabinetId });
        event.shaped(drawerId, [
            'AAA',
            'B B',
            'AAA'
        ], {
            A: planksId,
            B: shutterId
        });
    if (sort != 'palm') {
        event.shaped(cabinetId, [
            'AAA',
            'B B',
            'AAA'
        ], {
            A: planksId,
            B: trapdoorId
        });

    }
    })

    // Bamboo
    // Post Recipes
    event.stonecutting(Item.of('quark:stripped_bamboo_post',3), 'minecraft:stripped_bamboo_block')
    event.shaped(Item.of('quark:stripped_bamboo_post', 9),[
      'A',
      'A',
      'A'
    ], {
      A: 'minecraft:stripped_bamboo_block'
    }) 

    event.stonecutting(Item.of('quark:bamboo_post',3), 'minecraft:bamboo_block')
    event.shaped(Item.of('quark:bamboo_post', 9),[
      'A',
      'A',
      'A'
    ], {
      A: 'minecraft:bamboo_block'
    }) 
    

    // Block Stonecutting
    event.stonecutting('minecraft:bamboo_planks', '#minecraftt:bamboo_blocks')
    event.stonecutting('quark:vertical_bamboo_planks', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_mosaic', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_stairs', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_mosaic_stairs', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_fence', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_fence_gate', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_door', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_trapdoor', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_pressure_plate', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_button', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_sign', '#minecraft:bamboo_blocks')
    event.stonecutting('minecraft:bamboo_hanging_sign', '#minecraft:bamboo_blocks')
    event.stonecutting('another_furniture:bamboo_chair', '#minecraft:bamboo_blocks')
    event.stonecutting('another_furniture:bamboo_shelf', '#minecraft:bamboo_blocks')
    event.stonecutting('another_furniture:bamboo_table', '#minecraft:bamboo_blocks')
    event.stonecutting('another_furniture:bamboo_shutter', '#minecraft:bamboo_blocks')
    event.stonecutting('another_furniture:bamboo_flower_box', '#minecraft:bamboo_blocks')
    event.stonecutting('another_furniture:bamboo_bench', '#minecraft:bamboo_blocks')
    event.stonecutting('create:bamboo_window', '#minecraft:bamboo_blocks')
    event.stonecutting('4x quark:bamboo_ladder', '#minecraft:bamboo_blocks')

    // Slab Cutting
    event.stonecutting('2x minecraft:bamboo_slab', '#minecraft:bamboo_blocks')
    event.stonecutting('2x quark:bamboo_vertical_slab', '#minecraft:bamboo_blocks')
    event.stonecutting('2x minecraft:bamboo_mosaic_slab', '#minecraft:bamboo_blocks')
    event.stonecutting('2x quark:bamboo_mosaic_vertical_slab', '#minecraft:bamboo_blocks')

    event.stonecutting('minecraft:bamboo_slab', '#minecraft:bamboo_slabs')
    event.stonecutting('quark:bamboo_vertical_slab', '#minecraft:bamboo_slabs')
    event.stonecutting('minecraft:bamboo_mosaic_slab', '#minecraft:bamboo_slabs')
    event.stonecutting('quark:bamboo_mosaic_vertical_slab', '#minecraft:bamboo_slabs')

    event.stonecutting('2x supplementaries:sign_post_bamboo', '#minecraft:bamboo_blocks')
    event.stonecutting('supplementaries:sign_post_bamboo', '#minecraft:bamboo_slabs')

    //event.remove({ output: slabId, type: 'create:cutting' }); 
    //event.remove({ output: buttonId, type: 'create:cutting' }); 

    // Debarking -----
    //event.remove({ output: strippedLogId });
        event.custom({
            type: 'create:cutting',
            ingredients: [
              { item: 'minecraft:bamboo_block' }
            ],
            processingTime: 50,
            results: [
              { item: 'minecraft:stripped_bamboo_block' },{ item: 'farmersdelight:straw' }
            ]
          })

          event.custom({
            type: 'create:item_application',
            ingredients: ['minecraft:bamboo_block', ({ tag: 'minecraft:axes', count: 1 })],
            results: ['minecraft:stripped_bamboo_block']
          });


          event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
              { item: 'minecraft:bamboo_block' }
            ],
            tool: { tag: 'forge:tools/axes' },
            result: [
              { item: 'minecraft:stripped_bamboo_block'},{item: 'farmersdelight:straw'}
            ]
          })
          
        // Planks Recipe 
        //event.remove({ output: planksId }); 
        
        /*
        event.shapeless(
            Item.of(planksId, 4), 
            [
                '#'+logsId
            ]
          )
          // From Vertical Plank
          event.shapeless(
            Item.of(planksId, 1),
            [
                verticalPlanksId
            ]
          )
        
          event.custom({
            type: 'create:cutting',
            ingredients: [
              { tag: strippedLogsId }
            ],
            processingTime: 50,
            results: [
              { item: planksId, count : 6 },
            ]
          })
          */
          event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
              { item: 'minecraft:stripped_bamboo_block' }
            ],
            tool: { tag: 'forge:tools/axes' },
            result: [
              { item: 'minecraft:bamboo_planks', count : 3},
            ]
          })

    // Random Block Recipes

        // Stairs
        event.shaped(Item.of('minecraft:bamboo_stairs', 3), [
            'A ',
            'AA'
        ], {
            A: 'minecraft:bamboo_planks'
        });

        event.shaped(Item.of('minecraft:bamboo_stairs', 6), [
            'A  ',
            'AA ',
            'AAA'
        ], {
            A: 'minecraft:bamboo_planks'
        });

        // Stairs
        event.shaped(Item.of('minecraft:bamboo_mosaic_stairs', 3), [
            'A ',
            'AA'
        ], {
            A: 'minecraft:bamboo_mosaic'
        });

        event.shaped(Item.of('minecraft:bamboo_mosaic_stairs', 6), [
            'A  ',
            'AA ',
            'AAA'
        ], {
            A: 'minecraft:bamboo_mosaic'
        });

        // Fence
        event.shaped(Item.of('minecraft:bamboo_fence', 4), [
            'ABA',
            'ABA'
        ], {
            A: 'minecraft:bamboo_planks',
            B: 'minecraft:stick'
        });

        // Fence Gate
        event.shaped(Item.of('minecraft:bamboo_fence_gate', 2), [
            'BAB',
            'BAB'
        ], {
            A: 'minecraft:bamboo_planks',
            B: 'minecraft:stick'
        });

        // Door
        event.shaped(Item.of('minecraft:bamboo_door', 6), [
            'AA',
            'AA',
            'AA'
        ], {
            A: 'minecraft:bamboo_planks'
        });

        // Trapdoor
        event.shaped(Item.of('minecraft:bamboo_trapdoor', 6), [
            'AAA',
            'AAA'
        ], {
            A: 'minecraft:bamboo_planks'
        });

        // Pressure Plate
        event.shaped(Item.of('minecraft:bamboo_pressure_plate', 2), [
            'AA'
        ], {
            A: 'minecraft:bamboo_planks'
        });

        // Sign
        event.shaped(Item.of('minecraft:bamboo_sign', 6), [
            'AAA',
            'AAA',
            ' B ',
        ], {
            A: 'minecraft:bamboo_planks',
            B: 'minecraft:stick'
        });

         // Hanging Sign
        event.shaped(Item.of('minecraft:bamboo_hanging_sign', 6), [
            'B B',
            'AAA',
            'AAA',
        ], {
            A: 'minecraft:bamboo_planks',
            B: 'minecraft:chain'
        });

        // Window
         event.shaped(Item.of('create:bamboo_window', 3), [
            ' A ',
            'ABA'
        ], {
            A: 'minecraft:bamboo_planks',
            B: '#forge:glass'
        });

        // Bench
         event.shaped(Item.of('another_furniture:bamboo_bench', 3), [
            'B  ',
            'AAA',
            'B B',
        ], {
            A: 'minecraft:bamboo_planks',
            B: 'minecraft:stick'
        });

        // Shutter
         event.shaped(Item.of('another_furniture:bamboo_shutter', 3), [
            'AA',
            'AA',
            'AA',
        ], {
            A: 'minecraft:bamboo_slab'
        });

        // Flower Box
         event.shaped(Item.of('another_furniture:bamboo_flower_box', 4), [
            'CBC',
            'AAA'
        ], {
            A: 'minecraft:bamboo_planks',
            C: 'minecraft:bamboo_slab',
            B: '#minecraft:dirt'
        });

    // Storage Blocks

    event.stonecutting('quark:bamboo_chest', '#minecraft:bamboo_storage_blocks')
    event.stonecutting('farmersdelight:bamboo_cabinet', '#minecraft:bamboo_storage_blocks')
    event.stonecutting('another_furniture:bamboo_drawer', '#minecraft:bamboo_storage_blocks')

    // Drawer And Cabinet Recipes
    //event.remove({ output: drawerId });
    //event.remove({ output: cabinetId });
        event.shaped('another_furniture:bamboo_drawer', [
            'AAA',
            'B B',
            'AAA'
        ], {
            A: 'minecraft:bamboo_planks',
            B: 'another_furniture:bamboo_shutter'
        });
    
        event.shaped('farmersdelight:bamboo_cabinet', [
            'AAA',
            'B B',
            'AAA'
        ], {
            A: 'minecraft:bamboo_planks',
            B: 'minecraft:bamboo_trapdoor'
        });
})
