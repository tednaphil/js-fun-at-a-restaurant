function takeOrder(order, orderTypeList) {
  if (orderTypeList.length < 3) {
    orderTypeList = orderTypeList.push(order);
  }
};


function refundOrder(orderNumber, orderArray) {
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].orderNumber === orderNumber) {
      orderArray.splice(i, 1);
    }
  }
};



//NOTE: LINE 21 makes the test pass. How do I create this string
//from the function? */
// var itemList = 'burger, blt sandwich, rueben';


// itemList.push('burger');
// console.log('first add to item list: ', itemList)

// itemList.push('salmon');
// console.log('second add to item list: ', itemList)

// itemList.push()


function listItems(orderArray) {
  var itemList = []
  for (var i = 0; i < orderArray.length; i++) {
    console.log(orderArray[i].item);
    itemList.push(orderArray[i].item);
    //here we need to add the item name from each object to 
    //a string, maybe via concatenation. The array that is being
    //returned does not deeply equal the string in the test file.
    var joinedList = itemList.join(', ')
  } return joinedList
};

// console.log(itemList);

function searchOrder() {

}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}