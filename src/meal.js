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
  // console.log(ingredientInput, array);
  if (array.includes(ingredientInput)) {
    return array
  } else {
  array = array.push(ingredientInput);
  // console.log(array)
  return array
  }}

// if ingredientInput is strictly equal to any element in the array, 
// don't add the item.
//OR if ingredientInput is not strictly equal to any element in the array,
// add the item.

function formatPrice(priceInput) {
  // console.log(priceInput);
  return (`$${priceInput}`);
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}


