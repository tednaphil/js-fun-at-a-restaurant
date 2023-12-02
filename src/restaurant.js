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
  // console.log(restaurant.menus);
  // console.log(menuItem.type);
  // console.log(restaurant.menus.lunch);
  // console.log(restaurant.menus.lunch.includes(menuItem));

  if (menuItem.type === 'lunch' && restaurant.menus.lunch.includes(menuItem) === false) { //is not present in the menus.lunch array// 
    restaurant.menus.lunch.push(menuItem);
  }
  if (menuItem.type === 'breakfast' && restaurant.menus.breakfast.includes(menuItem) === false) {
    restaurant.menus.breakfast.push(menuItem)
  }
  if (menuItem.type === 'dinner' && restaurant.menus.dinner.includes(menuItem) === false) {
    restaurant.menus.dinner.push(menuItem)
  };
};

function removeMenuItem() {

};

function checkForFood() {

};



module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}