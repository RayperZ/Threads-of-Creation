JEIEvents.hideItems((event) => {
  event.hide('kinetic_pixel:magicpoweredfirearmblueprint');
  event.hide('kinetic_pixel:enderalloyingot');
  event.hide('kinetic_pixel:enderalloycompressionsheet');
  event.hide('kinetic_pixel:bambooshell');
});

ItemEvents.tooltip((event) => {
  event.add('kinetic_pixel:graycottonseed', 'Must be planted on Coarse Dirt');
  event.add('kinetic_pixel:wildgraycotton', 'Can be found in Savanna');
});
