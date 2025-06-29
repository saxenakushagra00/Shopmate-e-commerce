//import'../data/cart-class.js';
import { renderordersummary } from './checkout/ordersummary.js';
import { renderpaymentsummary } from './checkout/paymentsummary.js';
import { loadproducts,loadproductsfetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/backend-practice.js';


async function loadpage(){

await loadproductsfetch();
const value=await new Promise((resolve)=>{
loadCart(()=>{
  resolve('value3');
});
  });


   renderordersummary();
    renderpaymentsummary();
}

loadpage();

/*
Promise.all([
loadproductsfetch(),
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
*/
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
