ServerEvents.recipes(event => {

    const cuttingRecipes = [
        {
            input: { item: 'minecraft:copper_ingot' },
            tool: { item: 'another_furniture:furniture_hammer' },
            result: [{ item: 'create:copper_sheet', count: 1 }]
        },
        {
            input: { item: 'minecraft:gold_ingot' },
            tool: { item: 'another_furniture:furniture_hammer' },
            result: [{ item: 'create:golden_sheet', count: 1 }]
        },
        {
          input: { tag: 'minecraft:planks' },
          tool: { tag: 'forge:tools/axes' },
          result: [{ item: 'minecraft:stick', count: 3 }]
        },
        {
            input: { item: 'minecraft:bamboo' },
            tool: { tag: 'forge:tools/knives' },
            result: [{ item: 'minecraft:stick', count: 1 }]
        },
        {
            input: { item: 'spelunkery:tangle_roots' },
            tool: { tag: 'forge:tools/knives' },
            result: [{ item: 'minecraft:stick', count: 3 }]
        },
        {
            input: { item: 'minecraft:gravel' },
            tool: { tag: 'minecraft:shovels' },
            result: [{ item: 'minecraft:flint', chance: 0.5 }]
        }
        
      ]
      
      cuttingRecipes.forEach(recipe => {
        event.custom({
          type: 'farmersdelight:cutting',
          ingredients: [ recipe.input ],
          tool: recipe.tool,
          result: recipe.result
        })
      })
 

    
    })