let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(window.localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0);
}

calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        console.log("basket is not empty");
    } else {
        console.log("basket is empty");
    }
};

generateCartItems();