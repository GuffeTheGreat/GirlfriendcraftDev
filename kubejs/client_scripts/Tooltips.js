ItemEvents.tooltip(event => {

	// Disabled
	event.add("#girlfriendcraft:disabled", Text.red('Disabled!'))

  

    const advancedTooltips = [
  {
    item: 'minecraft:chain',
    tooltip: [
      Text.white('Can be used to connect blocks pushed or pulled by Pistons, even if it is pushed directly itself.'),
      Text.white('Chains only connect to Slimeblocks if visually touching.'),
      Text.white('Also used to connect Chain Conveyors from Create allowing them to move Items, RPM, and Players.'),
      Text.gray('More details can be read on the Chain Conveyor page.')
    ]
  },
  {
    item: 'minecraft:dispensor',
    tooltip: [
      Text.white('Uses internally stored items and blocks, when given Redstone Signal.'),
      Text.white('Will Place Blocks, Plants Crops, Shoot Arrows, Place Ignited Tnt and Throw Splash Potions and Fire Charges.'),
      Text.white('Aswell as Much More.'),
    ]
  },
  {
    item: 'quark:ender_watcher',
    tooltip: [
      Text.white('Redstone Input block that emits a Redstone Signal, if the player is looking directly at it.'),
      Text.white('Signal strength is dependent on how close to the middle player is looking.'),
      Text.white('The closer to the center the stronger the signal.'),
    ]
  },
  {
    item: 'quark:feeding_trough',
    tooltip: [
      Text.white('Can be used to Automaticly feed food to Animals.'),
      Text.white('Nearby Animals Flock to the Feeding Trough to eat the wood withing.'),
      Text.white('This works pretty similiar to as if the player fed the animals, with a few differences.'),
      Text.white('There is a chance Animals will need more than one piece of food to enter love mode.'), 
      Text.white('Animals bred via the Feeding Trough will not produce XP.'), 
      Text.white('If there are over 32 Animals in 10 block radius, the animal will reproduce. They will still continue to consume food though.'), 
      
        ]
  },
  {
    item: 'quark:gravisand',
    tooltip: [
      Text.white('Sand variant that wont fall unless given redstone signal.'),
      Text.white('However if given a redstone signal while being unable to fall it will instead float up.'),
      Text.white('Gravisand will also continue its signal to adjacent gravisand blocks causing them to fall or float aswell.'),
      Text.white('Gravisand also always outputs a comparator signal of 15.'),
        ]
  },
  {
    item: 'quark:iron_rod',
    tooltip: [
      Text.white('Iron rods placed on the end of Pistons with work as a drill.'),
      Text.white('Breaking instead of pushing any blocks they are pushed into.'),
      Text.white('They can break anything pushable by a piston.'),
        ]
  },
  {
    item: 'minecraft:beacon',
    tooltip: [
      Text.green('Gives positive effects to players in a range').bold(true),
      Text.red('Requires a base built out of precious metals or gems to function!'),
      [Text.white('Iron, '), Text.aqua('Diamonds, '), Text.gold('Gold '), Text.white('or even '), Text.green('Emeralds '), Text.white('are valid base blocks!')]
    ]
  }
]

advancedTooltips.forEach(entry => {
  event.addAdvanced(entry.item, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of(' to see more info.').gold()
      ])
    } else {
      // Add each tooltip line
      entry.tooltip.forEach((line, i) => {
        text.add(i + 1, line)
      })
    }
  })
})


/*
const advancedTooltips = [
  {
    item: 'minecraft:chain',
    tooltip: 'Can be used to connect blocks pushed or pulled by Pistons, even if it is pushed directly itself. Chains will also only connect to Slimeblocks if they are visually connected. Additionally, chains are used to connect Chain Conveyors from Create in order to move Items, RPM, and Players. More about that can be read on the Chain Conveyor.'
  }
]

advancedTooltips.forEach(entry => {
  event.addAdvanced(entry.item, (item, advanced, text) => {
    if (!advanced.shift) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, Text.white(entry.tooltip))
    }
  })
})
*/
 })


/*
event.addAdvanced('minecraft:chain', (item, advanced, text) => {
    // shift, alt and ctrl are all keys you can check!
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.white('Can be used to connect blocks pushed or pulled by Pistons, even if it pushed directly itself. Chains will also only connect to Slimeblocks if they are visually connected. Additionaly chains are used to connect Chain Conveyers from Create in order to move Items, RPM and Players. More about that can be read about on the Chain Conveyor'))
         }
  })*/

 
