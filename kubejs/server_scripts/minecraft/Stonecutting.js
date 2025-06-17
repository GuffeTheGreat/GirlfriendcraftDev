ServerEvents.recipes(event => {

  let stonecutterRecipes = [

    // Metal Block
    {
        input: '#minecraft:palm_blocks', outputs: [
            'beachparty:palm_floorboard',
        ],

        
    },
{
    input: '#minecraft:pine_blocks', outputs: [
            'meadow:pine_barn_door',
            'meadow:pine_barn_trapdoor',
            'meadow:chair',
            'meadow:table',
            'meadow:bench'
        ],
        },
{
        input: '#minecraft:unstripped_pine_logs', outputs: [
            'meadow:pine_beam',
        ]
        },
        {
        input: '#minecraft:stone_blocks', outputs: [
            'minecraft:stone_pressure_plate', 
            'minecraft:stone_button']
        },

  ];

  stonecutterRecipes.forEach(group => {
    group.outputs.forEach(output => {
      event.stonecutting(output, group.input)
    })
  });
});
