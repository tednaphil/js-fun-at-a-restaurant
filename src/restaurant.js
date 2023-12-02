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

function removeMenuItem(restaurant, menuItem, menuItemType) {
  // console.log('pizzaRestaurant: ', restaurant);
  // console.log('pizzaRestaurant.menus object: ', restaurant.menus);
  // console.log('menuItemType: ', menuItemType);
  // console.log('pizzaRestaurant.menus.breakfast: ', restaurant.menus.breakfast)
  
  // var onBreakfastMenu = restaurant.menus.breakfast.find(function isOnThisMenu(food){
  //   return  food.type === type;
  // })

  // var onMenu = restaurant.find(function isOnMenu(menuItem){
  //   return menuItem.name === menuItem;
  // })

  // if (onBreakfastMenu === true) { //&& onMenu === true) {
  //   console.log('ON BREAKFAST MENU')

};



function checkForFood(restaurant, menuItem) {
  // console.log(restaurant);
// console.log(restaurant.menus);
// console.log(restaurant.menus.breakfast);
// console.log(restaurant.menus.breakfast[0]);
// console.log(restaurant.menus.breakfast[0].name);
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