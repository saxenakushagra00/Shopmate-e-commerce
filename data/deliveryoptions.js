export const deliveryoptions=[{
  id:'1',
  deliverydays:7,
  priceCents:0
},{
id:'2',
deliverydays:3,
priceCents:499
},{
  id:'3',
  deliverydays:1,
  priceCents:999
}]

export function getdeliveryoption(deliveryoptionid){
  let deliveryOption;

deliveryoptions.forEach((option)=>{
  if(option.id===deliveryoptionid){
    deliveryOption=option;
  }
});
return deliveryOption || deliveryoptions[0];
}