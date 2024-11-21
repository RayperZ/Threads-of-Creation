ServerEvents.recipes((event) => {
  function blueprintShapedRecipe(outputId, sheetId) {
    event.shaped(
      Item.of(outputId, 1),
      [
        ' A ',
        ' B ',
        ' C '
      ],
      {
        A: 'kinetic_pixel:nitropropellant',
        B: 'minecraft:paper',
        C: sheetId,
      }
    );
  }

  blueprintShapedRecipe('kinetic_pixel:heatpoweredfirearmblueprint', 'kinetic_pixel:brasscompressionsheet');
  blueprintShapedRecipe('kinetic_pixel:pressurepoweredfirearmblueprint', 'kinetic_pixel:andesitealloycompressionsheet');
  blueprintShapedRecipe('kinetic_pixel:laboratorialfirearmblueprint', 'kinetic_pixel:specialsteelcompressionsheet');
  blueprintShapedRecipe('kinetic_pixel:magicpoweredfirearmblueprint', 'kinetic_pixel:enderalloycompressionsheet');

  let incompleteComponentTemplate = 'kubejs:incomplete_component_template'
  event.recipes.create
    .sequenced_assembly(
      ['kinetic_pixel:componenttemplate'],
      'minecraft:iron_ingot',
      [
        event.recipes.createFilling(incompleteComponentTemplate, [incompleteComponentTemplate, Fluid.lava(250)]),
        event.recipes.createPressing(incompleteComponentTemplate, incompleteComponentTemplate),
        event.recipes.createCutting(incompleteComponentTemplate, incompleteComponentTemplate)
      ])
    .transitionalItem(incompleteComponentTemplate)
    .loops(1);
});

ServerEvents.tags('block', (event) => {
  event.add('forge:relocation_not_supported', 'kinetic_pixel:firearmworktable');
});

MoreJSEvents.wandererTrades((event) => {
  event.removeTrades({
    firstItem: 'minecraft:emerald',
    secondItem: 'minecraft:amethyst_shard',
    outputItem: 'kinetic_pixel:componenttemplate'
  });
});
