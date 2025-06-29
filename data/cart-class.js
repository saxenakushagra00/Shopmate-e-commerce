class Cart{
cartItems;
#localStoragekey;

constructor(localStoragekey){
this.localStoragekey=localStoragekey;
this.#loadfromstorage();
}
 #loadfromstorage(){
this.cartItems= JSON.parse(localStorage.getItem(this.#localStoragekey));
if(!this.cartItems){
  this.cartItems=[{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
  deliveryoptionsid:'1'

},{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1,
  deliveryoptionsid:'2'
}];
}
}

savetostorage(){
  localStorage.setItem(this.#localStoragekey,JSON.stringify(this.cartItems));
}



addtocart(productId){
let matchingitem;
this.cartItems.forEach((cartitem)=>{
if(productId===cartitem.productId){
matchingitem=cartitem;
}
});

if(matchingitem){
  matchingitem.quantity+=1;
}else{
this.cartItems.push({
  productId:productId,
  quantity:1,
  deliveryoptionsid:'1'
});
}
this.savetostorage();
}

removefromcart(productId){
const newcart=[];

this.cartItems.forEach((cartitem)=>{
if(cartitem.productId!=productId){
  newcart.push(cartitem);
}
});

this.cartItems=newcart;
this.savetostorage();
}

updatedeliveryoption(productId,deliveryoptionsid){
  let matchingitem;
this.cartItems.forEach((cartitem)=>{
if(productId===cartitem.productId){
matchingitem=cartitem;
}
});

matchingitem.deliveryoptionsid=deliveryoptionsid;

this.savetostorage();

}
}


const cart =new Cart('cart-oop');
const businesscart=new Cart('cart-business');

console.log(cart);
console.log(businesscart);