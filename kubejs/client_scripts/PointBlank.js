JEIEvents.hideItems((event) => {
  event.hide('pointblank:m4sopmodii_bartender');
  event.hide('pointblank:m4a1_asiimov');
  event.hide('pointblank:l96a1_hyperbeast');
  event.hide('pointblank:ammocreative');
  event.hide('pointblank:processor');
  event.hide('pointblank:guninternals');
  event.hide('pointblank:motor');
  event.hide('pointblank:gunmetal_mesh');
  event.hide('pointblank:gunmetal_ingot');
  event.hide('pointblank:gunmetal_nugget');
  event.hide('pointblank:workstation');
  event.hide('pointblank:printer');
  event.hide('pointblank:hotmagiccore');

  global.pointBlankGuns.forEach((itemId) => {
    event.hide('pointblank:' + itemId);
  });

  global.pointBlankAmmo.forEach((itemId) => {
    event.hide('pointblank:' + itemId);
  });

  global.pointBlankAttachments.forEach((itemId) => {
    event.hide('pointblank:' + itemId);
  });
});
