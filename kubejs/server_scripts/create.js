ServerEvents.recipes((event) => {
  event.recipes.create.compacting('minecraft:leather', [
    Fluid.water(250),
    Item.of('minecraft:rotten_flesh', 5)
  ]).heated().id('threads_of_creation:compacting_leather');

  event.remove({ id: 'create_ultimate_factory:f_compacting_crimsite' });
  event.recipes.create.compacting(Item.of('create:crimsite', 2), [
    Fluid.lava(250),
    Item.of('minecraft:gravel', 2),
    Item.of('minecraft:iron_nugget', 3)
  ]).id('create_ultimate_factory:f_compacting_crimsite');

  event.remove({ id: 'create_ultimate_factory:f_compacting_veridium' });
  event.recipes.create.compacting(Item.of('create:veridium', 2), [
    Fluid.lava(250),
    Item.of('minecraft:gravel', 2),
    Item.of('create:copper_nugget', 3)
  ]).id('create_ultimate_factory:f_compacting_veridium');

  event.remove({ id: 'create_ultimate_factory:f_compacting_asurine' });
  event.recipes.create.compacting(Item.of('create:asurine', 2), [
    Fluid.water(250),
    Item.of('minecraft:gravel', 2),
    Item.of('create:zinc_nugget', 3)
  ]).id('create_ultimate_factory:f_compacting_asurine');
});
