ServerEvents.recipes(event => { 
 
   const mixingRecipes = [
  { // Calcite
    ingredients: [
      { item: "minecraft:stone" },{ amount:100, fluid:"minecraft:lava" },{ item: "minecraft:bone_meal" },{ item: "minecraft:bone_meal" },{ item: "minecraft:bone_meal" },{ item: "minecraft:bone_meal" },{ item: "minecraft:bone_meal" },{ item: "minecraft:bone_meal" },{ item: "minecraft:bone_meal" },{ item: "minecraft:bone_meal" }
    ],
    results: [
      {item: "minecraft:calcite" }
    ],
    
  },
  { // Dripstone
    ingredients: [
      { item: "minecraft:red_sand" },{ amount:100, fluid:"minecraft:lava" },{ item: "minecraft:clay_ball" },{ item: "minecraft:clay_ball" }
    ],
    results: [
      {item: "minecraft:dripstone_block" }
    ],
    
  },
  { // Tuff
    ingredients: [
      { item: "minecraft:andesite" },{ amount:100, fluid:"minecraft:lava" },{ item: "minecraft:stone" }
    ],
    results: [
      { count: 2, item: "minecraft:tuff" }
    ],
    
  },
  { // Netherrack
    ingredients: [
      { item: "minecraft:basalt" },{ amount:100, fluid:"minecraft:lava" },{ item: "create:cinder_flour" }
    ],
    results: [
      { count: 2, item: "minecraft:netherrack" }
    ],
    
  },
  { // End Stone
    ingredients: [
      { item: "botania:ender_air_bottle" },{ item: "minecraft:netherrack" },{ amount:36, fluid:"spelunkery:portal_fluid" }
    ],
    results: [
      { item: "botania:ender_air_bottle" },{ item: "minecraft:end_stone" }
    ],
    
  },
  { // Basalt
    ingredients: [
      { item: "minecraft:tuff" },{ amount:100, fluid:"minecraft:lava" },{ item: "regions_unexplored:volcanic_ash" }
    ],
    results: [
      { count: 2, item: "minecraft:basalt" }
    ],
    
  },
   { // Deepslate
    ingredients: [
      { amount:100, fluid:"minecraft:lava" },{ amount:10, fluid:"tconstruct:molten_iron" },{ item: "minecraft:granite" },{ item: "minecraft:diorite" },{ item: "minecraft:andesite" }
    ],
    results: [
      { count: 4, item: "minecraft:deepslate" }
    ],
    
  },
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