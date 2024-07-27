// function fetchData1() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('Data 1 Fetch')
//         }, 2000);
//     });
// }

// function fetchData2 () {
//     return new Promise(()=>{
//         setTimeout(() => {
//             resolve('data 2 fetched')
//         }, 1000);
//     });
// }

// async function getAllData() {
//     const [data1, data2]; await Promises.all()

let disp = document.getElementById('disp');
let electronics = document.getElementById("electronics");
let jewelry = document.getElementById("jewelry");
let menC = document.getElementById("menC");
let womenC = document.getElementById("womenC");
let productContainer = document.getElementById('disp_div')
let jewel = [];
elec = [];
let menc = [];
let womenc = [];

let onS 
let onn
// Define the async function
async function fetchJewelry() {
   
    
    try {
      
      const response = await fetch(`https://fakestoreapi.com/products/category/${onS}`);
      
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
     
      const data = await response.json();
      
      onn.length = 0
      data.forEach(product => {
        onn.push(product);
      });
      
      
      console.log(jewel);

      
      onn.forEach(product => {
        let id = document.createAttribute('id')
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        let addToCartButton = document.createElement('button')
        addToCartButton.style.display = "inline"
        addToCartButton.className = "carts"
        addToCartButton.innerHTML = `Add to Cart <i class="fa-solid fa-cart-shopping"></i>`

        let productTitle = document.createElement('h2');
        productTitle.textContent = product.title;

        let productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.title;

        let productPrice = document.createElement('div');
        productPrice.className = 'price';
        productPrice.textContent = `Price: ${product.price}`
        productPrice.style.display = "inline"


        productDiv.appendChild(productTitle);
        productDiv.appendChild(productImg);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(addToCartButton);
        productDiv.style.textAlign= "center"

        productContainer.appendChild(productDiv);
      });
      
    } catch(error) {
      console.error(`Error fetching ${onS} products:`, error);
    }
  }

  // Call the function to fetch jewelry products

  
jewelry.addEventListener('click', (ev)=>{
    productContainer.innerHTML = ""
    onS = "jewelery"
    onn = jewel
    jewelry.className = "on"
    disp.innerText = "Jewelry"
    electronics.className = "btns"
    menC.className = "btns"
    womenC.className = "btns"
    fetchJewelry()
ev.preventDefault});

electronics.addEventListener('click', (ev)=>{
    productContainer.innerHTML = ""
    onS = "electronics"
    onn = elec
    electronics.className = "on"
    disp.innerText = "Electronics"
    jewelry.className = "btns"
    menC.className = "btns"
    womenC.className = "btns"
    fetchJewelry()
ev.preventDefault
});
menC.addEventListener('click', (ev)=>{
    productContainer.innerHTML = ""
    onS = "men's clothing"
    onn = menc
    menC.className = "on"
    disp.innerText = "Men's Clothing"
    jewelry.className = "btns"
    electronics.className = "btns"
    womenC.className = "btns"
    fetchJewelry()
ev.preventDefault
});
womenC.addEventListener('click', (ev)=>{
    productContainer.innerHTML =""
    onS = "women's clothing"
    onn = menc
    menC.className = "btns"
    disp.innerText = "Women's Clothing"
    jewelry.className = "btns"
    electronics.className = "btns"
    womenC.className = "on"
    fetchJewelry()
ev.preventDefault
})