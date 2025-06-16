

ClientEvents.lang('en_us', event => {

    let renameItems = [

      // Ashen Blocks Repurspoosed
      { id: 'regions_unexplored:ashen_grass', name: 'Pale Grass' },
      { id: 'regions_unexplored:ashen_shrub', name: 'Pale Shrub' },

      // Sturdy Stone
      { id: 'create:andesite_alloy_block', name: 'Sturdy Stone Alloy Block' },
      { id: 'createdeco:andesite_sheet_metal', name: 'Sturdy Stone Alloy Sheet' },
      { id: 'createdeco:andesite_door', name: 'Sturdy Stone Door' },
      { id: 'createdeco:locked_andesite_door', name: 'Locked Sturdy Stone Door' },
      { id: 'createdeco:andesite_trapdoor', name: 'Sturdy Stone Trapdoor' },
      { id: 'createdeco:andesite_catwalk_stairs', name: 'Sturdy Stone Catwalk Stairs' },
      { id: 'create:andesite_casing', name: 'Sturdy Stone Casing' },
      { id: 'create:andesite_funnel', name: 'Sturdy Stone Funnel' },
      { id: 'create:andesite_tunnel', name: 'Sturdy Stone Tunnel' },
      { id: 'create:andesite_table_cloth', name: 'Sturdy Stone Table Cloth' },
      { id: 'create:andesite_ladder', name: 'Sturdy Stone Ladder' },
      { id: 'create:andesite_bars', name: 'Sturdy Stone Bars' },
      { id: 'create:andesite_alloy', name: 'Sturdy Stone Alloy' },
      { id: 'create:andesite_scaffolding', name: 'Sturdy Stone Scaffolding' },
      { id: 'create:andesite_door', name: 'Sturdy Stone Door' },
      { id: 'createdeco:andesite_bars', name: 'Sturdy Stone Bars' },
      { id: 'createdeco:andesite_bars_overlay', name: 'Sturdy Stone Bars Overlay' },
      { id: 'createdeco:andesite_catwalk', name: 'Sturdy Stone Catwalk' },
      { id: 'createdeco:andesite_mesh_fence', name: 'Sturdy Stone Mesh Fence' },
      { id: 'createdeco:andesite_window_pane', name: 'Sturdy Stone Window Pane' },
      { id: 'createdeco:andesite_window', name: 'Sturdy Stone Window' },
      { id: 'createdeco:andesite_sheet', name: 'Sturdy Stone Alloy Sheet' },
      { id: 'createdeco:andesite_support', name: 'Sturdy Stone Support' },
      { id: 'createdeco:andesite_hull', name: 'Sturdy Stone Hull' },
      { id: 'createdeco:andesite_facade', name: 'Sturdy Stone Facade' },
      { id: 'createdeco:andesite_catwalk_railing', name: 'Sturdy Stone Catwalk Railing' },
      { id: 'createdeco:andesite_support_wedge', name: 'Sturdy Stone Wedge' },
      { id: 'createdeco:red_andesite_lamp', name: 'Red Sturdy Stone Lamp' },
      { id: 'createdeco:yellow_andesite_lamp', name: 'Yellow Sturdy Stone Lamp' },
      { id: 'createdeco:blue_andesite_lamp', name: 'Blue Sturdy Stone Lamp' },
      { id: 'createdeco:green_andesite_lamp', name: 'Green Sturdy Stone Lamp' },

  

      /*
      // Stonectuter
      { id: 'minecraft:stonecutter', name: 'Blockcutter' },

      // CavernsandChamsBlocks
      { id: 'caverns_and_chasms:cobblestone_bricks', name: 'Small Cobblestone Bricks' },
      { id: 'caverns_and_chasms:cobblestone_brick_stairs', name: 'Small Cobblestone Brick Stairs' },
      { id: 'caverns_and_chasms:cobblestone_brick_slab', name: 'Small Cobblestone Brick Slab' },
      { id: 'caverns_and_chasms:cobblestone_brick_wall', name: 'Small Cobblestone Brick Wall' },

      { id: 'caverns_and_chasms:polished_calcite', name: 'Smooth Calcite' },
      { id: 'caverns_and_chasms:polished_calcite_stairs', name: 'Smooth Calcite Stairs' },
      { id: 'caverns_and_chasms:polished_calcite_slab', name: 'Smooth Calcite Slab' },

      { id: 'caverns_and_chasms:mossy_cobblestone_bricks', name: 'Mossy Small Cobblestone Bricks' },
      { id: 'caverns_and_chasms:mossy_cobblestone_brick_stairs', name: 'Mossy Small Cobblestone Brick Stairs' },
      { id: 'caverns_and_chasms:mossy_cobblestone_brick_slab', name: 'Mossy Small Cobblestone Brick Slab' },
      { id: 'caverns_and_chasms:mossy_cobblestone_brick_wall', name: 'Mossy Small Cobblestone Brick Wall' },

      // Shulkerbox
      { id: 'minecraft:shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:lime_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:white_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:black_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:gray_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:light_gray_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:red_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:blue_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:green_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:yellow_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:purple_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:orange_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:brown_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:magenta_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:cyan_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:pink_shulker_box', name: 'Dimensionally Infused Cardbox Box' },
      { id: 'minecraft:light_blue_shulker_box', name: 'Dimensionally Infused Cardbox Box' },

      // Bars
      { id: 'create:copper_bars', name: 'Detailed Copper Bars' },
      { id: 'caverns_and_chasms:golden_bars', name: 'Detailed Gold Bars' },

        // Brass To Electurm
        { id: 'create:brass_table_cloth', name: 'Electrum Table Cloth' },
        { id: 'create:brass_ladder', name: 'Electrum Ladder' },
        { id: 'create:brass_bars', name: 'Electrum Bars' },
        { id: 'create:brass_scaffolding', name: 'Electrum Scaffolding' },
        { id: 'create:brass_hand', name: 'Electrum Hand' },
        { id: 'create:brass_casing', name: 'Electrum Casing' },
        { id: 'create:brass_tunnel', name: 'Electrum Tunnel' },
        { id: 'create:brass_funnel', name: 'Electrum Funnel' },
        { id: 'create:brass_door', name: 'Electrum Door' },

        // Sturdy Stone
        { id: 'create:andesite_alloy_block', name: 'Sturdy Stone Alloy Block' },
        { id: 'create:andesite_alloy', name: 'Sturdy Stone Alloy' },
        { id: 'create:andesite_casing', name: 'Sturdy Stone Casing' },
        { id: 'create:andesite_funnel', name: 'Sturdy Stone Funnel' },
        { id: 'create:andesite_tunnel', name: 'Sturdy Stone Tunnel' },
        { id: 'create:andesite_table_cloth', name: 'Sturdy Stone Table Cloth' },
        { id: 'create:andesite_ladder', name: 'Sturdy Stone Ladder' },
        { id: 'create:andesite_bars', name: 'Sturdy Stone Bars' },
        { id: 'create:andesite_scaffolding', name: 'Sturdy Stone Scaffolding' },
        { id: 'create:andesite_door', name: 'Sturdy Stone Door' },*/

      ]
      
      renameItems.forEach(item => {
        event.renameItem(item.id, item.name)
      })

      
    //Sturdt Stone

    //event.renameItem('createdeco:andesite_sheet', 'Sturdy Stone Sheet')

    /*
    event.renameItem('bellsandwhistles:brass_bogie_steps', 'Electrum Steps')
    event.renameItem('bellsandwhistles:brass_grab_rails', 'Electrum Grab Bars')
    event.renameItem('bellsandwhistles:brass_door_step', 'Electrum Door Step')
    event.renameItem('bellsandwhistles:brass_pilot', 'Electrum Pilot')
    event.renameItem('create:brass_casing', 'Electrum Casing')
    event.renameItem('create:brass_tunnel', 'Electrum Tunnel')
    event.renameItem('create:brass_funnel', 'Electrum Funnel')
    event.renameItem('create:brass_table_cloth', 'Electrum Table Cloth')
    event.renameItem('create:brass_hand', 'Electrum Hand')
    event.renameItem('create:brass_ladder', 'Electrum Ladder')
    event.renameItem('create:brass_bars', 'Electrum Bars')
    event.renameItem('create:brass_scaffolding', 'Electrum Scaffolding')
    event.renameItem('create:brass_door', 'Electrum Door')
    event.renameItem('create:brass_door', 'Electrum Coin')
    event.renameItem('createdeco:brass_coinstack', 'Electrum Coin Stack')
    event.renameItem('createdeco:brass_window', 'Electrum Window')
    event.renameItem('createdeco:brass_window_pane', 'Electrum Window Pane')
    event.renameItem('createdeco:brass_bars_overlay', 'Electrum Bars Overlay')
    
    event.renameItem('createdeco:brass_bars', 'Electrum Bars')
    event.renameItem('createdeco:brass_mesh_fence', 'Electrum Mesh Fence')
    event.renameItem('createdeco:brass_catwalk', 'Electrum Catwalk')
    event.renameItem('createdeco:brass_catwalk_stairs', 'Electrum Catwalk Stairs')
    event.renameItem('createdeco:brass_catwalk_railing', 'Electrum Catwalk Railing')
    event.renameItem('createdeco:brass_support_wedge', 'Electrum Support Wedge')
    event.renameItem('createdeco:brass_facade', 'Electrum Facade')
    event.renameItem('createdeco:brass_hull', 'Electrum Train Hull')
    event.renameItem('createdeco:brass_support', 'Electrum Support')
    event.renameItem('createdeco:yellow_brass_lamp', 'Yellow Electrum Cage Lamp')
    event.renameItem('createdeco:red_brass_lamp', 'Red Electrum Cage Lamp')
    event.renameItem('createdeco:blue_brass_lamp', 'Blue Electrum Cage Lamp')
    event.renameItem('createdeco:green_brass_lamp', 'Green Electrum Cage Lamp')
    event.renameItem('createdeco:brass_sheet_metal', 'Electrum Sheet Metal')
    event.renameItem('createdeco:brass_door', 'Electrum Door')
    event.renameItem('createdeco:locked_brass_door', 'Locked Electrum Door')
    event.renameItem('createdeco:brass_trapdoor', 'Electrum Trapdoor')
    */
    
})

