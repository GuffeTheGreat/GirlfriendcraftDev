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
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",


  // Tinkers
  "tconstruct:smeltery/casting/ender/eye",
  "tconstruct:common/glass/vanilla/beacon",
  "tconstruct:smeltery/casting/quartz/granite",
  "tconstruct:smeltery/casting/quartz/diorite",
  "tconstruct:smeltery/casting/quartz/andesite",
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
  "minecraft:cut_copper",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  
  //Vanilla Backport
  "vanillabackport:creaking_heart",
  "",

  //Botania
  "botania:pure_daisy/cobblestone",
  "botania:pure_daisy/sand",
  "botania:pure_daisy/end_stone_to_cobbled_deepslate",
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

   //Quark
  "quark:building/crafting/sturdy_stone_decompress",
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


  //Spelunkery
  "spelunkery:cobblestone_from_pebble",
  "spelunkery:cobbled_deepslate_from_pebble",
  "spelunkery:netherrack_from_pebble",
  "spelunkery:basalt_from_pebble",
  "spelunkery:blackstone_from_pebble",
  "spelunkery:end_stone_from_pebble",
  "",
  "",
  "",
  "",
  "",

      ];

      removeById.forEach((recipeid) => {
  event.remove({ id: recipeid })

      })

      });
 