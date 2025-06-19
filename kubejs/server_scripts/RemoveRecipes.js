  console.info("[GUFFE] removeRecipes.js loaded");

ServerEvents.recipes((event) => {
  
  const removeById = [

  // Minecraft
  "minecraft:ender_eye",
  "minecraft:bamboo_stairs",
  "minecraft:bamboo_mosaic_stairs",
  "minecraft:smooth_stone",
  "minecraft:granite",
  "minecraft:diorite",
  "minecraft:andesite",
  "minecraft:packed_mud",
  "minecraft:smooth_sandstone",
  "minecraft:smooth_red_sandstone",
  "minecraft:prismarine_bricks",
  "minecraft:smooth_basalt",
  "minecraft:dye_white_wool",
  "minecraft:dye_light_gray_wool",
  "minecraft:dye_gray_wool",
  "minecraft:dye_black_wool",
  "minecraft:dye_brown_wool",
  "minecraft:dye_red_wool",
  "minecraft:dye_orange_wool",
  "minecraft:dye_yellow_wool",
  "minecraft:dye_lime_wool",
  "minecraft:dye_green_wool",
  "minecraft:dye_cyan_wool",
  "minecraft:dye_light_blue_wool",
  "minecraft:dye_blue_wool",
  "minecraft:dye_purple_wool",
  "minecraft:dye_magenta_wool",
  "minecraft:dye_pink_wool",
  "minecraft:cut_copper",
  "minecraft:shulker_box",
  "minecraft:coal_from_smelting_coal_ore",
  "minecraft:coal_from_smelting_deepslate_coal_ore",
  "minecraft:iron_ingot_from_smelting_iron_ore",
  "minecraft:iron_ingot_from_smelting_deepslate_iron_ore",
  "minecraft:copper_ingot_from_smelting_copper_ore",
  "minecraft:copper_ingot_from_smelting_deepslate_copper_ore",
  "minecraft:gold_ingot_from_smelting_gold_ore",
  "minecraft:gold_ingot_from_smelting_deepslate_gold_ore",
  "minecraft:coal_from_blasting_coal_ore",
  "minecraft:coal_from_blasting_deepslate_coal_ore",
  "minecraft:iron_ingot_from_blasting_iron_ore",
  "minecraft:iron_ingot_from_blasting_deepslate_iron_ore",
  "minecraft:copper_ingot_from_blasting_copper_ore",
  "minecraft:copper_ingot_from_blasting_deepslate_copper_ore",
  "minecraft:gold_ingot_from_blasting_gold_ore",
  "minecraft:gold_ingot_from_blasting_deepslate_gold_ore",
  "minecraft:redstone_from_blasting_redstone_ore",
  "minecraft:redstone_from_smelting_redstone_ore",
  "minecraft:redstone_from_smelting_deepslate_redstone_ore",
  "minecraft:redstone_from_blasting_deepslate_redstone_ore",
  "minecraft:emerald_from_smelting_emerald_ore",
  "minecraft:emerald_from_blasting_emerald_ore",
  "minecraft:lapis_lazuli_from_smelting_lapis_ore",
  "minecraft:lapis_lazuli_from_blasting_lapis_ore",
  "minecraft:diamond_from_smelting_diamond_ore",
  "minecraft:diamond_from_blasting_diamond_ore",
  "minecraft:gold_ingot_from_smelting_nether_gold_ore",
  "minecraft:gold_ingot_from_blasting_nether_gold_ore",
  "minecraft:quartz",
  "minecraft:quartz_from_blasting",
  "minecraft:emerald_from_smelting_deepslate_emerald_ore",
  "minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore",
  "minecraft:diamond_from_smelting_deepslate_diamond_ore",
  
  "",
  "",



  // Tinkers
  "tconstruct:smeltery/casting/ender/eye",
  "tconstruct:common/glass/vanilla/beacon",
  "tconstruct:smeltery/casting/quartz/granite",
  "tconstruct:smeltery/casting/quartz/diorite",
  "tconstruct:smeltery/casting/quartz/andesite",
  "tconstruct:smeltery/casting/water/mud",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  

  // Farmers Delight
  "farmersdelight:organic_compost_from_rotten_flesh",
  "farmersdelight:organic_compost_from_tree_bark",
  "farmersdelight:cutting/gravel",
  "",
  "",
  "",

  // Nature's Compass
  "naturescompass:natures_compass",

  //AnotherFurniture
  "another_furniture:bamboo_shutter",
  "another_furniture:bamboo_flower_box",
  "another_furniture:bamboo_bench",
  "another_furniture:bamboo_drawer",

  //Meadow
  "everycomp:ru/meadow/pine_sapling_from_pine_shrub",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",

  //Create
  "create:haunting/infested_cracked_stone_bricks",
  "create:haunting/infested_chiseled_stone_bricks",
  "create:milling/andesite",
  "create:milling/cobblestone",
  "create:milling/sandstone",
  "create:milling/dripstone_block",
  "create:milling/clay",
  "create:milling/granite",
  "create:milling/terracotta",
  "create:smelting/glass_from_tiled_glass",
  "create:smelting/glass_from_framed_glass",
  "create:smelting/glass_from_horizontal_framed_glass",
  "create:smelting/glass_from_vertical_framed_glass",
  "create:smelting/glass_pane_from_tiled_glass_pane",
  "create:smelting/glass_pane_from_framed_glass_pane",
  "create:smelting/glass_pane_from_horizontal_framed_glass_pane",
  "create:smelting/glass_pane_from_vertical_framed_glass_pane",
  "create:splashing/sand",
  "create:splashing/atmospheric/arid_sand",
  "create:splashing/atmospheric/red_arid_sand",
  "create:splashing/magma_block",
  "",
  "",
  "",
  
  //Vanilla Backport
  "atmospheric:glass_from_arid_glass",
  "atmospheric:glass_pane_from_arid_glass_pane",

  //Atmospheric
  "vanillabackport:creaking_heart",
  "",

   //Yungs Cave Biomes
  "yungscavebiomes:glass_from_ancient_sand",
  "",

  // Roots
  "rootsclassic:brazier",
  "rootsclassic:altar",
  "rootsclassic:mundane_standing_stone",
  "",
  "",
  "",
  "",

  //Botania
  "",
  "",
  "",
  "",

   //Quark
  "quark:building/crafting/sturdy_stone_decompress",
  "quark:tweaks/smelting/clean_glass",
  "quark:building/crafting/sturdy_stone",
  "quark:building/crafting/furnaces/mixed_furnace",
  "quark:building/crafting/furnaces/cobblestone_furnace",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",

   //Caverns
  "caverns_and_chasms:calcite",
  "caverns_and_chasms:tuff",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  
  // Jadens Nether
  "netherexp:cooking/netherrack",

  // Porjext Vivrant Journeys
  "projectvibrantjourneys:glowcap_to_shroomlight",

  //Spelunkery
  "spelunkery:cobblestone_from_pebble",
  "spelunkery:cobbled_deepslate_from_pebble",
  "spelunkery:netherrack_from_pebble",
  "spelunkery:basalt_from_pebble",
  "spelunkery:blackstone_from_pebble",
  "spelunkery:end_stone_from_pebble",
  "spelunkery:stick_from_tangle_roots",
  "spelunkery:magma_from_pebble",
  "spelunkery:coal_ore_smelting",
  "spelunkery:iron_ore_smelting",
  "spelunkery:copper_ore_smelting",
  "spelunkery:gold_ore_smelting",
  "spelunkery:redstone_ore_smelting",
  "spelunkery:emerald_ore_smelting",
  "spelunkery:lapis_ore_smelting",
  "spelunkery:diamond_ore_smelting",
  "spelunkery:coal_ore_blasting",
  "spelunkery:iron_ore_blasting",
  "spelunkery:copper_ore_blasting",
  "spelunkery:gold_ore_blasting",
  "spelunkery:redstone_ore_blasting",
  "spelunkery:emerald_ore_blasting",
  "spelunkery:lapis_ore_blasting",
  "spelunkery:diamond_ore_blasting",
  "",
  "",
  "",
  "",
  "",

      ];

      removeById.forEach((recipeid) => {
  event.remove({ id: recipeid })

      })

  event.remove({ output: "#girlfriendcraft:disabled" })
  event.remove({ input: "#girlfriendcraft:disabled" })

      });
 