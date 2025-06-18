ServerEvents.recipes(event => { 
 
     let washingRecipes = [
      
        {
          ingredients: [{ item: 'quark:dirty_glass' }],
          results: [
            { count: 1, item: 'minecraft:glass' }
          ]
        },
        {
          ingredients: [{ item: 'quark:dirty_glass_pane' }],
          results: [
            { count: 1, item: 'minecraft:glass_pane' }
          ]
        },
        {
          ingredients: [{ item: 'quark:dirty_shard' }],
          results: [
            { count: 1, item: 'quark:clear_shard' }
          ]
        },
      ]
      
      washingRecipes.forEach(recipe => {
        event.custom({
          type: "create:splashing",
          ingredients: recipe.ingredients,
          results: recipe.results
        })
      })
      




 })