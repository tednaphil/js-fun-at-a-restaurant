const takeOrder = (order, orderTypeList) => {
  if (orderTypeList.length < 3) {
    orderTypeList = orderTypeList.push(order);
  }
};


function refundOrder(orderNumber, orderArray) {
  orderArray.forEach((object) => {
    if (object.orderNumber === orderNumber) {
      orderArray.splice(orderArray.indexOf(object), 1)
    }
  })
};



function listItems(orderArray) {
  let itemList = []
  orderArray.forEach((object) => {
    itemList.push(object.item)
  })
  itemList = itemList.join(', ')
  return itemList
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