class Cat {

    #hunger
    #name
    #loneliness
    #tiredness

    constructor(name) {
        this.#name = name;
        this.#hunger = 5;
        this.#loneliness = 5;
        this.#tiredness = 5;
    }

    get hunger() {
        return 'Hunger ' + this.#name + ': ' + this.#hunger
    }

    get tiredness() {
        return 'Tiredness ' + this.#name + ': ' + this.#tiredness
    }

    static feedCats( ...params ) {
        params.forEach( item => {
            item.eat();
        });
    }

    sleep() {
        console.log(`Sleeping ... ` + this.#name);
        this.#tiredness -= 3;
        this.#hunger += 2 ;
    }

    eat() {
        console.log('Eating ... ' + this.#name);
        this.#hunger -= 2 ;
    }

    hugSomeone() {
        console.log('Hugging someone ... ' + this.#name);
        this.#loneliness -= 3;
    }

    play() {
        console.log('Playing with other cats ... ' + this.#name);
        this.#hunger += 2;
        this.#tiredness += 2;
        this.#loneliness -= 2;
    }

    status() {
        console.log(`
            ${this.#name} Status:
            Hunger: ${this.#hunger}
            Loneliness: ${this.#loneliness}
            Tiredness: ${this.#tiredness}
        `)
    }

    reviewNeeds() {
        let needs = `${this.#name} needs: \n`
        if(this.#hunger >= 8) needs += 'I am hungry, need food'
        if(this.#tiredness >= 8) needs += '\nI am so tired, need to sleep'
        if(this.#loneliness >= 8) needs += '\nI need to huge someone or to play'
        console.log(needs)
    }
}

const zenitsu = new Cat('zenitsu')
const tomasa = new Cat('tomasa')
console.log(zenitsu.hunger);
zenitsu.status();
zenitsu.sleep();
zenitsu.status();
zenitsu.play();
zenitsu.status();
zenitsu.play();
zenitsu.status();
zenitsu.reviewNeeds();
zenitsu.status();

tomasa.hugSomeone()
tomasa.status()
tomasa.reviewNeeds()

console.log(zenitsu.hunger);
console.log(tomasa.hunger);
Cat.feedCats(zenitsu,tomasa)
console.log(zenitsu.hunger);
console.log(tomasa.hunger);
