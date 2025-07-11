import{cart,removefromcart,updatedeliveryoption} from '../../data/cart.js';
import{products,getproduct} from '../../data/products.js';
import { formatcurrency } from '../utils/money.js';
import{hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

import{deliveryoptions,getdeliveryoption} from '../../data/deliveryoptions.js';

import { renderpaymentsummary } from './paymentsummary.js';
hello();

const today=dayjs();
const deliverydate=today.add(7,'days');
console.log(deliverydate.format('dddd, MMMM D'));

export function renderordersummary(){
let cartsummaryhtml='';

cart.forEach((cartitem)=>{
const productId=cartitem.productId;

const matchingproduct=getproduct(productId);


const deliveryoptionsid=cartitem.deliveryoptionsid;

 const deliveryOption=getdeliveryoption(deliveryoptionsid);

 const today=dayjs();
  const deliverydate=today.add(deliveryOption.deliverydays,'days');
  const datestring=deliverydate.format('dddd, MMMM D');

cartsummaryhtml +=`<div class="cart-item-container
 jscartitemcontainer
jscartitemcontainer-${matchingproduct.id}">
    <div class="delivery-date">
      Delivery date: ${datestring}
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingproduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
         ${matchingproduct.name}
        </div>
        <div class="product-price">
          $${formatcurrency(matchingproduct.priceCents)}
        </div>
        <div class="product-quantity
        jsproductquantity-${matchingproduct.id}
        ">
          <span>
            Quantity: <span class="quantity-label">${cartitem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary jsdeletebutton
           js-delete-link-${matchingproduct.id}" data-productid="${matchingproduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
      ${deliveryoptionshtml(matchingproduct,cartitem)}
      </div>
    </div>
  </div>`;
});

function deliveryoptionshtml(matchingproduct,cartitem){
  let html=' ';
deliveryoptions.forEach((deliveryoption)=>{
  const today=dayjs();
  const deliverydate=today.add(deliveryoption.deliverydays,'days');
  const datestring=deliverydate.format('dddd, MMMM D');

const pricestring= deliveryoption.priceCents===0
? 'FREE'
:`$${formatcurrency(deliveryoption.priceCents)}-`;
const ischecked=deliveryoption.id===cartitem.deliveryoptionsid;
html+=
` <div class="delivery-option jsdeliveryoption" data-productid="${matchingproduct.id}"
    data-deliveryoptionid="${deliveryoption.id}"   >
          <input type="radio"
          ${ischecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingproduct.id}">
          <div>
            <div class="delivery-option-date">
           ${datestring}
            </div>
            <div class="delivery-option-price">
              ${pricestring}- Shipping
            </div>
          </div>
        </div>`
});
return html;
}
document.querySelector('.order-summary').innerHTML=cartsummaryhtml;
document.querySelectorAll('.jsdeletebutton').forEach((link)=>{
link.addEventListener('click',()=>{
const productId=link.dataset.productid;
removefromcart(productId);

const container=document.querySelector(`.jscartitemcontainer-${productId}`);

  container.remove();
renderpaymentsummary();

});
});

document.querySelectorAll('.jsdeliveryoption').forEach((element)=>{
element.addEventListener('click',()=>{
  const{productid,deliveryoptionid}=element.dataset;
updatedeliveryoption(productid,deliveryoptionid);
renderordersummary();

renderpaymentsummary();
});
});
}
