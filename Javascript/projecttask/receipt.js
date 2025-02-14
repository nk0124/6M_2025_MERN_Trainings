

let items=[];
function addProduct() {
//   console.log("add product")
let userInput = document.getElementById("userInput").value.trim();
if (userInput=="") {
alert("Please enter a product name")
} else{
items.push(userInput);
document.getElementById("userInput").value = "";
document.getElementById(
"output"
).innerHTML = `Product-${userInput} Added in List`;
}

let dropdown=document.getElementById("productList");
for(let i=1;i<=1;i++){
let optionItem=document.createElement("option");
optionItem.textContent=userInput;
optionItem.value=userInput;
dropdown.appendChild(optionItem);
}
}

function addPrice() {
  let product = document.getElementById("productList").value;
  let price = document.getElementById("price").value.trim();
  
  if (!product || !price) {
    alert("Select a product and enter a price");
    return;
  }
  
  items[product] = parseFloat(price);
  document.getElementById("price").value = "";
  document.getElementById("output").innerHTML = `Price of "${product}" set to $${price}`;
} 

function newTransaction() {
  let productList = document.getElementById("productList");
  let selectedProduct = productList.value;
  let price = items[selectedProduct];

  if (!selectedProduct || price === null) {
    alert("Please select a valid product with a price.");
    return;
  }

  let dropdown = document.getElementById("productDropDown");
  let formattedText = `${selectedProduct}, $${price}/unit`;

  let exists = Array.from(dropdown.options).some(option => option.value === formattedText);
  if (!exists) {
    let optionItem = document.createElement("option");
    optionItem.textContent = formattedText;
    optionItem.value = formattedText;
    dropdown.appendChild(optionItem);
  }
}

let buttons = document.querySelectorAll(".btn");
let inputField = document.getElementById("unit");
// console.log();
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    inputField.value = this.innerText; // Show button text in input field
  });
});

function addToCart() {
  // console.log("add to cart")
  alert("Added to Cart");
}

function showReceipt() {
let date = new Date();
const formattedDate = date.toLocaleDateString("en-GB");
document.getElementById("date").innerHTML = `Date: ${formattedDate}`;

let hours = date.getHours();
const minutes = String(date.getMinutes()).padStart(2, "0");
const amPm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
const formattedTime = `${hours}:${minutes} ${amPm}`;
document.getElementById("time").innerHTML = `Time: ${formattedTime}`;

let productSelect = document.getElementById("productDropDown");
let selectedOption = productSelect.options[productSelect.selectedIndex].text;

if (!selectedOption) {
  alert("Please select a product.");
  return;
}

let selectedProduct = selectedOption.split(",")[0]; 
let pricePerUnit = parseFloat(selectedOption.split("$")[1]);

let units = parseInt(document.getElementById("unit").value) || 0;

if (units <= 0) {
  alert("Please enter a valid unit count.");
  return;
}

let totalPrice = pricePerUnit * units;
let tax = totalPrice * 0.10;
let amountDue = totalPrice + tax;

// **Accumulate previous values instead of resetting**
let prevTotal = parseFloat(document.getElementById("totalPrice").textContent) || 0;
let prevTax = parseFloat(document.getElementById("taxes").textContent) || 0;
let prevAmountDue = parseFloat(document.getElementById("amountDue").textContent) || 0;

let newTotal = prevTotal + totalPrice;
let newTax = prevTax + tax;
let newAmountDue = prevAmountDue + amountDue;

// Insert row into the receipt table
let tableBody = document.getElementById("tableBody");
tableBody.innerHTML = ""; // Clear previous entries

let row = document.createElement("tr");
row.innerHTML = `<td>${selectedProduct}</td><td>$${pricePerUnit.toFixed(2)}</td><td>${units}</td><td>$${totalPrice.toFixed(2)}</td>`;
tableBody.appendChild(row);


// **Update totals in the receipt**
document.getElementById("totalPrice").textContent = newTotal.toFixed(2);
document.getElementById("taxes").textContent = newTax.toFixed(2);
document.getElementById("amountDue").textContent = newAmountDue.toFixed(2);
document.querySelector(".receipt").style.display = "block"; // Show receipt

}


