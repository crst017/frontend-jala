const arr = [1,2,4,7,4,2,1]

function findNotRepeated( array ) {
    
    const table = array.reduce( (carry, value) => {
        carry[value] = ( carry[value] || 0 ) + 1;
        return carry;
    }, {} ); 

    for (const key in table) {  
        if( table[key] === 1) return `Not repeated item is ${key}`
    }
}

console.log(findNotRepeated(arr));