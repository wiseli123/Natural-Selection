const user_im = document.querySelector(".profile img");
const cart_im = document.querySelector(".cart img");
const menu_im = document.querySelector(".menu img");
const menu = document.querySelector(".menu");

user_im.onmouseover = () => {
    user_im.src = "images/user_hover.svg";
};

user_im.onmouseout = () => {
    user_im.src = "images/user.svg";
};

cart_im.onmouseover = () => {
    cart_im.src = "images/cart_hover.svg";
};

cart_im.onmouseout = () => {
    cart_im.src = "images/cart.svg";
};

menu_im.onmouseover = () => {
    menu_im.src = "images/menu_hover.svg";
};

menu_im.onmouseout = () => {
    menu_im.src = "images/menu.svg";
};

menu.addEventListener("click", (e) => {
    console.log(e)
})

// function openNav() => {

// }