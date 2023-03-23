var cartCount;
  if (!localStorage.getItem("count")) {
    cartCount = 0;
    localStorage.setItem("count", cartCount);
    
  } else {
    cartCount = localStorage.getItem("count");
  }
function productDataFunction(productData) {
  cartCount++;
  localStorage.setItem("count", cartCount);
  var productsArray;
  if (!localStorage.getItem("products")) {
    productsArray = [];
    localStorage.getItem("products", productsArray);
  } else {
    productsArray = JSON.parse(localStorage.getItem("products"));
  }
  productsArray.push(productData);
  localStorage.setItem("products", JSON.stringify(productsArray));
}

function onPlaceOrder() {
  localStorage.clear();
}
function setFilteredProducts(productsAlreadyInCart) {
  localStorage.setItem("productsInCart", productsAlreadyInCart);
}

var cartItemsCount=localStorage.getItem('count');
