//import'../data/cart-class.js';
import { renderordersummary } from './checkout/ordersummary.js';
import { renderpaymentsummary } from './checkout/paymentsummary.js';
import { loadproducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/backend-practice.js';

Promise.all([
new Promise((resolve)=>{
loadproducts(()=>{
  resolve('value1');
});
}),
new Promise((resolve)=>{
loadCart(()=>{
  resolve();
});
  })
]).then((values)=>{
  console.log(values);
    renderordersummary();
    renderpaymentsummary();
});

/*
new Promise((resolve)=>{
loadproducts(()=>{
  resolve('value1');
});
}).then((value)=>{
  console.log(value);
  return new Promise((resolve)=>{
loadCart(()=>{
  resolve();
});
  });


}).then(()=>{
    renderordersummary();
    renderpaymentsummary();
});
*/
/*
loadproducts(()=>{
  loadCart(()=>{
    renderordersummary();
    renderpaymentsummary();
  });
});
*/
