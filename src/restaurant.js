function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }; 
};


function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === 'lunch' && restaurant.menus.lunch.includes(menuItem) === false) {
    restaurant.menus.lunch.push(menuItem);
  }
  if (menuItem.type === 'breakfast' && restaurant.menus.breakfast.includes(menuItem) === false) {
    restaurant.menus.breakfast.push(menuItem)
  }
  if (menuItem.type === 'dinner' && restaurant.menus.dinner.includes(menuItem) === false) {
    restaurant.menus.dinner.push(menuItem)
  };
};

function removeMenuItem(restaurant, menuItem, menuItemType) {
  if (restaurant.menus[menuItemType].length === 0) {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`  
  };
  
  for (var i = 0; i <= restaurant.menus[menuItemType].length; i ++) {
    if (menuItem === restaurant.menus[menuItemType][i].name) {
      restaurant.menus[menuItemType].splice(i, 1);
      return `No one is eating our ${menuItem} - it has been removed from the ${menuItemType} menu!`
    } else {
        return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
    }
  };
};



function checkForFood(restaurant, menuItem) {
  if (restaurant.menus.breakfast.includes(menuItem) ||
      restaurant.menus.lunch.includes(menuItem) ||
      restaurant.menus.dinner.includes(menuItem)) {
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