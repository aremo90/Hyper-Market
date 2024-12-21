let Products = [
    [
        {
            name: "Milk",
            price: 35,
            category: "Dairy",
            expireDate: "25/01/2025",
            description: "1 Liter",
            img: "Milk-Bottle"
        },
        {
            name: "cheder-cheese - 250g",
            price: 70,
            category: "Dairy",
            expireDate: "25/01/2025",
            description: "1 Kg",
            img: "cheder-cheese"
        },
        {
            name: "Karish-cheese - 300g",
            price: 100,
            category: "Dairy",
            expireDate: "25/01/2025",
            description: "0.5 Kg",
            img: "Karish-cheese"
        },
        {
            name: "Juhayna Natural - 1K",
            price: 70,
            category: "Dairy",
            expireDate: "25/01/2025",
            description: "1 Kg",
            img: "Juhayna Natural Yogurt "
        },
        {
            name: "Almarai Natural - 1K",
            price: 70,
            category: "Dairy",
            expireDate: "25/01/2025",
            description: "1 Kg",
            img: "Almarai-Yogurt"
        },
        {
            name: "Almarai Natural - 2K",
            price: 70,
            category: "Dairy",
            expireDate: "25/01/2025",
            description: "2 Kg",
            img: "Almarai-Yogurt"
        }],
    [{
        name: "cucumber",
        price: 35,
        category: "Dairy",
        expireDate: "25/01/2025",
        description: "1 Liter",
        img: "cucumber"
    },
    {
        name: "green-apple",
        price: 70,
        category: "Dairy",
        expireDate: "25/01/2025",
        description: "1 Kg",
        img: "green-apple"
    },
    {
        name: "Mango",
        price: 100,
        category: "Dairy",
        expireDate: "25/01/2025",
        description: "0.5 Kg",
        img: "Mango"
    },
    {
        name: "red-apple",
        price: 100,
        category: "Dairy",
        expireDate: "25/01/2025",
        description: "0.5 Kg",
        img: "red-apple"
    },
    {
        name: "strawberry",
        price: 100,
        category: "Dairy",
        expireDate: "25/01/2025",
        description: "0.5 Kg",
        img: "strawberry"
    },
    {
        name: "Tomato",
        price: 100,
        category: "Dairy",
        expireDate: "25/01/2025",
        description: "0.5 Kg",
        img: "Tomato"
    }],
    [],
    []];




function viewDairyProducts() {
    //  Reference the container
    var cartona = document.getElementById("categoryProducts");
    //  Clear any existing content
    cartona.innerHTML = "";
    //  Loop through dairy products and append cards
    for (var i = 0; i < Products[0].length; i++) {
        cartona.innerHTML +=
            `<div class="col" >
                    <div class="card">
                        <img src="images/Products/${Products[0][i].img}.jpg" class="card-img-top" alt="${Products[0][i].name}" />
                        <div class="card-body">
                            <h5 class="card-title"><span class="text-danger">Name: </span>${Products[0][i].name}</h5>
                            <h5 class="card-title"><span class="text-danger">Price: </span>${Products[0][i].price}</h5>
                            <h5 class="card-title"><span class="text-danger">Expire Date: </span>${Products[0][i].expireDate}</h5>
                            <button class="btn btn-dark" onclick="addProduct(${0} , ${i})">Add to Cart</button>
                        </div>
                    </div> 
                </div>`;
    }
    viewAll.classList.remove("d-none")
    removeAll.classList.remove("d-none")
}

function viewFruitsAndVegetablesProducts() {
    //  Reference the container
    var cartona = document.getElementById("categoryProducts");

    //  Clear any existing content
    cartona.innerHTML = "";

    //  Loop through dairy products and append cards
    for (var i = 0; i < Products[1].length; i++) {
        cartona.innerHTML +=
            `<div class="col" >
                    <div class="card">
                        <img src="images/Products/${Products[1][i].img}.jpg" class="card-img-top" alt="${Products[0][i].name}" />
                        <div class="card-body">
                            <h5 class="card-title"><span class="text-danger">Name: </span>${Products[1][i].name}</h5>
                            <h5 class="card-title"><span class="text-danger">Price: </span>${Products[1][i].price}</h5>
                            <h5 class="card-title"><span class="text-danger">Expire Date: </span>${Products[1][i].expireDate}</h5>
                            <button class="btn btn-dark" onclick="addProduct(${1} , ${i})">Add to Cart</button>
                        </div>
                    </div> 
                </div>`;
    }
    viewAll.classList.remove("d-none")
    removeAll.classList.remove("d-none")
}


function viewAllProducts() {
    var cartona = document.getElementById("categoryProducts");

    //  Clear any existing content
    cartona.innerHTML = "";
    //  Loop through all products and append cards
    for (var i = 0; i < Products.length; i++) {
        for (var j = 0; j < Products[i].length; j++) {
            cartona.innerHTML +=
                `<div class="col" >
                        <div class="card">
                            <img src="images/Products/${Products[i][j].img}.jpg" class="card-img-top" alt="${Products[i][j].name}" />
                            <div class="card-body">
                                <h5 class="card-title"><span class="text-danger">Name: </span>${Products[i][j].name}</h5>
                                <h5 class="card-title"><span class="text-danger">Price: </span>${Products[i][j].price}</h5>
                                <h5 class="card-title"><span class="text-danger">Expire Date: </span>${Products[i][j].expireDate}</h5>
                                <button class="btn btn-dark" onclick="addProduct(${i} , ${j})">Add to Cart</button>
                            </div>
                        </div> 
                    </div>`
        }
    }
    viewAll.classList.add("d-none")
    removeAll.classList.remove("d-none")
}

