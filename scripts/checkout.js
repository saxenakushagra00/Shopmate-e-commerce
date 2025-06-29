//import'../data/cart-class.js';
import { renderordersummary } from './checkout/ordersummary.js';
import { renderpaymentsummary } from './checkout/paymentsummary.js';
import { loadproducts } from '../data/products.js';
//import '../data/backend-practice.js';

loadproducts(()=>{
renderordersummary();
renderpaymentsummary();
});
