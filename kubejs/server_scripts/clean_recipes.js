ServerEvents.recipes((event) => {
  [
    'swem:slimeball',
    'swem:blaze_rod',
  ].forEach((recipeId) => {
    event.remove({ id: recipeId })
  });
});