//alert("Welcome to Mellow Café!");
console.log("Mellow Café is ready!");
let cart = [];
let cartItems = document.querySelector("#cart-items");
let totalPrice = document.querySelector("#total-price");
console.log(cart);
let buttons = document.querySelectorAll("button[data-name]");

console.log(buttons);
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let name = button.getAttribute("data-name");

let price = button.getAttribute("data-price");
let existingItem = cart.find(function(item) {
    return item.name === name;
});

if (existingItem) {
    existingItem.quantity++;
} else {
    cart.push({
        name: name,
        price: Number(price),
        quantity: 1
    });
}
cartItems.innerHTML = "";

cart.forEach(function(item) {
    let p = document.createElement("p");

   
    let details = document.createElement("span");

    details.style.display = "inline-flex";
    details.style.alignItems = "center";
    details.style.gap = "15px";

let productName = document.createElement("strong");
productName.textContent = item.name;
productName.style.fontSize = "19px";
productName.style.fontWeight = "bold";
productName.style.fontFamily = "inherit";

let quantity = document.createElement("span");
quantity.textContent = "تعداد: " + item.quantity;
quantity.style.fontSize = "14px";
quantity.style.marginLeft = "12px";
quantity.style.marginRight = "12px";

let priceGroup = document.createElement("span");
priceGroup.dir = "ltr";
priceGroup.style.display = "inline-flex";
priceGroup.style.alignItems = "baseline";
priceGroup.style.gap = "4px";

let price = document.createElement("strong");
price.textContent = item.price * item.quantity;
price.style.fontSize = "22px";

let currency = document.createElement("span");
currency.textContent = "AFG";
currency.style.fontSize = "12px";

priceGroup.appendChild(price);
priceGroup.appendChild(currency);


details.appendChild(productName);
details.appendChild(quantity);
details.appendChild(priceGroup);


p.appendChild(details);

    let deleteButton = document.createElement("button");
   deleteButton.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5M14 11v5"/></svg> حذف';

    deleteButton.addEventListener("click", function() {
        cart = cart.filter(function(cartItem) {
            return cartItem !== item;
        });

        p.remove();

        let total = 0;
        cart.forEach(function(item) {
            total += item.price * item.quantity;
        });

        totalPrice.textContent = total;
    });

    p.appendChild(deleteButton);
    cartItems.appendChild(p);
});
let total = 0;

cart.forEach(function(item) {
    total = total + (item.price * item.quantity);
});

totalPrice.textContent = total;

console.log(cart);
console.log("تعداد محصولات:", cart.length);
    });
});
let orderButton = document.querySelector("#order-button");

orderButton.addEventListener("click", function() {

    if (cart.length === 0) {
        alert("سبد خرید شما خالی است!");
    } else {
        alert("سفارش شما با موفقیت ثبت شد!");
    }

});
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
});
