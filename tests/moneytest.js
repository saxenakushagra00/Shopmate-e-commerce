import{formatcurrency} from '../scripts/utils/money.js';
console.log('converts cents to dollars');
if(formatcurrency(2095)==='20.95'){
console.log('passed');
}else{
  console.log('failed');
}

console.log('works with zero')
if(formatcurrency(0)==='0.00'){
  console.log('passed');
}else{
  console.log('failed');
}

