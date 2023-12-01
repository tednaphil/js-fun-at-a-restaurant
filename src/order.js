function takeOrder(order, orderTypeList) {
  if (orderTypeList.length < 3) {
  orderTypeList = orderTypeList.push(order);
}}


function refundOrder(orderNumber, orderArray) {
//if orderNumber is strictly equal to orderArray[i].orderNumber, delete the object
//from the array orderArray.
  for (var i = 0; i < orderArray.length; i++) {
    console.log(orderArray[i].orderNumber);
    if (orderArray[i].orderNumber === orderNumber) {
      console.log(`Remove order number ${orderNumber}`);
      orderArray.splice(i, 1);
      console.log('New Array: ', orderArray);
    }
  }
  // if (orderNumber === orderArray[i].orderNumber) {
  //     orderArray.splice(i, i)
  //     console.log(orderArray)
  //   } else {
  //     return orderArray
  //   }
  };



function listItems() {

}


function searchOrder() {

}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}