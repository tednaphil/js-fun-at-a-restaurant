function createRestaurant(restaurantName) {
//create an object to be stored in the variable defined in the test.
//the object should include the keys name and menus (menus key
//should hold an object with the keys breakfast, lunch, and dinner)
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }; 
};

// console.log('Pizza restaurant name: ', restaurantName.name);
// console.log(createRestaurant('Sexy Pizza'));

function addMenuItem() {

};

function removeMenuItem() {

};

function checkForFood() {

};



module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem,
  // checkForFood
}