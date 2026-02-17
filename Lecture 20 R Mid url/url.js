let {URL}=require('url');

//let url=new URL("https://localhost:3000/path/test?username='abc'&id=1221#contact");
let url1="https://example.com:8080/path/login?name='pqr'#about";
let url=new URL(url1);

console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);
console.log(url.search);
console.log(url.hash);
console.log(url.href);
console.log(url.searchParams.get('username'));
console.log(url.searchParams.get('id'));

//let url1="https://example.com:8080/path/login?name='pqr'#about";