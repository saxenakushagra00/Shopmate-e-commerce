import{formatcurrency} from '../scripts/utils/money.js';

describe('test suite:formatcurrency',() => {
it('converts cents to dollars',() => {
  expect(formatcurrency(2095)).toEqual('20.95');
});

it('works with 0',() =>{
expect(formatcurrency(0)).toEqual('0.00');
});

it('rounds up to the nearest cent',() =>{
  expect(formatcurrency(2000.5)).toEqual('20.01');
});
});