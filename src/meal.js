const nameMenuItem = (food) => {
  var foodName = `Delicious ${food}`
  return foodName
}

const createMenuItem = (food, price, type) => {
  var menuItem = {
      name: food,
      price,
      type,
  }
  return menuItem
}


const addIngredients = (ingredientInput, array) => {
  if (array.includes(ingredientInput)) {
    return array
  } else {
    array.push(ingredientInput);
    return array
  }
}



const formatPrice = (priceInput) => {
  return (`$${priceInput}`);
}

const decreasePrice = (itemPrice) => {
  var percentageDecrease = itemPrice * .1;
  return itemPrice - percentageDecrease
}

const createRecipe = (title, ingredients, type) => {
  return {
    title,
    ingredients,
    type,
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


