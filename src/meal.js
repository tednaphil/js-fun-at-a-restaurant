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
  return menuItem
}


function addIngredients(ingredientInput, array) {
  if (array.includes(ingredientInput)) {
    return array
  } else {
  array = array.push(ingredientInput);
  return array
  }}



function formatPrice(priceInput) {
  return (`$${priceInput}`);
}

function decreasePrice(itemPrice) {
  var percentageDecrease = itemPrice * .1;
  return itemPrice - percentageDecrease
}

function createRecipe(title, ingredients, dishType) {
  return {
    title: title,
    ingredients: ingredients,
    type: dishType
  }
  }

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


