// 1. Write a JavaScript program to find the most frequent item of an array

function getMostFrequent( array ) {
    
    const table = array.reduce( (carry, value) => {
        carry[value] = ( carry[value] || 0 ) + 1;
        return carry;
    }, {} ); // Initialize empty object

    const mostFrequentItem = Object.keys(table).reduce( ( prev, current ) => {
        return table[prev] > table[current] ? 
            [prev, table[prev]] : 
            [ current, table[ current]]
    });

    return `${mostFrequentItem[0]} ( ${mostFrequentItem[1]} times )`
}

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(getMostFrequent(arr));

// 2. Write a JavaScript program to find the sum of squares of a numeric vector

function getSumOfSquares( array ) {
    return array.reduce( ( carry, value ) => carry + value * value , 0 )
}

const arr2 = [0, 1, 2, 3, 4];
console.log(getSumOfSquares(arr2))

// 3. Write a function to remove 'null', '0', 'false', "", 'unidefined' and 'NaN' values from
// an array 

function removeFalsyAndNaN( array ) {
    return array.filter( item => item )
}

const arr3 = [NaN, 0, 15, false, -22, '', undefined, 47, null]
console.log(removeFalsyAndNaN(arr3))