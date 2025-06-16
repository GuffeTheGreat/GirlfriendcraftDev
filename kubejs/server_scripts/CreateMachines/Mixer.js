ServerEvents.recipes(event => { 
 
   const mixingRecipes = [
  { // Eye of Ender
    ingredients: [
      { item: "botania:life_essence" },{ item: "minecraft:ender_pearl" },{ amount:4000, fluid:"spelunkery:portal_fluid" }
    ],
    results: [
      {item: "minecraft:ender_eye" }
    ],
    heatRequirement: "superheated"
  },
  { // Eye of Ender Duplication
    ingredients: [
      { item: "minecraft:ender_eye" },{ item: "botania:dragonstone" },{ amount:1000, fluid:"spelunkery:portal_fluid" }
    ],
    results: [
      { count: 2, item: "minecraft:ender_eye" }
    ],
    heatRequirement: "superheated"
  },
  { // Eye of Ender Duplication
    ingredients: [
      { item: "botania:mana_powder" },{ item: "botania:mana_powder" },{ item: "botania:mana_powder" },{ item: "botania:mana_powder" },{ amount:1000, fluid:"tconstruct:molten_obsidian" },{ amount:250, fluid:"tconstruct:molten_ender" }
    ],
    results: [
      { amount: 1000, fluid: "spelunkery:portal_fluid" }
    ],
  },

]

mixingRecipes.forEach(recipe => {
  const customRecipe = {
    type: "create:mixing",
    ingredients: recipe.ingredients,
    results: recipe.results
  }

  if (recipe.heatRequirement) {
    customRecipe.heatRequirement = recipe.heatRequirement
  }

  event.custom(customRecipe)
})

}) 