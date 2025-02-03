const menu = [
  { name: "pizza1", price: 8 },
  { name: "pizza2", price: 10 },
  { name: "pizza3", price: 10 },
  { name: "pizza4", price: 9 },
];

const cashinRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}
function placeorder(name) {
  const selectedpizza = menu.find((pizzaObj) => pizzaObj.name === name);
  cashinRegister = selectedpizza.price;
  const newOrder = {
    id: nextorderId++,
    pizza: selectedpizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}
function completeOrder(orderId) {
  const order = orderQueue.find((order) => order.id == orderId);
  order.status = "completed";
}

addNewPizza({ name: "pizza5", price: 12 });
addNewPizza({ name: "pizza6", price: 12 });
addNewPizza({ name: "pizza7", price: 11 });

placeorder("pizza5");
completeOrder("1");

console.log("Menu", menu);
console.log("Cash in register", cashinRegister);
console.log("Order queue", orderQueue);
