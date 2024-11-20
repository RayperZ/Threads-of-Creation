StartupEvents.registry('item', (event) => {
  event
    .create('incomplete_component_template')
    .displayName("Incomplete Component Template")
    .texture('mobbo:item/lava')
    .unstackable();
});
