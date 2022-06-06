const checkPP = () => ( 
    target: Object, 
    propertyKey: string, 
    descriptor: PropertyDescriptor
) => {

    const original = descriptor.value;

    descriptor.value = function(...args : any[]) {
        if ( this.ppAvailable > 0 ) {
            original.apply(this, args);
        }
        else {
            console.log( 'Not enough PP for fighting');
        }
    }

    return descriptor
}

type Move = {
    name: string,
    power: number
};

class Pokemon {
  name: string;
  ppAvailable: number;

  constructor(name: string, ppAvailable: number) {
    this.name = name;
    this.ppAvailable = ppAvailable;
  }
  
  @checkPP()
  figth(move: Move) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= 1;
  }

  calculateDamage(move: Move): number {
    return move.power;
  }
}

const thunderbolt: Move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('Pikachu', 1);
pikachu.figth(thunderbolt);
pikachu.figth(thunderbolt);