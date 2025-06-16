ServerEvents.recipes(event => {
  let customApplications = [
    {
      ingredients: [
        { item: "create:shaft" },
        { tag: "minecraft:planks" }
      ],
      result: { item: "create:cogwheel" }
    },
    {
      ingredients: [
        { item: "create:cogwheel" },
        { tag: "minecraft:planks" }
      ],
      result: { item: "create:large_cogwheel" }
    },
    {
      ingredients: [
        { item: "create:weathered_iron_block" },
        { tag: "minecraft:axes" }
      ],
      result: { item: "create:industrial_iron_block" }
    },
  ]

  customApplications.forEach(recipe => {
    event.custom({
      type: 'create:item_application',
      ingredients: recipe.ingredients,
      results: [ recipe.result ]
    })
  })
})
