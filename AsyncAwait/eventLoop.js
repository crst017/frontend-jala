setTimeout(() => console.log(1));
console.log(2);
Promise.resolve().then(()=> console.log(3));
Promise.resolve().then(()=> setTimeout( ()=> console.log(4)));
setTimeout(() => console.log(5));
console.log(6);
Promise.resolve().then(()=> console.log(7));
