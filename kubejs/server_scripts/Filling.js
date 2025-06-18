



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
  { // Blaze Cake
    fluid: { fluid: "tconstruct:ichor", amount: 200 },
    input: "create:blaze_cake_base",
    output: "create:blaze_cake"
  },
  { // Spelunkery Portal Fluid
    fluid: { fluid: "spelunkery:portal_fluid", amount: 144 },
    input: "minecraft:glass_bottle",
    output: "spelunkery:portal_fluid_bottle"
  },
  { // Spelunkery Portal Fluid
    fluid: { fluid: "spelunkery:portal_fluid", amount: 144 },
    input: "minecraft:obsidian",
    output: "minecraft:crying_obsidian"
  },
  { // Shulker Box
    fluid: { fluid: "spelunkery:portal_fluid", amount: 576 },
    input: "create:cardboard_block",
    output: "minecraft:shulker_box"
  },
  { // Flooded Shingles
    fluid: { fluid: "minecraft:water", amount: 100 },
    input: "caverns_and_chasms:dripstone_shingles",
    output: "caverns_and_chasms:flooded_dripstone_shingles"
  },
  { // Mud
    fluid: { fluid: "minecraft:water", amount: 250 },
    input: "minecraft:dirt",
    output: "minecraft:mud"
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

