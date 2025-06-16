ServerEvents.recipes(event => { 
 
     let splashingRecipes = [
      {
        ingredients: [{ item: 'galosphere:chiseled_pink_salt' }],
        results: [
          { count: 1, item: 'galosphere:chiseled_rose_pink_salt' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:pink_salt_brick_wall' }],
        results: [
          { count: 1, item: 'galosphere:rose_pink_salt_brick_wall' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:pink_salt_brick_slab' }],
        results: [
          { count: 1, item: 'galosphere:rose_pink_salt_brick_slab' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:pink_salt_brick_stairs' }],
        results: [
          { count: 1, item: 'galosphere:rose_pink_salt_brick_stairs' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:pink_salt_bricks' }],
        results: [
          { count: 1, item: 'galosphere:rose_pink_salt_bricks' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:polished_pink_salt_wall' }],
        results: [
          { count: 1, item: 'galosphere:polished_rose_pink_salt_wall' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:polished_pink_salt_slab' }],
        results: [
          { count: 1, item: 'galosphere:polished_rose_pink_salt_slab' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:polished_pink_salt_stairs' }],
        results: [
          { count: 1, item: 'galosphere:polished_rose_pink_salt_stairs' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:polished_pink_salt' }],
        results: [
          { count: 1, item: 'galosphere:polished_rose_pink_salt' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:pink_salt_wall' }],
        results: [
          { count: 1, item: 'galosphere:rose_pink_salt_wall' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:pink_salt_slab' }],
        results: [
          { count: 1, item: 'galosphere:rose_pink_salt_slab' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:pink_salt_stairs' }],
        results: [
          { count: 1, item: 'galosphere:rose_pink_salt_stairs' }
        ]
      },
        {
          ingredients: [{ item: 'galosphere:pink_salt' }],
          results: [
            { count: 1, item: 'galosphere:rose_pink_salt' }
          ]
        },


      {
        ingredients: [{ item: 'galosphere:chiseled_rose_pink_salt' }],
        results: [
          { count: 1, item: 'galosphere:chiseled_pastel_pink_salt' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:rose_pink_salt_brick_wall' }],
        results: [
          { count: 1, item: 'galosphere:pastel_pink_salt_brick_wall' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:rose_pink_salt_brick_slab' }],
        results: [
          { count: 1, item: 'galosphere:pastel_pink_salt_brick_slab' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:rose_pink_salt_brick_stairs' }],
        results: [
          { count: 1, item: 'galosphere:pastel_pink_salt_brick_stairs' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:rose_pink_salt_bricks' }],
        results: [
          { count: 1, item: 'galosphere:pastel_pink_salt_bricks' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:polished_rose_pink_salt_wall' }],
        results: [
          { count: 1, item: 'galosphere:polished_pastel_pink_salt_wall' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:polished_rose_pink_salt_slab' }],
        results: [
          { count: 1, item: 'galosphere:polished_pastel_pink_salt_slab' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:polished_rose_pink_salt_stairs' }],
        results: [
          { count: 1, item: 'galosphere:polished_pastel_pink_salt_stairs' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:polished_rose_pink_salt' }],
        results: [
          { count: 1, item: 'galosphere:polished_pastel_pink_salt' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:rose_pink_salt_wall' }],
        results: [
          { count: 1, item: 'galosphere:pastel_pink_salt_wall' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:rose_pink_salt_slab' }],
        results: [
          { count: 1, item: 'galosphere:pastel_pink_salt_slab' }
        ]
      },
      {
        ingredients: [{ item: 'galosphere:rose_pink_salt_stairs' }],
        results: [
          { count: 1, item: 'galosphere:pastel_pink_salt_stairs' }
        ]
      },
        {
          ingredients: [{ item: 'galosphere:rose_pink_salt' }],
          results: [
            { count: 1, item: 'galosphere:pastel_pink_salt' }
          ]
        },
        {
          ingredients: [{ item: 'caverns_and_chasms:brazier' }],
          results: [
            { count: 1, item: 'caverns_and_chasms:soul_brazier' }
          ]
        },
        {
          ingredients: [{ tag: 'forge:glass' }],
          results: [
            { count: 1, item: 'tconstruct:soul_glass' }
          ]
        },
        {
          ingredients: [{ item: 'minecraft:sandstone' }],
          results: [
            { count: 1, item: 'quark:soul_sandstone' }
          ]
        },
        {
          ingredients: [{ tag: 'forge:raw_beef' }],
          results: [
            { count: 1, item: 'minecraft:rotten_flesh' }
          ]
        },
      ]
      
      splashingRecipes.forEach(recipe => {
        event.custom({
          type: "create:haunting",
          ingredients: recipe.ingredients,
          results: recipe.results
        })
      })
      




 })