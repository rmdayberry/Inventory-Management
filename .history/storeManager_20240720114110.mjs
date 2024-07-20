import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("Ethiopia Coffee");
addItem("Colombia Coffee");
addItem("Kenya Coffee");
addItem("Guatemala Coffee");

listItems();

removeItem("Kenya Coffee");

listItems();
