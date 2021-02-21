const user = document.querySelector(".profile img");
const cart = document.querySelector(".cart img")


user.addEventListener("mouseenter", () => {
    user.src = "images/user_hover.svg";
})

user.addEventListener("mouseout", () => {
    user.src = "images/user.svg";
})

cart.onmouseover = () => {
    cart.src = "images/cart_hover.svg";
}

cart.onmouseout = () => {
    cart.src = "images/cart.svg";
}