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
 