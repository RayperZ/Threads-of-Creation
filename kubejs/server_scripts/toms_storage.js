ServerEvents.recipes((event) => {
  event.remove({ mod: 'toms_storage' });

  event.recipes.create.mechanical_crafting('toms_storage:ts.crafting_terminal', [
    ' P ',
    'SSS',
    'SSS',
    'SSS',
    'AML'
  ], {
    P: {
      item: 'toms_storage:ts.storage_terminal'
    },
    S: {
      item: 'create:mechanical_crafter'
    },
    L: {
      item: 'create:linked_controller'
    },
    M: {
      item: 'create:precision_mechanism'
    },
    A: {
      item: 'create:sturdy_sheet'
    }
  });

  event.shapeless(Item.of('toms_storage:ts.inventory_cable', 8), [
    'create:brass_sheet',
    'minecraft:dried_kelp'
  ]);

  event.shapeless('toms_storage:ts.inventory_cable_connector', [
    'toms_storage:ts.inventory_cable',
    'create:chute'
  ]);

  event.shaped('toms_storage:ts.inventory_cable_connector_filtered', [
    'I',
    'S',
    'P'
  ], {
    I: 'create:electron_tube',
    S: 'toms_storage:ts.inventory_cable_connector',
    P: '#forge:plates/brass'
  });

  event.shaped('toms_storage:ts.inventory_cable_connector_framed', [
    'SSS',
    'SCS',
    'SSS'
  ], {
    S: '#forge:rods/wooden',
    C: 'toms_storage:ts.inventory_cable_connector'
  });

  event.shaped('toms_storage:ts.inventory_cable_framed', [
    'SSS',
    'SCS',
    'SSS'
  ], {
    S: '#forge:rods/wooden',
    C: 'toms_storage:ts.inventory_cable'
  });

  event.shapeless('toms_storage:ts.inventory_connector', [
    'create:brass_casing',
    'create:chute'
  ]);

  event.shapeless('toms_storage:ts.inventory_proxy', [
    'toms_storage:ts.inventory_connector',
    'create:smart_chute'
  ]);

  event.shapeless('toms_storage:ts.level_emitter', [
    'create:content_observer',
    'toms_storage:ts.inventory_cable'
  ]);

  event.shaped('toms_storage:ts.open_crate', [
    'PSP',
    'PCP',
    'PTP'
  ], {
    P: '#minecraft:planks',
    S: '#forge:rods/wooden',
    C: '#forge:chests/wooden',
    T: '#minecraft:trapdoors'
  });

  event.shaped('toms_storage:ts.paint_kit', [
    'RGB',
    'PEN'
  ], {
    R: '#forge:dyes/red',
    G: '#forge:dyes/green',
    B: '#forge:dyes/blue',
    P: 'create:iron_sheet',
    E: 'minecraft:bucket',
    N: 'minecraft:iron_nugget',
  });

  event.shaped('toms_storage:ts.storage_terminal', [
    ' C ',
    'OGD',
    'PPP'
  ], {
    C: 'create:precision_mechanism',
    O: 'create:content_observer',
    G: 'create:display_link',
    D: 'create:display_board',
    P: '#minecraft:buttons',
  });

  event.shaped(Item.of('toms_storage:ts.trim', 2), [
    'RRR',
    'RTR',
    'RRR'
  ], {
    R: '#forge:rods/wooden',
    T: 'create:brass_tunnel'
  });

  event.shapeless('toms_storage:ts.trim', [
    'toms_storage:ts.painted_trim',
    'minecraft:water_bucket',
  ]);

  event.shapeless('toms_storage:ts.trim', [
    'toms_storage:ts.painted_trim',
    'supplementaries:soap',
  ]);

  event.shaped('toms_storage:ts.inventory_hopper_basic', [
    'P',
    'C',
    'H'
  ], {
    P: '#minecraft:planks',
    C: 'toms_storage:ts.inventory_cable',
    H: 'minecraft:hopper'
  });

  event.shaped('toms_storage:ts.wireless_terminal', [
    'A',
    'T',
    'E'
  ], {
    A: 'minecraft:amethyst_shard',
    T: 'toms_storage:ts.storage_terminal',
    E: '#forge:ender_pearls',
  });

  event.smithing('toms_storage:ts.adv_wireless_terminal',
    'minecraft:netherite_upgrade_smithing_template',
    'toms_storage:ts.wireless_terminal',
    'minecraft:netherite_ingot'
  );

  event.shaped('toms_storage:ts.item_filter', [
    'NFN'
  ], {
    F: 'create:filter',
    N: 'minecraft:iron_nugget'
  });

  event.shapeless('toms_storage:ts.polymorphic_item_filter', [
    'toms_storage:ts.item_filter',
    'toms_storage:ts.tag_item_filter'
  ]);

  event.shaped('toms_storage:ts.tag_item_filter', [
    'NFN'
  ], {
    F: 'create:attribute_filter',
    N: 'create:brass_nugget'
  });
});
