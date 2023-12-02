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
    itemList.push(orderArray[i].item);
    //here we need to add the item name from each object to 
    //a string, maybe via concatenation. The array that is being
    //returned does not deeply equal the string in the test file.
    var joinedList = itemList.join(', ')
  } return joinedList
};

// console.log(itemList);


function searchOrder(orderArray, item) {
//this function will check the contents of the objects in the orderArray
// and if the argument passed is present as a value in any of the objects
// in the orderArray array,
//return the boolean true
// orderArray.find((orderArray[i].item) === item
  var x = orderArray.find(function isInOrder(order){
    return  order.item === item;
  })
if (x === undefined) {
  return false
} else {
  return true
}
};




// for (var i = 0; i < orderArray.length; i++) {
  //   if (orderArray[i].item === item) {
  //     console.log('In order list: ', orderArray[i].item);
  //     // return true
  //   }
  //   else if (orderArray[i] !== item) {
  //     console.log('Not in order list: ', orderArray[i].item);
  //     // return false
  //   }
//     // console.log('Order Item: ', orderArray[i].item)
//   // }
// };

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}