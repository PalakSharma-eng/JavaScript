const products = [
{
    id:1,
    name:"iPhone 15",
    price:79999,
    image:"data:image/jpeg;base64,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"
},
{
    id:2,
    name:"Samsung S24",
    price:69999,
    image:"data:image/jpeg;base64,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"
},
{
    id:3,
    name:"Laptop",
    price:55999,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYz7cGgWedHHcuJ4IAWkgOzkwm_uKbHKHp5OBqx4J56Q&s=10"
},
{
    id:4,
    name:"Headphones",
    price:2999,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BEts5j-X3yT0Bqw9zuKS9PtVxJIB2vZEWWj2kdngUQ&s=10"
},
{
    id:5,
    name:"Smart Watch",
    price:4999,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCfXm_QZkcia4gNEfkGnYrSqpvVlcxYpr6dbjzpN3Zw&s=10"
},
{
    id:6,
    name:"washing machine",
    price:15999,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjWRhcCLADBcy0kUt2uqv4GEZcG_NriKJ-AxnRnVOKQ&s=10"
},
{
    id:7,
    name:"grinder",
    price:5999,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbOEYuUF7lw9WzvvG1sGGQRr9mTrQ8XklEMtP_Q0VNg&s=10"
},
{
    id:8,
    name:"fridge",
    price:29999,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZgsyZghmS9haqwQkGpBoIiLdrAJvWut4aquGy4WZTA&s=10"
},
];

let cart = [];

const productContainer = document.getElementById("products");
const cartCount = document.getElementById("cartCount");
const searchInput = document.getElementById("searchInput");

function displayProducts(productList){

    productContainer.innerHTML = "";

    productList.forEach(product => {

        productContainer.innerHTML += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        </div>
        `;
    });
}

function addToCart(id){

    const product = products.find(item => item.id === id);

    cart.push(product);

    cartCount.textContent = cart.length;

    alert(product.name + " added to cart");
}

document.getElementById("cartBtn")
.addEventListener("click", openCart);

function openCart(){

    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        </div>
        `;
    });

    totalPrice.textContent = "Total: ₹" + total;

    document.getElementById("cartModal").style.display = "block";
}

function closeCart(){
    document.getElementById("cartModal").style.display = "none";
}

searchInput.addEventListener("input", function(){

    const value = this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
});

displayProducts(products);