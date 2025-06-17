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
  "farmersdelight:cutting/stone",
  "",
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
  
  //Vanilla Backport
  "vanillabackport:creaking_heart",
  "",

  //Botania
  "botania:pure_daisy/cobblestone",
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

  //Spelunkery
  "spelunkery:cobblestone_from_pebble"

      ];

      removeById.forEach((recipeid) => {
  event.remove({ id: recipeid })

      })

      });
 