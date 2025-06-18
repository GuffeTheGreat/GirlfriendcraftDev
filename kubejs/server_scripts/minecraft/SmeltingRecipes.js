// Listen for the "recipes" server event.
ServerEvents.recipes(event => {

// Smelting
let smeltingrecipes = [
        /*{ output: 'minecraft:iron_ingot', input: 'create:crushed_raw_iron' },
        { output: 'minecraft:copper_ingot', input: 'create:crushed_raw_copper' },
        { output: 'oreganized:silver_ingot', input: 'create:crushed_raw_silver' },
        { output: 'minecraft:gold_ingot', input: 'create:crushed_raw_gold' },
        { output: 'oreganized:lead_ingot', input: 'create:crushed_raw_lead' },
        { output: 'minecraft:leather', input: 'galosphere:salted_jerky' },*/
        
        { output: 'galosphere:chiseled_pink_salt', input: 'galosphere:chiseled_rose_pink_salt' },
        { output: 'galosphere:pink_salt_brick_wall', input: 'galosphere:rose_pink_salt_brick_wall' },
        { output: 'galosphere:pink_salt_brick_slab', input: 'galosphere:rose_pink_salt_brick_slab' },
        { output: 'galosphere:pink_salt_brick_stairs', input: 'galosphere:rose_pink_salt_brick_stairs' },
        { output: 'galosphere:pink_salt', input: 'galosphere:rose_pink_salt' },
        { output: 'galosphere:pink_salt_wall', input: 'galosphere:rose_pink_salt_wall' },
        { output: 'galosphere:pink_salt_slab', input: 'galosphere:rose_pink_salt_slab' },
        { output: 'galosphere:pink_salt_stairs', input: 'galosphere:polished_rose_pink_salt_stairs' },
        { output: 'galosphere:polished_pink_salt', input: 'galosphere:polished_rose_pink_salt' },
        { output: 'galosphere:polished_pink_salt_wall', input: 'galosphere:polished_rose_pink_salt_wall' },
        { output: 'galosphere:polished_pink_salt_slab', input: 'galosphere:polished_rose_pink_salt_slab' },
        { output: 'galosphere:polished_pink_salt_stairs', input: 'galosphere:polished_rose_pink_salt_stairs' },
        
        { output: 'galosphere:chiseled_rose_pink_salt', input: 'galosphere:chiseled_pastel_pink_salt' },
        { output: 'galosphere:rose_pink_salt_brick_wall', input: 'galosphere:pastel_pink_salt_brick_wall' },
        { output: 'galosphere:rose_pink_salt_brick_slab', input: 'galosphere:pastel_pink_salt_brick_slab' },
        { output: 'galosphere:rose_pink_salt_brick_stairs', input: 'galosphere:pastel_pink_salt_brick_stairs' },
        { output: 'galosphere:rose_pink_salt', input: 'galosphere:pastel_pink_salt' },
        { output: 'galosphere:rose_pink_salt_wall', input: 'galosphere:pastel_pink_salt_wall' },
        { output: 'galosphere:rose_pink_salt_slab', input: 'galosphere:pastel_pink_salt_slab' },
        { output: 'galosphere:rose_pink_salt_stairs', input: 'galosphere:polished_pastel_pink_salt_stairs' },
        { output: 'galosphere:polished_rose_pink_salt', input: 'galosphere:polished_pastel_pink_salt' },
        { output: 'galosphere:polished_rose_pink_salt_wall', input: 'galosphere:polished_pastel_pink_salt_wall' },
        { output: 'galosphere:polished_rose_pink_salt_slab', input: 'galosphere:polished_pastel_pink_salt_slab' },
        { output: 'galosphere:polished_rose_pink_salt_stairs', input: 'galosphere:polished_pastel_pink_salt_stairs' },

        { output: 'minecraft:coal', input: '#minecraft:coal_ores' },
        { output: 'minecraft:iron_ingot', input: '#minecraft:iron_ores' },
        { output: 'minecraft:copper_ingot', input: '#minecraft:copper_ores' },
        { output: 'minecraft:gold_ingot', input: '#minecraft:gold_ores' },
        { output: 'spelunkery:rough_lazurite', input: '#minecraft:lapis_ores' },
        { output: 'spelunkery:rough_cinnabar', input: '#minecraft:redstone_ores' },
        { output: 'spelunkery:rough_emerald', input: '#minecraft:emerald_ores' },
        { output: 'spelunkery:rough_diamond', input: '#minecraft:diamond_ores' },
        { output: 'minecraft:quartz', input: '#minecraft:quartz_ores' },


    ]

    smeltingrecipes.forEach(recipe => {
	event.smelting(recipe.output, recipe.input)

    })

    // Blasting
let blastingrecipes = [
    
        { output: 'minecraft:coal', input: '#minecraft:coal_ores' },
        { output: 'minecraft:iron_ingot', input: '#minecraft:iron_ores' },
        { output: 'minecraft:copper_ingot', input: '#minecraft:copper_ores' },
        { output: 'minecraft:gold_ingot', input: '#minecraft:gold_ores' },
        { output: 'spelunkery:rough_lazurite', input: '#minecraft:lapis_ores' },
        { output: 'spelunkery:rough_cinnabar', input: '#minecraft:redstone_ores' },
        { output: 'spelunkery:rough_emerald', input: '#minecraft:emerald_ores' },
        { output: 'spelunkery:rough_diamond', input: '#minecraft:diamond_ores' },
        { output: 'minecraft:quartz', input: '#minecraft:quartz_ores' },


    ]

    blastingrecipes.forEach(recipe => {
	event.blasting(recipe.output, recipe.input)

    })
  
})
  
