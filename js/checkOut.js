// Retrieve bte5 from session storage
let storedBte5 = sessionStorage.getItem('bte5');
let storedTotalPrice = JSON.parse(sessionStorage.getItem('totalPrice'));
let storedCurrentQuantity = JSON.parse(sessionStorage.getItem('currentQuantity'))
// If bte5 exists in session storage, parse it and use it
if (storedBte5) {
  bte5 = JSON.parse(storedBte5);
} else {
  bte5 = []; // If not found, initialize as an empty array
}


window.onload = function () {
  // Retrieve bte5 from session storage
  let storedBte5 = sessionStorage.getItem('bte5');
  if (storedBte5) {
    bte5 = JSON.parse(storedBte5);
  } else {
    bte5 = []; // If session storage is empty, initialize as an empty array
  }

  displayCart();
  // Now, bte5 is ready to be used in the rest of your script
};

function displayCart() {
  let cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = ""; // Clear any previous content

  let totalPrice = 0; // Initialize total price

  // Loop through each item in bte5 and display it
  bte5.forEach((productName) => {
    let product = findProductByName(productName);
    if (product) {
      // Build the HTML structure as per your requirements
      let productHTML = `
          <div class="col col-md-3">
              <div class="card ">
                  <img src="../images/Products/${product.img}.jpg" class="card-img-top" alt="${product.name}" />
                  <div class="card-body">
                      <h5 class="card-title"><span class="text-danger">Name: </span>${product.name}</h5>
                      <h5 class="card-title"><span class="text-danger">Price: </span>${product.price.toFixed(2)}</h5>
                  </div>
              </div>
          </div>`;

      cartContainer.innerHTML += productHTML;

      totalPrice += product.price; // Add product price to total
    }
  });

  // Display the total price
  updateTotalPrice(totalPrice);
}


function findProductByName(name) {
  for (let i = 0; i < Products.length; i++) {
    for (let j = 0; j < Products[i].length; j++) {
      if (Products[i][j].name === name) {
        return Products[i][j]; // Return the product if found
      }
    }
  }
  return null; // Return null if not found
}

function updateTotalPrice(totalPrice) {
  let totalPriceElem = document.getElementById("totalPrice");
  totalPriceElem.textContent = `Total Price: ${storedTotalPrice.toFixed(2)}$`;
}

