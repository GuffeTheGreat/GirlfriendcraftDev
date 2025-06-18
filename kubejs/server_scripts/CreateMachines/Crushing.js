ServerEvents.recipes(event => { 
 
     let hauntingRecipes = [
      {
        ingredients: [{ item: 'minecraft:cobblestone' }],
        results: [
          { count: 1, item: 'minecraft:gravel' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:gravel' }],
        results: [
          { count: 1, item: 'minecraft:sand' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:sandstone' }],
        results: [
          { count: 4, item: 'minecraft:sand' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:red_sandstone' }],
        results: [
          { count: 4, item: 'minecraft:red_sand' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:clay' }],
        results: [
          { count: 4, item: 'minecraft:clay_ball' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:terracotta' }],
        results: [
          { count: 1, item: 'minecraft:red_sand' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:netherrack' }],
        results: [
          { count: 1, item: 'create:cinder_flour' },{ chance: 0.25, item: 'create:cinder_flour' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:blackstone' }],
        results: [
          { count: 1, item: 'biomesoplenty:black_sand' }
        ]
      },
      {
        ingredients: [{ item: 'biomesoplenty:black_sand' }],
        results: [
          { count: 1, item: 'regions_unexplored:volcanic_ash' }
        ]
      },
      {
        ingredients: [{ tag: 'minecraft:coal_ores' }],
        results: [
          { count: 2, item: 'minecraft:coal' }
        ]
      },
      {
        ingredients: [{ tag: 'minecraft:copper_ores' }],
        results: [
          { count: 2, item: 'minecraft:raw_copper' }
        ]
      },
      {
        ingredients: [{ tag: 'minecraft:iron_ores' }],
        results: [
          { count: 2, item: 'minecraft:raw_iron' }
        ]
      },
      {
        ingredients: [{ tag: 'minecraft:gold_ores' }],
        results: [
          { count: 2, item: 'minecraft:raw_gold' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:raw_copper' }],
        results: [
          { count: 2, item: 'create:crushed_raw_copper' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:raw_iron' }],
        results: [
          { count: 2, item: 'create:crushed_raw_iron' }
        ]
      },
      {
        ingredients: [{ item: 'minecraft:raw_gold' }],
        results: [
          { count: 2, item: 'create:crushed_raw_gold' }
        ]
      },
      {
        ingredients: [{ tag: 'minecraft:redstone_ores' }],
        results: [
          { count: 2, item: 'spelunkery:rough_cinnabar' }
        ]
      },
      {
        ingredients: [{ tag: 'minecraft:lapis_ores' }],
        results: [
          { count: 2, item: 'spelunkery:rough_lazurite' }
        ]
      },
      {
        ingredients: [{ tag: 'minecraft:diamond_ores' }],
        results: [
          { count: 2, item: 'spelunkery:rough_diamond' }
        ]
      },
      {
        ingredients: [{ tag: 'minecraft:emerald_ores' }],
        results: [
          { count: 2, item: 'spelunkery:rough_emerald' }
        ]
      },
      {
        ingredients: [{ tag: 'minecraft:quartz_ores' }],
        results: [
          { count: 2, item: 'minecraft:quartz' }
        ]
      }
      ]
      
      hauntingRecipes.forEach(recipe => {
        event.custom({
          type: "create:crushing",
          ingredients: recipe.ingredients,
          results: recipe.results
        })
      })
      




 })