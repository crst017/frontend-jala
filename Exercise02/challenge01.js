// const arr = [1,2,4,7,4,2,1]

// function findNotRepeated( array ) {
    
//     const table = array.reduce( (carry, value) => {
//         carry[value] = ( carry[value] || 0 ) + 1;
//         return carry;
//     }, {} ); 

//     for (const key in table) {  
//         if( table[key] === 1) return `Not repeated item is ${key}`
//     }
// }

// console.log(findNotRepeated(arr));


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(2000).then(() => console.log('runs after 2 seconds'));

console.log(1);
setTimeout(() => console.log(2))
Promise.resolve().then( () => console.log(3))
Promise.resolve().then( () => setTimeout( () => console.log(4)))
Promise.resolve().then( () => console.log(5))
setTimeout(() => console.log(6))
console.log(7)