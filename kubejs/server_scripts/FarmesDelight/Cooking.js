ServerEvents.recipes(event => {
  const cookingPotRecipes = [
    {
      result: 'create:blaze_cake',
      cookingTime: 160,
      experience: 0.8,
      ingredients: [
        { item: 'minecraft:obsidian' },
        { tag: 'minecraft:cake' },
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
