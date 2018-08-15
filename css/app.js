let orderCount = 0;
const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  orderCount += 1;
};

const getSubTotal = (itemCount) => {
  return (itemCount * 7.50);
}

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

console.log(getSubTotal(orderCount));