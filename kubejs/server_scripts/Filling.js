



ServerEvents.recipes(event => { 

    const fluidItemConversions = [
  { // Gilded Blackstone
    fluid: { fluid: "tconstruct:molten_gold", amount: 40 },
    input: "minecraft:blackstone",
    output: "minecraft:gilded_blackstone"
  },
  { // Spotted Glance
    fluid: { fluid: "oreganized:molten_lead", amount: 40 },
    input: "oreganized:glance",
    output: "oreganized:spotted_glance"
  },
  { // Blaze Cake --- Maybe Move to Cooking Pot?
    fluid: { fluid: "tconstruct:ichor", amount: 150 },
    input: "create:blaze_cake_base",
    output: "create:blaze_cake"
  },
  { // Spelunkery Portal Fluid
    fluid: { fluid: "spelunkery:portal_fluid", amount: 250 },
    input: "minecraft:glass_bottle",
    output: "spelunkery:portal_fluid_bottle"
  },
  { // Shulker Box
    fluid: { fluid: "spelunkery:portal_fluid", amount: 1000 },
    input: "create:cardboard_block",
    output: "minecraft:shulker_box"
  },
  { // Flooded Shingles
    fluid: { fluid: "minecraft:water", amount: 100 },
    input: "caverns_and_chasms:dripstone_shingles",
    output: "caverns_and_chasms:flooded_dripstone_shingles"
  },
]


fluidItemConversions.forEach(entry => {
  // Create: Filling
  event.custom({
    type: "create:filling",
    ingredients: [
      { item: entry.input },
      entry.fluid
    ],
    results: [
      { item: entry.output }
    ]
  })

  // Tinkers' Construct: Casting Table
  event.custom({
    type: "tconstruct:casting_table",
    cast: {
      item: entry.input
    },
    cast_consumed: true,
    cooling_time: 40,
    fluid: entry.fluid,
    result: entry.output
  })
})



})

