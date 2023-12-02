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



function listItems(orderArray) {
  var itemList = []
  for (var i = 0; i < orderArray.length; i++) {
    itemList.push(orderArray[i].item);
    var joinedList = itemList.join(', ')
  } return joinedList
};



function searchOrder(orderArray, item) {
  var x = orderArray.find(function isInOrder(order){
    return  order.item === item;
  })
  if (x === undefined) {
    return false
   } else {
    return true
  }
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}