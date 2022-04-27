const rawFood = ['🐮','🥔','🐔','🌽']
const cookedFood = ['🍔','🍟','🍗','🍿'];
const droolingFace = '🤤'

const food = [
    {   raw: '🐮',
        cooked: '🍔',
        isVegetarian: false,
    },
    {   raw: '🥔',
        cooked: '🍟',
        isVegetarian: true,
    },
    {   raw: '🐔',
        cooked: '🍗',
        isVegetarian: false,
    },
    {   raw: '🌽',
        cooked: '🍿',
        isVegetarian: true,
    }
]

function cookPrimal( emoji ) {

    const rawItem = food.find( item => item.raw === emoji )
    return rawItem.cooked;
}

function cookedFoodIsVegetarian( emoji ) {

    let foodItem = food.find( item => item.cooked === emoji );
    return foodItem.isVegetarian 
}

function eatCookedFood( foodArray ) {

    return foodArray.reduce( ( prev, curr, index ) => {
        console.log('Eaten' + curr);
        return foodArray.length - 1 === index ? droolingFace : prev
    }, foodArray)
}

console.log(['🐮','🥔','🐔','🌽'].map( cookPrimal ))
console.log(cookedFoodIsVegetarian('🍔') ? 'Is vegetarian' : 'Is not vegetarian');
console.log(cookedFoodIsVegetarian('🍔') ? 'Has not meat' : 'Has meat');
console.log(eatCookedFood(['🍔','🍟','🍗','🍿']))
