import {cart,addtocart} from '../data/cart.js';
import { products,loadproducts} from '../data/products.js';
import { formatcurrency } from './utils/money.js';

loadproducts(renderproductsgrid);
function renderproductsgrid(){
let productshtml='';

products.forEach((product)=>{
productshtml=productshtml+`
 <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getstarsurl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           ${product.getprice()}
          </div>

          <div class="product-quantity-container">s
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
                ${product.extrainfohtml()}
          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary jsaddtocart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
`;
});



function updatecartquantity(){
  let cartquantity=0;
cart.forEach((cartitem)=>{
cartquantity+=cartitem.quantity;});
document.querySelector('.jscartquantity').innerHTML=cartquantity;
}

document.querySelector('.jsproductsgrid').innerHTML=productshtml;
document.querySelectorAll('.jsaddtocart').forEach((button)=>{
button.addEventListener('click',()=>{
const productId=button.dataset.productId;
addtocart(productId);
updatecartquantity();
})
});
}