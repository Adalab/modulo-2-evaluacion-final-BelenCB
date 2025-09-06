'use strict';

const popularProducts = document.querySelector(".popular-products");
const cartList = document.querySelector(".cart-list");

let allProducts = [];
let cartItems = [];

const getProductsInfo = () => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json()
        })
    .then((data) => {
        allProducts = data;
        console.log(allProducts);
        renderProducts(allProducts);   
    });
};

const renderProducts = (products) => {
    popularProducts.innerHTML = "";
    products.forEach((product) => {
        const newProduct = document.createElement('div');
        newProduct.classList.add("new-product");

        const newImage = document.createElement('img');
        newImage.src = product.image;
        newImage.classList.add("new-image");

        const newTitle = document.createElement('p');
        newTitle.textContent = product.title;
        newTitle.classList.add("new-title");

        const newPrice = document.createElement('p');
        newPrice.textContent = product.price + "€";
        newPrice.classList.add("new-price");

        const buttonBuy = document.createElement('button');
        buttonBuy.textContent = "Comprar";
        buttonBuy.classList.add("button-buy");

        const handleClickAdd = () => {
            if (buttonBuy.textContent === "Eliminar") {
                buttonBuy.textContent = "Comprar";
                buttonBuy.classList.remove("button-buy-click");
                const filteredCartItem = cartItems.findIndex((cartItem) => {
                    return cartItem.id === product.id
                });
                console.log(filteredCartItem);
                cartItems.splice(filteredCartItem, 1);
            } else {
                buttonBuy.textContent = "Eliminar";
                buttonBuy.classList.add("button-buy-click");
                cartItems.push(product);
            };
            console.log(cartItems);
            renderCartItems(cartItems);
        };

        buttonBuy.addEventListener("click", handleClickAdd);

        newProduct.appendChild(newImage);
        newProduct.appendChild(newTitle);
        newProduct.appendChild(newPrice);
        newProduct.appendChild(buttonBuy);

        popularProducts.appendChild(newProduct);
    });
};

const renderCartItems = (cartItems) => {
    cartList.innerHTML = "";
    cartItems.forEach((cartItem) => {
        const newCartItem = document.createElement('div');
        newCartItem.classList.add("new-cart-item");

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "x";
        deleteButton.classList.add("delete-button");

        const newItemImage = document.createElement('img');
        newItemImage.src = cartItem.image;
        newItemImage.classList.add("new-image");

        const newItemTitle = document.createElement('p');
        newItemTitle.textContent = cartItem.title;
        newItemTitle.classList.add("new-title");

        const newItemPrice = document.createElement('p');
        newItemPrice.textContent = cartItem.price + "€";
        newItemPrice.classList.add("new-price");

        const handleClickDelete = () => {
            buttonBuy.textContent = "Comprar";
            buttonBuy.classList.remove("button-buy-click");
            const filteredCartItem = cartItems.findIndex((cartItem) => {
                return cartItem.id === product.id
            });
            console.log(filteredCartItem);
            cartItems.splice(filteredCartItem, 1);
        };

        deleteButton.addEventListener("click", handleClickDelete);

        newCartItem.appendChild(deleteButton);
        newCartItem.appendChild(newItemImage);
        newCartItem.appendChild(newItemTitle);
        newCartItem.appendChild(newItemPrice);
        
        cartList.appendChild(newCartItem);
    });
};

getProductsInfo();

const searchInput = document.querySelector(".searcher--input");
const searchButton = document.querySelector(".searcher--button");

const handleClickSearch = () => {
    const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    renderProducts(filteredProducts);
    console.log(filteredProducts);
};

searchButton.addEventListener("click", handleClickSearch);





