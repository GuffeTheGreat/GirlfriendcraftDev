
let getSlabType = kind => {

    switch (kind) {
            case 'stonezone:q/galosphere/pink_salt_vertical_slab':
            case 'stonezone:q/galosphere/polished_pink_salt_vertical_slab':
                return 'pink_salt';  
            case 'stonezone:q/galosphere/rose_pink_salt_vertical_slab':
            case 'stonezone:q/galosphere/polished_rose_pink_salt_vertical_slab':
                return 'rose_pink_salt';
    case 'stonezone:q/galosphere/pastel_pink_salt_vertical_slab':
    case 'stonezone:q/galosphere/polished_pastel_pink_salt_vertical_slab':
        return 'pastel_pink_salt';
    case 'stonezone:q/atmospheric/dolerite_vertical_slab':
    case 'stonezone:q/atmospheric/polished_dolerite_vertical_slab':
                return 'dolerite';
    case 'stonezone:q/atmospheric/ivory_travertine_vertical_slab':
        return 'ivory_travertine';
    case 'stonezone:q/atmospheric/peach_travertine_vertical_slab':
        return 'peach_travertine';
    case 'stonezone:q/atmospheric/persimmon_travertine_vertical_slab':
        return 'persimmon_travertine';
    case 'stonezone:q/atmospheric/saffron_travertine_vertical_slab':
        return 'saffron_travertine';
    case 'stonezone:q/caverns_and_chasms/sugilite_vertical_slab':
    case 'stonezone:q/caverns_and_chasms/polished_sugilite_vertical_slab':
        return 'sugilite';
    case 'stonezone:q/aether/holystone_vertical_slab':
        return 'nephrite';
    case 'stonezone:q/tconstruct/seared_stone_vertical_slab' :
        return 'seared_stone';
    case 'stonezone:q/regions_unexplored/chalk_vertical_slab' :
    case 'stonezone:q/regions_unexplored/polished_chalk_vertical_slab':
        return 'chalk';
    case 'stonezone:q/botania/livingrock_vertical_slab':
    case 'stonezone:q/botania/polished_livingrock_vertical_slab':
        return 'livingrock';
    case 'stonezone:q/botania/shimmerrock_vertical_slab' :
        return 'shimmerrock';
        }
}

let getRockType = kind => (type) => {

let rocktype = getSlabType(kind);
 
if (type == 'blocktag') {

    return 'minecraft:' + rocktype + '_blocks'

} else {

    return 'minecraft:' + rocktype + '_slabs'

}

}

let stoneSlabs = [
    'stonezone:q/galosphere/pink_salt_vertical_slab',
    'stonezone:q/galosphere/polished_pink_salt_vertical_slab',
    'stonezone:q/galosphere/rose_pink_salt_vertical_slab', 
    'stonezone:q/galosphere/polished_rose_pink_salt_vertical_slab', 
    'stonezone:q/galosphere/pastel_pink_salt_vertical_slab', 
    'stonezone:q/galosphere/polished_pastel_pink_salt_vertical_slab', 
    'stonezone:q/atmospheric/dolerite_vertical_slab', 
    'stonezone:q/atmospheric/polished_dolerite_vertical_slab', 
    'stonezone:q/atmospheric/ivory_travertine_vertical_slab', 
    'stonezone:q/atmospheric/peach_travertine_vertical_slab', 
    'stonezone:q/atmospheric/persimmon_travertine_vertical_slab', 
    'stonezone:q/atmospheric/saffron_travertine_vertical_slab', 
    'stonezone:q/caverns_and_chasms/sugilite_vertical_slab', 
    'stonezone:q/caverns_and_chasms/polished_sugilite_vertical_slab', 
    'stonezone:q/spelunkery/nephrite_vertical_slab', 
    'stonezone:q/spelunkery/polished_nephrite_vertical_slab', 
    'stonezone:q/tconstruct/seared_stone_vertical_slab', 
    'stonezone:q/regions_unexplored/chalk_vertical_slab', 
    'stonezone:q/regions_unexplored/polished_chalk_vertical_slab', 
    'stonezone:q/botania/livingrock_vertical_slab', 
    'stonezone:q/botania/polished_livingrock_vertical_slab', 
    'stonezone:q/botania/shimmerrock_vertical_slab', 

];

ServerEvents.tags('item', event => {

    stoneSlabs.forEach(kind => {

    let slabtag = getRockType(kind)('slabtag');

    // Add Blocks to Tags
    event.add(slabtag, kind);

    })
})

ServerEvents.recipes(event => {
    stoneSlabs.forEach(kind => {

    let slabtag = getRockType(kind)('slabtag');
    let blocktag = getRockType(kind)('blocktag');

    event.stonecutting(Item.of(kind,2), '#' + blocktag)
    event.stonecutting(kind, '#' + slabtag)
        
    })
})