'use strict';

const popularProducts = document.querySelector(".popular-products");

const getProductsInfo = () => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json()
        })
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const newProduct = document.createElement('div');
            newProduct.classList.add("new-product");
            const newImage = document.createElement('img');
            newImage.src = data[i].image;
            newImage.classList.add("new-image");
            const newTitle = document.createElement('p');
            newTitle.textContent = data[i].title;
            newTitle.classList.add("new-title");
            const newPrice = document.createElement('p');
            newPrice.textContent = data[i].price + "€";
            newPrice.classList.add("new-price");
            const buttonBuy = document.createElement('button');
            buttonBuy.textContent = "Comprar";
            buttonBuy.classList.add("button-buy");
            newProduct.appendChild(newImage);
            newProduct.appendChild(newTitle);
            newProduct.appendChild(newPrice);
            newProduct.appendChild(buttonBuy);
            popularProducts.appendChild(newProduct);
        };
    });
};

getProductsInfo();



