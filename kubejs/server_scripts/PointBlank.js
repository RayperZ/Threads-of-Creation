ServerEvents.recipes((event) => {
  event.remove('pointblank:m4sopmodii_bartender');
  event.remove('pointblank:m4a1_asiimov');
  event.remove('pointblank:l96a1_hyperbeast');
  event.remove('pointblank:ammocreative');
  event.remove('pointblank:processor');
  event.remove('pointblank:guninternals');
  event.remove('pointblank:motor');
  event.remove('pointblank:gunmetal_mesh');
  event.remove('pointblank:gunmetal_ingot');
  event.remove('pointblank:gunmetal_nugget');
  event.remove('pointblank:workstation');
  event.remove('pointblank:printer');

  global.pointBlankGuns.forEach((itemId) => {
    event.remove('pointblank:' + itemId);
  });

  global.pointBlankAmmo.forEach((itemId) => {
    event.remove('pointblank:' + itemId);
  });

  global.pointBlankAttachments.forEach((itemId) => {
    event.remove('pointblank:' + itemId);
  });
});

MoreJSEvents.villagerTrades((event) => {
  event.removeModdedTrades(['pointblank:arms_dealer'], 1);
  event.removeModdedTrades(['pointblank:arms_dealer'], 2);
  event.removeModdedTrades(['pointblank:arms_dealer'], 3);
  event.removeModdedTrades(['pointblank:arms_dealer'], 4);
  event.removeModdedTrades(['pointblank:arms_dealer'], 5);
});

/*
LootJS.modifiers((event) => {
  event
      .addLootTableModifier(LootType.ENTITY)
      .removeLoot("@pointblank");
});
*/