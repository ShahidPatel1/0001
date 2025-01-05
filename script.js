/*const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = productName.includes(searchQuery) ? '' : 'none';
    });
});

const products = [
    { id: 1, name: "Product 1", price: 20, image: "your-image-url", link: "your-product-page-link" },
    { id: 2, name: "Product 2", price: 30, image: "your-image-url", link: "your-product-page-link" },
    { id: 3, name: "Product 2", price: 30, image: "your-image-url", link: "your-product-page-link" },
    { id: 4, name: "Product 2", price: 30, image: "your-image-url", link: "your-product-page-link" },
    { id: 5, name: "Product 2", price: 30, image: "your-image-url", link: "your-product-page-link" },
    { id: 6, name: "Product 2", price: 30, image: "your-image-url", link: "your-product-page-link" },
    { id: 7, name: "Product 2", price: 30, image: "your-image-url", link: "your-product-page-link" },
    { id: 8, name: "Product 2", price: 30, image: "your-image-url", link: "your-product-page-link" },
    { id: 9, name: "Product 2", price: 30, image: "your-image-url", link: "your-product-page-link" },
    // Apne saare products ko isi tarah add karo
];


const productList = document.getElementById("product-list");
products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3 class="product-name">${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button class="buy-btn" data-link="${product.link}">Buy Now</button>
    `;
    
    // Add click event to redirect to affiliate link when the button is clicked
    const buyBtn = productDiv.querySelector('.buy-btn');
buyBtn.addEventListener('click', () => {
    window.open(buyBtn.getAttribute('data-link'), '_blank');
});

    // Add click event to image and title to redirect to affiliate link
    const productImage = productDiv.querySelector('.product-image');
    const productName = productDiv.querySelector('.product-name');
    
    productImage.addEventListener('click', () => {
        window.open(buyBtn.getAttribute('data-link'), '_blank');
    });

    productName.addEventListener('click', () => {
        window.open(buyBtn.getAttribute('data-link'), '_blank');
    });

    productList.appendChild(productDiv);
});*/
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = productName.includes(searchQuery) ? '' : 'none';
    });
});

const products = [
    { id: 1, name: "Product 1", price: 20, image: "https://via.placeholder.com/150", link: "https://www.amazon.com/example-affiliate-link" },
    { id: 2, name: "Product 2", price: 30, image: "https://via.placeholder.com/150", link: "https://www.flipkart.com/example-affiliate-link" },
    { id: 2, name: "Product 3", price: 30, image: "https://via.placeholder.com/150", link: "https://www.flipkart.com/example-affiliate-link" },
    { id: 2, name: "Product 4", price: 30, image: "https://via.placeholder.com/150", link: "https://www.flipkart.com/example-affiliate-link" },
    { id: 2, name: "Product 5", price: 30, image: "https://via.placeholder.com/150", link: "https://www.flipkart.com/example-affiliate-link" },
    { id: 2, name: "Product 6", price: 30, image: "https://via.placeholder.com/150", link: "https://www.flipkart.com/example-affiliate-link" },
    { id: 2, name: "Product 7", price: 30, image: "https://via.placeholder.com/150", link: "https://www.flipkart.com/example-affiliate-link" },
    { id: 2, name: "Product 8", price: 30, image: "https://via.placeholder.com/150", link: "https://www.flipkart.com/example-affiliate-link" },

    // Add more products here
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3 class="product-name">${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button class="buy-btn" data-link="${product.link}">Buy Now</button>
    `;

    // Append to DOM first
    productList.appendChild(productDiv);

    // Add event listeners after appending
    const buyBtn = productDiv.querySelector('.buy-btn');
    const productImage = productDiv.querySelector('.product-image');
    const productName = productDiv.querySelector('.product-name');

    buyBtn.addEventListener('click', () => {
        window.open(buyBtn.getAttribute('data-link'), '_blank');
    });

    productImage.addEventListener('click', () => {
        window.open(buyBtn.getAttribute('data-link'), '_blank');
    });

    productName.addEventListener('click', () => {
        window.open(buyBtn.getAttribute('data-link'), '_blank');
    });
});
