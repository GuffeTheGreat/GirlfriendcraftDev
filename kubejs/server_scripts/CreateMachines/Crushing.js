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