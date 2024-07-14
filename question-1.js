// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

inventory.apple.quantity = 200;
inventory.orange = {price: 20, quantity:300 };

let total = 0
for(let key in inventory){
  total = total + inventory[key].price* inventory[key].quantity
}

console.log(`Total inventory value: ${total} baht`)