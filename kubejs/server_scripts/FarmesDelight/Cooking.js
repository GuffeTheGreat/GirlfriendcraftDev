ServerEvents.recipes(event => {
  const cookingPotRecipes = [
    {
      result: 'meadow:roasted_ham',
      cookingTime: 200,
      experience: 1.0,
      ingredients: [
        { item: 'meadow:raw_buffalo_meat' },
        { item: 'meadow:raw_buffalo_meat' },
        { item: 'meadow:raw_buffalo_meat' },
        { item: 'minecraft:potato' },
        { item: 'minecraft:carrot' },
        { item: 'spelunkery:salt' }
      ]
    },
    {
      result: 'meadow:wooden_grain_milk_bucket',
      cookingTime: 160,
      experience: 0.8,
      ingredients: [
        { tag: 'meadow:small_water_fill' },
        { item: 'create:wheat_flour' },
        { item: 'create:wheat_flour' },
        { item: 'create:wheat_flour' },
        { item: 'create:wheat_flour' },
        { item: 'create:wheat_flour' }
      ]
    },
    {
      result: 'meadow:wooden_amethyst_milk_bucket',
      cookingTime: 160,
      experience: 0.8,
      ingredients: [
        { tag: 'forge:milk' },
        { item: 'spelunkery:salt' },
        { item: 'minecraft:amethyst_cluster' }
      ]
    },
    {
      result: 'meadow:rennet',
      cookingTime: 160,
      experience: 0.8,
      ingredients: [
        { tag: 'forge:eggs' },
        { item: 'spelunkery:salt' }
      ]
    },
    {
      result: 'meadow:sausage_with_cheese',
      cookingTime: 160,
      experience: 0.8,
      ingredients: [
        { item: 'meadow:raw_buffalo_meat' },
        { tag: 'c:cheese' },
        { item: 'spelunkery:salt' }
      ]
    }
  ]

  // Loop through each and register it
  cookingPotRecipes.forEach(recipe => {
    event.custom({
      type: 'farmersdelight:cooking',
      cookingtime: recipe.cookingTime,
      experience: recipe.experience,
      ingredients: recipe.ingredients,
      recipe_book_tab: 'meals',
      result: { item: recipe.result }
    })
  })
})
