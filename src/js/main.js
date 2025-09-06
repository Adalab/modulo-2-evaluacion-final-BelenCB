'use strict';

const popularProducts = document.querySelector(".popular-products");

let allProducts = [];

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

        newProduct.appendChild(newImage);
        newProduct.appendChild(newTitle);
        newProduct.appendChild(newPrice);
        newProduct.appendChild(buttonBuy);

        popularProducts.appendChild(newProduct);
    });
};

getProductsInfo();

// buscador para filtar productos por su nombre

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


