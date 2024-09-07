// Define the async function
async function fetchJewelry() {


  try {

    const response = await fetch(`https://fakestoreapi.com/products/category/${onS}`);


    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }


    const data = await response.json();

    onn.length = 0;
    data.forEach(product => {
      onn.push(product);
    });


    console.log(jewel);


    onn.forEach(product => {
      let id = document.createAttribute('id');
      let productDiv = document.createElement('div');
      productDiv.className = 'product';
      let addToCartButton = document.createElement('button');
      addToCartButton.style.display = "inline";
      addToCartButton.className = "carts";
      addToCartButton.innerHTML = `Add to Cart <i class="fa-solid fa-cart-shopping"></i>`;

      let productTitle = document.createElement('h2');
      productTitle.textContent = product.title;

      let productImg = document.createElement('img');
      productImg.src = product.image;
      productImg.alt = product.title;

      let productPrice = document.createElement('div');
      productPrice.className = 'price';
      productPrice.textContent = `Price: ${product.price}`;
      productPrice.style.display = "inline";

      productDiv.appendChild(productTitle);
      productDiv.appendChild(productImg);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(addToCartButton);
      productDiv.style.textAlign = "center";

      productContainer.appendChild(productDiv);
      addToCartButton.addEventListener('click', (ev) => {
        localStorage.setItem(`${product.name}`, JSON.stringify(product));
        alert(`${product.name} added to cart successfully`);
        ev.preventDefault;
      });
    });

  } catch (error) {
    console.error(`Error fetching ${onS} products:`, error);
  }
}
