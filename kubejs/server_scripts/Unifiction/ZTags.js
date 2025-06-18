// Listen to item tag event
ServerEvents.tags('item', event => {

    const girlfriendcraftTags = {

      'regions_unexplored:magnolia_logs': [
        'regions_unexplored:magnolia_log', 
        'regions_unexplored:stripped_magnolia_log', 
        'regions_unexplored:magnolia_wood', 
        'regions_unexplored:stripped_magnolia_wood', 
        'everycomp:q/regions_unexplored/hollow_magnolia_log'],

        'minecraft:palm_blocks': [
        'beachparty:palm_floorboard'],

        'minecraft:pine_blocks': [
        'meadow:pine_barn_door',
        'meadow:pine_barn_trapdoor',
        'meadow:chair',
        'meadow:table',
        'meadow:bench',
        'meadow:pine_railing',
        'meadow:shutter_block'
      ],

      'minecraft:unstripped_pine_logs': [
        'meadow:pine_beam'
      ],

      'minecraft:stone_blocks': [
        'minecraft:stone_pressure_plate', 
        'minecraft:stone_button'
      ],

      'minecraft:blackstone_blocks': [
        'minecraft:polished_blackstone_pressure_plate', 
        'minecraft:polished_blackstone_button'
      ],

      'minecraft:smelts_to_glass': [
        'yungscavebiomes:ancient_sand'
      ],

      'minecraft:glass': [
        'minecraft:glass', 
        'minecraft:white_stained_glass', 
        'minecraft:light_gray_stained_glass', 
        'minecraft:gray_stained_glass', 
        'minecraft:black_stained_glass', 
        'minecraft:brown_stained_glass', 
        'minecraft:red_stained_glass', 
        'minecraft:orange_stained_glass', 
        'minecraft:yellow_stained_glass', 
        'minecraft:lime_stained_glass', 
        'minecraft:green_stained_glass', 
        'minecraft:cyan_stained_glass', 
        'minecraft:light_blue_stained_glass', 
        'minecraft:blue_stained_glass', 
        'minecraft:purple_stained_glass', 
        'minecraft:magenta_stained_glass', 
        'minecraft:pink_stained_glass', 
        'quark:dirty_glass'
       ],

      'minecraft:coal_ores': [
        'spelunkery:andesite_coal_ore', 
        'spelunkery:diorite_coal_ore', 
        'spelunkery:granite_coal_ore', 
        'spelunkery:tuff_coal_ore', 
        'alexscaves:coprolith_coal_ore'
      ],

      'minecraft:copper_ores': [
        'spelunkery:andesite_copper_ore', 
        'spelunkery:diorite_copper_ore', 
        'spelunkery:granite_copper_ore', 
        'spelunkery:tuff_copper_ore'
      ],

      'minecraft:iron_ores': [
        'spelunkery:andesite_iron_ore', 
        'spelunkery:diorite_iron_ore', 
        'spelunkery:granite_iron_ore', 
        'spelunkery:tuff_iron_ore', 
        'alexscaves:galena_iron_ore'
      ],

      'minecraft:gold_ores': [
        'spelunkery:andesite_gold_ore', 
        'spelunkery:diorite_gold_ore', 
        'spelunkery:granite_gold_ore', 
        'spelunkery:tuff_gold_ore'
      ],

      'minecraft:redstone_ores': [
        'spelunkery:andesite_redstone_ore', 
        'spelunkery:diorite_redstone_ore', 
        'spelunkery:granite_redstone_ore', 
        'spelunkery:tuff_redstone_ore', 
        'spelunkery:calcite_redstone_ore', 
        'alexscaves:guanostone_redstone_ore'
      ],

      'minecraft:lapis_ores': [
        'spelunkery:andesite_lapis_ore', 
        'spelunkery:diorite_lapis_ore', 
        'spelunkery:granite_lapis_ore', 
        'spelunkery:tuff_lapis_ore', 
        'spelunkery:sandstone_lapis_ore'
      ],

      'minecraft:diamond_ores': [
        'spelunkery:andesite_diamond_ore', 
        'spelunkery:diorite_diamond_ore', 
        'spelunkery:granite_diamond_ore', 
        'spelunkery:tuff_diamond_ore', 
        'spelunkery:smooth_basalt_diamond_ore'
      ],

      'minecraft:emerald_ores': [
        'spelunkery:andesite_emerald_ore', 
        'spelunkery:diorite_emerald_ore', 
        'spelunkery:granite_emerald_ore', 
        'spelunkery:tuff_emerald_ore'
      ],
      
      /*
      'girlfriendcraft:resin_blocks': [
        'vanillabackport:resin_bricks',
        'vanillabackport:chiseled_resin_bricks',
        'vanillabackport:resin_brick_stairs',
        'vanillabackport:resin_brick_wall',
      ],

      'girlfriendcraft:lead_building_blocks': [
        'oreganized:cut_lead',
        'oreganized:lead_bricks',
        'oreganized:lead_pillar',
      ],

      'girlfriendcraft:hammer': [
        'another_furniture:furniture_hammer',
      ],

      'girlfriendcraft:stone_blocks': [
        'minecraft:smooth_stone',
      ],

      'girlfriendcraft:stone_slabs': [
        'minecraft:smooth_stone_slab',
        'quark:smooth_stone_vertical_slab',
      ],

      'girlfriendcraft:glowy_blocks': [
        'minecraft:glowstone',
        'minecraft:shroomlight',
      ],
      'girlfriendcraft:rose_quartz': [
        'create:rose_quartz_block',
        'create:small_rose_quartz_tiles',
        'create:rose_quartz_tiles',
      ],
      'girlfriendcraft:allurite_cluster': [
        'galosphere:allurite_cluster',
        'galosphere:glinted_allurite_cluster',
      ],
      'girlfriendcraft:allurite_slab': [
        'galosphere:allurite_slab',
        'galosphere:smooth_allurite_slab',
        'galosphere:allurite_brick_slab',
      ],
      'girlfriendcraft:allurite_block': [
        'galosphere:allurite_block',
        'galosphere:allurite_stairs',
        'galosphere:chiseled_allurite',
        'galosphere:smooth_allurite',
        'galosphere:smooth_allurite_stairs',
        'galosphere:allurite_bricks',
        'galosphere:allurite_brick_stairs',
      ],
      'girlfriendcraft:lumiere_cluster': [
        'galosphere:lumiere_cluster',
        'galosphere:glinted_lumiere_cluster',
      ],
      'girlfriendcraft:lumiere_slab': [
        'galosphere:lumiere_slab',
        'galosphere:smooth_lumiere_slab',
        'galosphere:lumiere_brick_slab',
      ],
      'girlfriendcraft:lumiere_block': [
        'galosphere:lumiere_block',
        'galosphere:lumiere_stairs',
        'galosphere:chiseled_lumiere',
        'galosphere:smooth_lumiere',
        'galosphere:smooth_lumiere_stairs',
        'galosphere:lumiere_bricks',
        'galosphere:lumiere_brick_stairs',
      ],
      'girlfriendcraft:amethyst_cluster': [
        'minecraft:amethyst_cluster',
        'galosphere:glinted_amethyst_cluster',
      ],
      'girlfriendcraft:amethyst_slab': [
        'galosphere:amethyst_slab',
        'galosphere:smooth_amethyst_slab',
        'galosphere:amethyst_brick_slab',
      ],
      'girlfriendcraft:amethyst_block': [
        'minecraft:amethyst_block',
        'galosphere:amethyst_stairs',
        'galosphere:chiseled_amethyst',
        'galosphere:smooth_amethyst',
        'galosphere:smooth_amethyst_stairs',
        'galosphere:amethyst_bricks',
        'galosphere:amethyst_brick_stairs',
      ],
      'girlfriendcraft:rock_salt_slab': [
        'spelunkery:rock_salt_slab',
        'spelunkery:polished_rock_salt_slab',
        'spelunkery:rock_salt_brick_slab',
      ],
      'girlfriendcraft:rock_salt_block': [
        'spelunkery:rock_salt_block',
        'spelunkery:rock_salt_stairs',
        'spelunkery:rock_salt_wall',
        'spelunkery:polished_rock_salt',
        'spelunkery:polished_rock_salt_stairs',
        'spelunkery:polished_rock_salt_wall',
        'spelunkery:rock_salt_bricks',
        'spelunkery:rock_salt_brick_stairs',
        'spelunkery:rock_salt_brick_wall',
      ],
      'girlfriendcraft:pink_salt_slab': [
        'galosphere:pink_salt_slab',
        'galosphere:rose_pink_salt_slab',
        'galosphere:pastel_pink_salt_slab',
        'galosphere:polished_pink_salt_slab',
        'galosphere:polished_rose_pink_salt_slab',
        'galosphere:polished_pastel_pink_salt_slab',
        'galosphere:pink_salt_brick_slab',
        'galosphere:rose_pink_salt_brick_slab',
        'galosphere:pastel_pink_salt_brick_slab',
      ],
      'girlfriendcraft:pink_salt_block': [
        'galosphere:pink_salt',
        'galosphere:rose_pink_salt',
        'galosphere:pastel_pink_salt',
        'galosphere:pink_salt_stairs',
        'galosphere:rose_pink_salt_stairs',
        'galosphere:pastel_pink_salt_stairs',
        'galosphere:pink_salt_wall',
        'galosphere:rose_pink_salt_wall',
        'galosphere:pastel_pink_salt_wall',
        'galosphere:polished_pink_salt',
        'galosphere:polished_rose_pink_salt',
        'galosphere:polished_pastel_pink_salt',
        'galosphere:polished_pink_salt_stairs',
        'galosphere:polished_rose_pink_salt_stairs',
        'galosphere:polished_pastel_pink_salt_stairs',
        'galosphere:polished_pink_salt_wall',
        'galosphere:polished_rose_pink_salt_wall',
        'galosphere:polished_pastel_pink_salt_wall',
        'galosphere:pink_salt_bricks',
        'galosphere:rose_pink_salt_bricks',
        'galosphere:pastel_pink_salt_bricks',
        'galosphere:pink_salt_brick_stairs',
        'galosphere:rose_pink_salt_brick_stairs',
        'galosphere:pastel_pink_salt_brick_stairs',
        'galosphere:pink_salt_brick_wall',
        'galosphere:rose_pink_salt_brick_wall',
        'galosphere:pastel_pink_salt_brick_wall',
        'galosphere:chiseled_pink_salt',
        'galosphere:chiseled_rose_pink_salt',
        'galosphere:chiseled_pastel_pink_salt'
      ],

      'girlfriendcraft:pink_pink_salt_slab': [
        'galosphere:pink_salt_slab',
        'galosphere:polished_pink_salt_slab',
        'galosphere:pink_salt_brick_slab',
      ],
      'girlfriendcraft:pink_pink_salt_block': [
        'galosphere:pink_salt',
        'galosphere:pink_salt_stairs',
        'galosphere:pink_salt_wall',
        'galosphere:polished_pink_salt',
        'galosphere:polished_pink_salt_stairs',
        'galosphere:polished_pink_salt_wall',
        'galosphere:pink_salt_bricks',
        'galosphere:pink_salt_brick_stairs',
        'galosphere:pink_salt_brick_wall',
        'galosphere:chiseled_pink_salt',
      ],

      'girlfriendcraft:rose_pink_salt_slab': [
        'galosphere:rose_pink_salt_slab',
        'galosphere:polished_rose_pink_salt_slab',
        'galosphere:rose_pink_salt_brick_slab',
      ],
      'girlfriendcraft:rose_pink_salt_block': [
        'galosphere:rose_pink_salt',
        'galosphere:rose_pink_salt_stairs',
        'galosphere:rose_pink_salt_wall',
        'galosphere:polished_rose_pink_salt',
        'galosphere:polished_rose_pink_salt_stairs',
        'galosphere:polished_rose_pink_salt_wall',
        'galosphere:rose_pink_salt_bricks',
        'galosphere:rose_pink_salt_brick_stairs',
        'galosphere:rose_pink_salt_brick_wall',
        'galosphere:chiseled_rose_pink_salt',
      ],

      'girlfriendcraft:pastel_pink_salt_slab': [
        'galosphere:pastel_pink_salt_slab',
        'galosphere:polished_pastel_pink_salt_slab',
        'galosphere:pastel_pink_salt_brick_slab',
      ],
      'girlfriendcraft:pastel_pink_salt_block': [
        'galosphere:pastel_pink_salt',
        'galosphere:pastel_pink_salt_stairs',
        'galosphere:pastel_pink_salt_wall',
        'galosphere:polished_pastel_pink_salt',
        'galosphere:polished_pastel_pink_salt_stairs',
        'galosphere:polished_pastel_pink_salt_wall',
        'galosphere:pastel_pink_salt_bricks',
        'galosphere:pastel_pink_salt_brick_stairs',
        'galosphere:pastel_pink_salt_brick_wall',
        'galosphere:chiseled_pastel_pink_salt',
      ],


      'girlfriendcraft:asurine': [
        'create:asurine',
        'create:cut_asurine',
        'create:cut_asurine_stairs',
        'create:cut_asurine_wall',
        'create:polished_cut_asurine',
        'create:polished_cut_asurine_stairs',
        'create:polished_cut_asurine_wall',
        'create:cut_asurine_bricks',
        'create:cut_asurine_brick_stairs',
        'create:cut_asurine_brick_wall',
        'create:small_asurine_bricks',
        'create:small_asurine_brick_stairs',
        'create:small_asurine_brick_wall',
        'create:layered_asurine',
        'create:asurine_pillar',
      ],
      'girlfriendcraft:asurine_slabs': [
        'create:cut_asurine_slab', 
        'create:polished_cut_asurine_slab', 
        'create:cut_asurine_brick_slab', 
        'create:small_asurine_brick_slab'
      ],
      'girlfriendcraft:crimsite': [
        'create:crimsite',
        'create:cut_crimsite',
        'create:cut_crimsite_stairs',
        'create:cut_crimsite_wall',
        'create:polished_cut_crimsite',
        'create:polished_cut_crimsite_stairs',
        'create:polished_cut_crimsite_wall',
        'create:cut_crimsite_bricks',
        'create:cut_crimsite_brick_stairs',
        'create:cut_crimsite_brick_wall',
        'create:small_crimsite_bricks',
        'create:small_crimsite_brick_stairs',
        'create:small_crimsite_brick_wall',
        'create:layered_crimsite',
        'create:crimsite_pillar',
      ],
      'girlfriendcraft:crimsite_slabs': [
        'create:cut_crimsite_slab', 
        'create:polished_cut_crimsite_slab', 
        'create:cut_crimsite_brick_slab', 
        'create:small_crimsite_brick_slab'
      ],
      'girlfriendcraft:ochrum': [
        'create:ochrum',
        'create:cut_ochrum',
        'create:cut_ochrum_stairs',
        'create:cut_ochrum_wall',
        'create:polished_cut_ochrum',
        'create:polished_cut_ochrum_stairs',
        'create:polished_cut_ochrum_wall',
        'create:cut_ochrum_bricks',
        'create:cut_ochrum_brick_stairs',
        'create:cut_ochrum_brick_wall',
        'create:small_ochrum_bricks',
        'create:small_ochrum_brick_stairs',
        'create:small_ochrum_brick_wall',
        'create:layered_ochrum',
        'create:ochrum_pillar',
      ],
      'girlfriendcraft:ochrum_slabs': [
        'create:cut_ochrum_slab', 
        'create:polished_cut_ochrum_slab', 
        'create:cut_ochrum_brick_slab', 
        'create:small_ochrum_brick_slab'
      ],
      'girlfriendcraft:veridium': [
        'create:veridium',
        'create:cut_veridium',
        'create:cut_veridium_stairs',
        'create:cut_veridium_wall',
        'create:polished_cut_veridium',
        'create:polished_cut_veridium_stairs',
        'create:polished_cut_veridium_wall',
        'create:cut_veridium_bricks',
        'create:cut_veridium_brick_stairs',
        'create:cut_veridium_brick_wall',
        'create:small_veridium_bricks',
        'create:small_veridium_brick_stairs',
        'create:small_veridium_brick_wall',
        'create:layered_veridium',
        'create:veridium_pillar',
      ],
      'girlfriendcraft:veridium_slabs': [
        'create:cut_veridium_slab', 
        'create:polished_cut_veridium_slab', 
        'create:cut_veridium_brick_slab', 
        'create:small_veridium_brick_slab'
      ],
      'girlfriendcraft:sandstone_block': [
        'minecraft:sandstone',
        'minecraft:sandstone_stairs',
        'minecraft:sandstone_wall',
        'minecraft:chiseled_sandstone',
        'minecraft:smooth_sandstone',
        'minecraft:smooth_sandstone_stairs',
        'minecraft:cut_sandstone',
      ],
      'girlfriendcraft:sandstone_slab': [
        'minecraft:sandstone_slab',
        'minecraft:smooth_sandstone_slab',
        'minecraft:cut_sandstone_slab',
      ],
      'girlfriendcraft:red_sandstone_block': [
        'minecraft:red_sandstone',
        'minecraft:red_sandstone_stairs',
        'minecraft:red_sandstone_wall',
        'minecraft:chiseled_red_sandstone',
        'minecraft:smooth_red_sandstone',
        'minecraft:smooth_red_sandstone_stairs',
        'minecraft:cut_red_sandstone',
      ],
      'girlfriendcraft:red_sandstone_slab': [
        'minecraft:red_sandstone_slab',
        'minecraft:smooth_red_sandstone_slab',
        'minecraft:cut_red_sandstone_slab',
      ],
      'girlfriendcraft:glowy_stuff': [
        'minecraft:glow_ink_sac',
        'spelunkery:phosphor_fungus',
        'spelunkery:mushgloom',
        'minecraft:glowstone_dust',
      ],/*
      'girlfriendcraft:stripped_logs': [
        'minecraft:stripped_oak_log', 
        'minecraft:stripped_spruce_log', 
        'minecraft:stripped_birch_log', 
        'minecraft:stripped_jungle_log', 
        'minecraft:stripped_acacia_log', 
        'minecraft:stripped_dark_oak_log', 
        'minecraft:stripped_mangrove_log', 
        'minecraft:stripped_cherry_log',
        'quark:stripped_ancient_log',
        'quark:stripped_blossom_log',
        'aether:stripped_skyroot_log',
        'tconstruct:stripped_greenheart_log',
        'tconstruct:stripped_skyroot_log',
        'tconstruct:stripped_enderbark_log',
        'tconstruct:stripped_bloodshroom_log',
        'caverns_and_chasms:stripped_azalea_log'
      ],

        

      'girlfriendcraft:logs': [
        'minecraft:oak_log', 
        'minecraft:spruce_log', 
        'minecraft:birch_log', 
        'minecraft:jungle_log', 
        'minecraft:acacia_log', 
        'minecraft:dark_oak_log', 
        'minecraft:mangrove_log', 
        'minecraft:cherry_log',
        'quark:ancient_log',
        'quark:blossom_log',
        'aether:skyroot_log',
        'tconstruct:greenheart_log',
        'tconstruct:skyroot_log', 
        'tconstruct:enderbark_log',
        'tconstruct:bloodshroom_log',
        'caverns_and_chasms:azalea_log',
      ],

      'girlfriendcraft:all_logs': [
          '#girlfriendcraft:logs',
          '#girlfriendcraft:stripped_logs' ], 
     
         
      'girlfriendcraft:planks': [
        'minecraft:oak_planks', 
        'minecraft:spruce_planks', 
        'minecraft:birch_planks', 
        'minecraft:jungle_planks', 
        'minecraft:acacia_planks', 
        'minecraft:dark_oak_planks', 
        'minecraft:mangrove_planks', 
        'minecraft:cherry_planks',
        'quark:ancient_planks',
        'quark:blossom_planks',
      'aether:skyroot_planks',
      'tconstruct:greenheart_planks',
      'tconstruct:skyroot_planks',
      'tconstruct:enderbark_planks',
      'tconstruct:bloodshroom_planks',
      'caverns_and_chasms:azalea_planks',
     
    
    ],

    'girlfriendcraft:silver_building_blocks': [
      'galosphere:silver_panel', 
      'galosphere:silver_panel_stairs', 
      'galosphere:silver_tiles', 
      'galosphere:silver_tiles_stairs', 
    ],

    'girlfriendcraft:silver_building_slabs': [
      'galosphere:silver_panel_slab', 
      'galosphere:silver_tiles_slab', 
    ],

    'girlfriendcraft:cobblestone': [
        'minecraft:cobblestone',
        'minecraft:cobblestone_stairs',
        'minecraft:cobblestone_wall',
        'quark:cobblestone_bricks',
        'quark:cobblestone_bricks_stairs',
        'quark:cobblestone_bricks_wall',
        'caverns_and_chasms:cobblestone_bricks',
        'caverns_and_chasms:cobblestone_brick_stairs',
        'caverns_and_chasms:cobblestone_brick_wall',
        'caverns_and_chasms:cobblestone_tiles',
        'caverns_and_chasms:cobblestone_tile_stairs',
        'caverns_and_chasms:cobblestone_tile_wall',
      ],
      'girlfriendcraft:cobblestone_slab': [
        'minecraft:cobblestone_slab',
        'quark:cobblestone_vertical_slab',
        'caverns_and_chasms:cobblestone_brick_slab',
        'caverns_and_chasms:cobblestone_tile_slab',
        'quark:cobblestone_bricks_slab',
        'quark:cobblestone_bricks_vertical_slab',
      ],

      'girlfriendcraft:mossy_cobblestone': [
        'minecraft:mossy_cobblestone',
        'minecraft:mossy_cobblestone_stairs',
        'minecraft:mossy_cobblestone_wall',
        'quark:mossy_cobblestone_bricks',
        'quark:mossy_cobblestone_bricks_stairs',
        'quark:mossy_cobblestone_bricks_wall',
        'caverns_and_chasms:mossy_cobblestone_bricks',
        'caverns_and_chasms:mossy_cobblestone_brick_stairs',
        'caverns_and_chasms:mossy_cobblestone_brick_wall',
        'caverns_and_chasms:mossy_cobblestone_tiles',
        'caverns_and_chasms:mossy_cobblestone_tile_stairs',
        'caverns_and_chasms:mossy_cobblestone_tile_wall',
      ],
      'girlfriendcraft:mossy_cobblestone_slab': [
        'minecraft:mossy_cobblestone_slab',
        'quark:mossy_cobblestone_vertical_slab',
        'quark:mossy_cobblestone_bricks_slab',
        'quark:mossy_cobblestone_bricks_vertical_slab',
        'caverns_and_chasms:mossy_cobblestone_brick_slab',
        'caverns_and_chasms:mossy_cobblestone_tile_slab',
      ],

      'girlfriendcraft:calcite': [
        'minecraft:calcite',
        'quark:calcite_wall',
        'quark:calcite_stairs',
        'quark:polished_calcite',
        'quark:polished_calcite_stairs',
        'quark:calcite_bricks',
        'quark:chiseled_calcite_bricks',
        'quark:calcite_pillar',
        'quark:calcite_bricks_wall',
        'caverns_and_chasms:polished_calcite',
        'caverns_and_chasms:polished_calcite_stairs',
        'create:polished_cut_calcite',
        'create:polished_cut_calcite_stairs',
        'create:polished_cut_calcite_wall',
        'create:cut_calcite',
        'create:cut_calcite_stairs',
        'create:cut_calcite_wall',
        'create:cut_calcite_bricks',
        'create:cut_calcite_brick_stairs',
        'create:cut_calcite_brick_wall',
        'create:small_calcite_bricks',
        'create:small_calcite_brick_stairs',
        'create:small_calcite_brick_wall',
        'create:layered_calcite',
        'create:calcite_pillar',
      ],
      'girlfriendcraft:calcite_slab': [
        'quark:calcite_slab',
        'quark:calcite_vertical_slab',
        'quark:polished_calcite_slab',
        'quark:polished_calcite_vertical_slab',
        'quark:calcite_bricks_slab',
        'quark:calcite_bricks_vertical_slab',
        'quark:calcite_bricks_stairs',
        'caverns_and_chasms:polished_calcite_slab',
        'create:polished_cut_calcite_slab',
        'create:cut_calcite_slab',
        'create:cut_calcite_brick_slab',
        'create:small_calcite_brick_slab',
        
      ],

      'girlfriendcraft:tuff': [
        'caverns_and_chasms:tuff_stairs',
        'caverns_and_chasms:tuff_wall',
        'caverns_and_chasms:polished_tuff',
        'caverns_and_chasms:polished_tuff_stairs',
        
      ],
      'girlfriendcraft:tuff_slab': [
        'caverns_and_chasms:tuff_slab',
        'caverns_and_chasms:polished_tuff_slab',
      ],
      'girlfriendcraft:granite': [
        'create:cut_granite',
        'create:cut_granite_stairs',
        'create:cut_granite_wall',
        'create:polished_cut_granite',
        'create:polished_cut_granite_stairs',
        'create:polished_cut_granite_wall',
        'create:cut_granite_bricks',
        'create:cut_granite_brick_stairs',
        'create:cut_granite_brick_wall',
        'create:small_granite_bricks',
        'create:small_granite_brick_stairs',
        'create:small_granite_brick_wall',
        'create:layered_granite',
        'create:granite_pillar'
        
      ],
      'girlfriendcraft:granite_slab': [
        'create:cut_granite_slab',
        'create:polished_cut_granite_slab',
        'create:cut_granite_brick_slab',
        'create:small_granite_brick_slab'
      ],

      'girlfriendcraft:copper': [
        'minecraft:cut_copper',
        'minecraft:cut_copper_stairs',
        'create:copper_shingles',
        'create:copper_shingle_stairs',
        'create:copper_tiles',
        'create:copper_tile_stairs',
        'trials:chiseled_copper',
        'trials:copper_grate'
        
      ],
      'girlfriendcraft:exposed_copper': [
        'minecraft:exposed_cut_copper',
        'minecraft:exposed_cut_copper_stairs',
        'create:exposed_copper_shingles',
        'create:exposed_copper_shingle_stairs',
        'create:exposed_copper_tiles',
        'create:exposed_copper_tile_stairs',
        'trials:chiseled_copper_exposed',
        'trials:copper_grate_exposed'
        
      ],
      'girlfriendcraft:weathered_copper': [
        'minecraft:weathered_cut_copper',
        'minecraft:weathered_cut_copper_stairs',
        'create:weathered_copper_shingles',
        'create:weathered_copper_shingle_stairs',
        'create:weathered_copper_tiles',
        'create:weathered_copper_tile_stairs',
        'trials:chiseled_copper_weathered',
        'trials:copper_grate_weathered'
        
      ],
      'girlfriendcraft:oxidized_copper': [
        'minecraft:oxidized_cut_copper',
        'minecraft:oxidized_cut_copper_stairs',
        'create:oxidized_copper_shingles',
        'create:oxidized_copper_shingle_stairs',
        'create:oxidized_copper_tiles',
        'create:oxidized_copper_tile_stairs',
        'trials:chiseled_copper_oxidized',
        'trials:copper_grate_oxidized'
        
      ],
      'girlfriendcraft:copper_slab': [
        'minecraft:cut_copper_slab',
        'quark:cut_copper_vertical_slab',
        'create:copper_shingle_slab',
        'create:copper_tile_slab'
      ],

      'girlfriendcraft:exposed_copper_slab': [
        'minecraft:exposed_cut_copper_slab',
        'quark:exposed_cut_copper_vertical_slab',
        'create:exposed_copper_shingle_slab',
        'create:exposed_copper_tile_slab'
      ],

      'girlfriendcraft:weathered_copper_slab': [
        'minecraft:weathered_cut_copper_slab',
        'quark:weathered_cut_copper_vertical_slab',
        'create:weathered_copper_shingle_slab',
        'create:weathered_copper_tile_slab'
      ],

      'girlfriendcraft:oxidized_copper_slab': [
        'minecraft:oxidized_cut_copper_slab',
        'quark:oxidized_cut_copper_vertical_slab',
        'create:oxidized_copper_shingle_slab',
        'create:oxidized_copper_tile_slab'
      ],

      'girlfriendcraft:glass': [
        'minecraft:glass',
        'create:tiled_glass',
        'create:framed_glass',
        'create:horizontal_framed_glass',
        'create:vertical_framed_glass',
      ],
      'girlfriendcraft:glass_pane': [
        'minecraft:glass_pane',
        'create:tiled_glass_pane',
        'create:framed_glass_pane',
        'create:horizontal_framed_glass_pane',
        'create:vertical_framed_glass_pane',
      ],
*/
    
    };
  
    for (const [tag, blocks] of Object.entries(girlfriendcraftTags)) {
      blocks.forEach(block => event.add(tag, block));
    }


/*
    const girlfriendcraftremovedTags = {

      'minecraft:bedrock': [
        'spelunkery:gold_ores',
        'spelunkery:silver_ores',
        'forge:ingots/brass',
        'forge:nuggets/brass',
        'forge:plates/brass',
        'forge:storage_blocks/brass',
        'forge:ingots/zinc',
        'forge:nuggets/zinc',
        'forge:ingots/cobalt',
        'forge:nuggets/cobalt',
        'create:stone_types/asurine',
        'create:stone_types/crimsite',
        'create:stone_types/ochrum',
        'create:stone_types/veridium',

      ],

      
      

    };
  


    for (const [tag, blocks] of Object.entries(girlfriendcraftremovedTags)) {
      blocks.forEach(block => event.add(block, tag));
    }
*/
  })
