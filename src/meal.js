function nameMenuItem(food) {
  var foodName = `Delicious ${food}`
  return foodName
}

function createMenuItem(food, priceInput, typeInput) {
  var menuItem = {
      name: food,
      price: priceInput,
      type: typeInput
  }
  // console.log(menuItem.name)
  return menuItem
}

// console.log(createMenuItem('soup', 10.99, 'lunch'))

module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


