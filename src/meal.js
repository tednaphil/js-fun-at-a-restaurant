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

// var ingredients = [];
function addIngredients(ingredientInput, array) {
  console.log(ingredientInput, array)
  array = array.push(ingredientInput);
  console.log(array)
  return array
}




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


