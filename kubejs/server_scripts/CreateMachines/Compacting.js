ServerEvents.recipes(event => { 
 
   const mixingRecipes = [
  { // Organic Compost
    ingredients: [
      { item: "minecraft:dirt" },{ item: "minecraft:rotten_flesh" },{ item: "minecraft:bone_meal" },{ amount:250, fluid:"tconstruct:earth_slime" },{ item: "farmersdelight:straw" },{ item: "farmersdelight:tree_bark" }
    ],
    results: [
      {item: "farmersdelight:organic_compost" }
    ],
    
  },
  { // Supplementaries Daub
    ingredients: [
      { item: "minecraft:clay" },{ item: "farmersdelight:straw" }
    ],
    results: [
      {item: "supplementaries:daub" }
    ],
  },
  { // Packed Mud
    ingredients: [
      { item: "minecraft:mud" },{ item: "farmersdelight:straw" }
    ],
    results: [
      {item: "minecraft:packed_mud" }
    ],
  },

]

mixingRecipes.forEach(recipe => {
  const customRecipe = {
    type: "create:compacting",
    ingredients: recipe.ingredients,
    results: recipe.results
  }

  if (recipe.heatRequirement) {
    customRecipe.heatRequirement = recipe.heatRequirement
  }

  event.custom(customRecipe)
})

}) 