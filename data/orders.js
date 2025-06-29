export const orders=JSON.parse(localStorage.getItem('orders'))|| [];

export function addorder(order){
  orders.unshift(order);
savetostorage();
}

function savetostorage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}