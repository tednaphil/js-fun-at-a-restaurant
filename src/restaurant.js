function createRestaurant(name) {
  return {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }; 
};


function addMenuItem(restaurant, menuItem) {
  if (!restaurant.menus[menuItem.type].includes(menuItem)) {
    restaurant.menus[menuItem.type].push(menuItem)
  }
};

function removeMenuItem(restaurant, menuItem, menuItemType) {
  let message = ''
  if (!restaurant.menus[menuItemType].length) {
    message = `Sorry, we don't sell ${menuItem}, try adding a new recipe!`  
  };

  restaurant.menus[menuItemType].forEach((object) => {
    if (menuItem === object.name) {
      restaurant.menus[menuItemType].splice(restaurant.menus[menuItemType].indexOf(object), 1);
      message = `No one is eating our ${menuItem} - it has been removed from the ${menuItemType} menu!`
    }else {
      message = `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
    }
  })
  return message
};



function checkForFood(restaurant, menuItem) {
  if (restaurant.menus[menuItem.type].includes(menuItem)) {
        return `Yes, we're serving ${menuItem.name} today!`
      } else {
        return `Sorry, we aren't serving ${menuItem.name} today.`
      }
};




module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}