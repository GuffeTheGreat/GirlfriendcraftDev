  console.info("[GUFFE] removeRecipes.js loaded");

ServerEvents.recipes((event) => {
  
  const removeById = [

  // Minecraft
  "minecraft:ender_eye",

  // Tinkers
  "tconstruct:smeltery/casting/ender/eye",
  "tconstruct:common/glass/vanilla/beacon",
  

  // Farmers Delight
  "farmersdelight:organic_compost_from_rotten_flesh",
  "farmersdelight:organic_compost_from_tree_bark",

  // Nature's Compass
  "naturescompass:natures_compass"
  
      ];

      removeById.forEach((recipeid) => {
  event.remove({ id: recipeid })

      })

      });
  /*
e.remove({type: 'create:crushing'})
  e.remove({type: 'create:sandpaper_polishing'})
  //e.remove({ mod: "pipez" });
  //e.remove({ mod: "mekanism_lasers" });
  const removeByOutput = [
    '#girlfriendcraft:disabled',
    //'#girlfriendcraft:stripped_logs',
    //'#girlfriendcraft:planks',
    'spelunkery:salt',
    'spelunkery:portal_fluid_bottle',

    //Oreganized
    'oreganized:glance',
    'oreganized:lead_trapdoor',

    // Minecraft
    'minecraft:ender_eye',
    'minecraft:ender_chest',
    'minecraft:stone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:iron_helmet',
    'minecraft:iron_chestplate',
    'minecraft:iron_leggings',
    'minecraft:iron_boots',
    'minecraft:stick',
    'minecraft:stripped_bamboo_block', 
    'minecraft:bamboo_planks', 
    'minecraft:bamboo_mosaic', 
    'minecraft:bamboo_stairs', 
    'minecraft:bamboo_mosaic_stairs', 
    'minecraft:bamboo_slab', 
    'minecraft:bamboo_fence', 
    'minecraft:bamboo_fence_gate', 
    'minecraft:bamboo_door', 
    'minecraft:bamboo_trapdoor', 
    'minecraft:bamboo_pressure_plate', 
    'minecraft:bamboo_button', 
    'minecraft:bamboo_sign', 
    'minecraft:bamboo_hanging_sign',
    'minecraft:glass',
    'minecraft:shulker_box',

    //Quark
    'quark:gravisand',
    'quark:feeding_trough',
    'quark:ender_watcher',
    'quark:sturdy_stone',
    'quark:pickarang', 
    'quark:iron_rod', 
    'quark:obsidian_pressure_plate',

    //JustAnotherFurniture
    'another_furniture:furniture_hammer',

    // Tconstruct
    'tconstruct:grout',
    'tconstruct:nether_grout',
    'tconstruct:pattern',
    'tconstruct:smeltery_controller',
    'tconstruct:foundry_controller',

    // Create and Addons
    'create:andesite_alloy',
    'create:wrench',
    'create:goggles',
    'create:steam_engine',
    'create:track',
    'create:blaze_cake',
    'create:rose_quartz',
    'create:small_rose_quartz_tiles',
    'create:rose_quartz_tiles',
    'create:wooden_bracket',
    'create:metal_bracket',

  ];

  const removeByInput = [
  '#girlfriendcraft:disabled',
  'minecraft:bedrock',
  'create:crushed_raw_iron', 
  'create:crushed_raw_gold', 
  'create:crushed_raw_copper', 
  'create:crushed_raw_silver', 
  'create:crushed_raw_lead'

  ];

  removeById.forEach((item) => {
    e.remove({ id: item });
  });

  removeByOutput.forEach((item) => {
    e.remove({ output: item });
  });

  removeByInput.forEach((item) => {
    e.remove({ input: item });

    


  });

 // Special Removals

  e.remove({ input: 'minecraft:bedrock' })

 
 e.remove({ input: 'quark:sturdy_stone' , output: 'minecraft:cobblestone', })
 e.remove({ input: 'minecraft:flint' , output: 'tconstruct:scorched_brick' })
 e.remove({ input: 'minecraft:flint' , output: 'tconstruct:seared_brick' })
 e.remove({ input: 'minecraft:rotten_flesh' , output: 'minecraft:leather' })
 e.remove({ input: 'minecraft:crying_obsidian' , output: 'minecraft:obsidian' })
 e.remove({ input: 'minecraft:cobblestone' , type: 'create:mixing' })
 e.remove({ output: 'oreganized:electrum_ingot' , type: 'create:mixing' })
 e.remove({ input: 'oreganized:lead_block' , type: 'create:mixing' })
 e.remove({ input: 'oreganized:glance' , type: 'minecraft:stonecutting' })
 e.remove({ output: 'oreganized:spotted_glance' , type: 'create:filling' })
 e.remove({ type: 'minecraft:stonecutting' })
 e.remove({ output: 'create:cogwheel' , type: 'create:deploying' })
 e.remove({ output: 'create:large_cogwheel' , type: 'create:deploying' })

  //e.remove({ mod: "pamhc2trees" });
  //e.remove({ mod: "waystones" });

  // Remove dying
  //e.remove({ type: "meadow:cooking" });
  //e.remove({ type: "meadow:woodcutting" });
  //e.remove({ type: "farm_and_charm:pot_cooking" });
  // Replace default milk
  //e.replaceInput({ fluid: "minecraft:milk" }, "minecraft:milk", "society:milk");
  // 
  // 
  
  */