import { renderordersummary } from '../../scripts/checkout/ordersummary.js';
import {loadfromstorage,cart} from '../../data/cart.js';
describe('test suite:renderordersummary',()=>{
  const productId1='e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
const productId2='15b6fc6f-327a-4ec4-896f-486349e85a3d';
  beforeEach(()=>{
spyOn(localStorage,'setitem');

document.querySelector('.jstestcontainer').innerHTML=`
<div class="jsordersummary"></div>
<div class="jspaymentsummary"></div>
`;
 spyOn(localStorage,'getItem').and.callFake(()=>{
    return JSON.stringify([{
  productId:productId1,
  quantity:2,
  deliveryoptionsid:'1'

},{
  productId:productId2,
  quantity:1,
  deliveryoptionsid:'2'
}]);
  });
  
  loadfromstorage();

  renderordersummary();
  });
it('displays the cart',()=>{
  expect(
document.querySelectorAll('.jscartitemcontainer').length
  ).toEqual(2);
  expect(
  document.querySelector(`.jsproductquantity-${productId1}`).innerText
  ).toContain('Quantity: 2');
   expect(
  document.querySelector(`.jsproductquantity-${productId2}`).innerText
  ).toContain('Quantity: 1');
  document.querySelector('.jstestcontainer').innerHTML='';
});
 it('removes a product',()=>{
  document.querySelector(`.js-delete-link-${productId1}`).click();
  expect(
document.querySelectorAll('.jscartitemcontainer').length
  ).toEqual(1);

  expect(
    document.querySelector(`jscartitemcontainer-${productId1}`)
  ).toEqual(null);
   expect(
    document.querySelector(`jscartitemcontainer-${productId2}`)
  ).not.toEqual(null);
expect(cart.length).toEqual(1);
expect(cart[0].productId).toEqual(productId2);

document.querySelector('.jstestcontainer').innerHTML='';
  });
});