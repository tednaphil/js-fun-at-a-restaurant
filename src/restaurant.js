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
  // console.log(restaurant.menus[menuItemType][0].name) yayyyyyy! 
  // console.log('Menu array of objects: ', restaurant.menus[menuItemType])
  // console.log('length of menuItemType array: ', restaurant.menus[menuItemType].length)
  if (restaurant.menus[menuItemType].length === 0) {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`  
  }
  
  for (var i = 0; i <= restaurant.menus[menuItemType].length; i ++) {
    console.log('Loop Test', [i])
    if (menuItem === restaurant.menus[menuItemType][i].name) {
      restaurant.menus[menuItemType].splice(i, 1);
      console.log(`This is going to be removed from the menu`)
      return `No one is eating our ${menuItem} - it has been removed from the ${menuItemType} menu!`
    } else {
        return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
    };
    // if (restaurant.menus[menuItemType][i].name === undefined) {
    //   // console.log(restaurant.menus[menuItemType][i].name)
    //   return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
    // }
    // if restaurant.menus[menuItemType].length === 0) {
    //   return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
    // }
  };
  
  // var onBreakfastMenu = restaurant.menus.breakfast.find(function isOnThisMenu(food){
  //   return  food.type === type;
  // })

  // var onMenu = restaurant.find(function isOnMenu(menuItem){
  //   return menuItem.name === menuItem;
  // })

  // if (onBreakfastMenu === true) { //&& onMenu === true) {
  //   console.log('ON BREAKFAST MENU')

  //this function will take in the name of the restaurant variable (an object with the keys
  //name and menus), the name of a menu item
  //(should be able to access at restaurantName.menus.menuItemType[i].name)
  //and the food type (should be able to access and restaurantName.menus.menuItemType[i].type)

  //if the menuItem is present in restaurant.menus.menuItemType, the object
  // in the menuItemType should be removed (.splice)

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