function removeProducts() {
    var cartona = document.getElementById("categoryProducts");

    //  Clear any existing content
    cartona.innerHTML = "";

    viewAll.classList.remove("d-none")
    removeAll.classList.add("d-none")
}




let bte5 = [];  //array for cart
let totalPrice = 0; // Initialize total price

function addProduct(index, jIndex) {
    let product = Products[index][jIndex]; // Get the product details

    // Check if the product is already in the cart
    if (!bte5.includes(product.name)) {
        bte5.push(product.name); // Add product name to the cart tracking array

        // Save the updated cart to session storage
        sessionStorage.setItem('bte5', JSON.stringify(bte5));

        // Dynamically add the product card to the cart
        let cart = document.getElementById("viewCart");
        let productHTML = `
        <div class="row" id="product-${index}-${jIndex}">
            <div class="col-md-4">
                <img src="images/Products/${product.img}.jpg" class="img-fluid rounded-start" alt="${product.name}" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-center">${product.name}</h5>
                    <p class="card-text pt-3 d-flex justify-content-evenly">
                        <button onclick="decreaseQuantity(${index}, ${jIndex})"><i class="fa-solid fa-minus"></i></button>
                        <span id="quantity-${index}-${jIndex}">1</span>
                        <button onclick="increaseQuantity(${index}, ${jIndex})"><i class="fa-solid fa-plus"></i></button>
                    </p>
                    <p class="text-center fw-bold" id="price-${index}-${jIndex}">Price: ${product.price.toFixed(2)}</p>
                    <button class="btn btn-danger" onclick="removeProduct(${index}, ${jIndex})">Remove from Cart</button>
                </div>
            </div>
        </div>`;

        cart.innerHTML += productHTML;
    } else {
        window.alert(`${product.name} is already in the cart.`);
    }

    // Update the total price
    totalPrice += product.price;
    updateTotalPrice();

    console.log(bte5); // Debugging
}


function increaseQuantity(index, jIndex) {
    let product = Products[index][jIndex];
    let quantityElem = document.getElementById(`quantity-${index}-${jIndex}`);
    let priceElem = document.getElementById(`price-${index}-${jIndex}`);

    // Increase quantity
    let currentQuantity = parseInt(quantityElem.textContent);
    currentQuantity += 1;
    quantityElem.textContent = currentQuantity;

    // Update product price display
    let totalProductPrice = product.price * currentQuantity;
    priceElem.textContent = `Price: ${totalProductPrice.toFixed(2)}`;


    // Update total price
    updateTotalPrice();
}


function decreaseQuantity(index, jIndex) {
    let product = Products[index][jIndex];
    let quantityElem = document.getElementById(`quantity-${index}-${jIndex}`);
    let priceElem = document.getElementById(`price-${index}-${jIndex}`);

    // Decrease quantity if greater than 1
    let currentQuantity = parseInt(quantityElem.textContent);
    if (currentQuantity > 1) {
        currentQuantity -= 1;
        quantityElem.textContent = currentQuantity;

        // Update product price display
        let totalProductPrice = product.price * currentQuantity;
        priceElem.textContent = `Price: ${totalProductPrice.toFixed(2)}`;
    }


    // Update total price
    updateTotalPrice();
}


function removeProduct(index, jIndex) {
    // Extract product details
    let product = Products[index][jIndex];

    // Remove the product from the tracking array
    bte5 = bte5.filter(name => name !== product.name);

    // Save the updated bte5 to session storage
    sessionStorage.setItem('bte5', JSON.stringify(bte5));

    // Get the current quantity of the product
    let quantityElem = document.getElementById(`quantity-${index}-${jIndex}`);
    let currentQuantity = parseInt(quantityElem.textContent);

    // Subtract the product's total cost (price × quantity) from the total price
    totalPrice -= product.price * currentQuantity;

    // Remove the product card from the cart
    let productCard = document.getElementById(`product-${index}-${jIndex}`);
    if (productCard) {
        productCard.remove();
    }

    // Update the total price display
    updateTotalPrice();

    console.log(`Removed ${product.name} (Quantity: ${currentQuantity}). Updated total price: ${totalPrice.toFixed(2)}`);
    console.log(bte5); // Debugging
}



function updateTotalPrice() {
    totalPrice = 0; // Reset the total price

    // Iterate through the cart items (bte5 tracks the product names)
    bte5.forEach(productName => {
        // Find the product by name in the Products array
        for (let i = 0; i < Products.length; i++) {
            for (let j = 0; j < Products[i].length; j++) {
                let product = Products[i][j];
                if (product.name === productName) {
                    // Get the product's quantity
                    let quantityElem = document.getElementById(`quantity-${i}-${j}`);
                    let currentQuantity = parseInt(quantityElem?.textContent || 1); // Default to 1 if element not found
                    // Add to total price
                    totalPrice += product.price * currentQuantity;
                }
            }
        }
    });

    // Update the total price display
    let totalPriceElem = document.getElementById("totalPrice");
    if (totalPriceElem) {
        totalPriceElem.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
    }
    sessionStorage.setItem('totalPrice', JSON.stringify(totalPrice));
}


function checkout() {
    window.location.href = "HTML/CheckOut.html";
}


// document.getElementById("checkoutBtn").addEventListener("click", function () {
//     window.location.href = "HTML/CheckOut.html";
// });


