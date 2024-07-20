const inventory = [];

export function addItem(item) {
  inventory.push(item);
  console.log(`${item} added to invetory.`);
}

export function removeItem(item) {
  const index = inventory.indexOf(item);
  if (index > -1) {
    inventory.splice(index, 1);
    console.log(`${item} removed from inventory`);
  }
}
export function listItems() {
  console.log("Inventory:");
  inventory.forEach((item) => console.log(item));
}
