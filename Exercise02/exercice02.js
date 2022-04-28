// // 1 )
// alert( null || 2 || undefined);

// // 2 )
// alert( alert(1) || 2 || alert(3) ) 

// // 3 )
// alert( alert(1) && alert(2) ) 

// // 4 )
// alert( null || 2 && 3 || 4 ) 

// // 5 )
// const age = 50
// if ( age >= 14 && age <= 90) console.log('Between 14 and 90');

// // 6 )
// alert( alert(null) ?? null ?? 2 ?? alert(3) )

// //7 )
// if( -1 || 0) alert('first')
// if( -1 && 0) alert('second')
// if(null || -1 && 1) alert('third')

// // 8 ) 
// let user
// alert( user ?? 'Anonymous')

// // 9 )
// let firstName = null;
// let lastName = null;
// let nickName = 'Supercoder'

// alert( firstName ?? lastName ?? nickName ?? 'Anonymous')

// // 10 )
// let age = prompt('age?', 18)

// let message = 
//     (age < 3) ? 'Hi baby' :
//     (age < 18) ? 'Hello' :
//     (age < 100) ? 'Greetings' :
//     'What an inusual age'

// alert( message );

// // 11 )
console.log(5 > 4) 
console.log('apple' > 'pineapple')
console.log('2' > '12')
console.log(undefined === null)
console.log(null == '\n0\n')
console.log(null == +'\n0\n')
