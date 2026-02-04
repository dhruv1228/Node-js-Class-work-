const math=require('./math');

let a=10;
let b=10;
console.log(math.pi);
console.log(math.sum(a,b));
console.log(math.product(a,b));

let{pi,sum,product}=require('./math');

console.log(pi);
console.log(sum(a,b));
console.log(product(a,b));