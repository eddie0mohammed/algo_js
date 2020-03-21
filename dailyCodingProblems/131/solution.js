
class Hitcounter {

    constructor(){
        this.collection = [];
    }

    record(timestamp){
        this.collection.push(timestamp);
    }

    total(){
        return this.collection.reduce((acc, elem) => {
            acc += 1;
            return acc;
        }, 0);
    
    }

    range(lower, upper){
        const arr = this.collection.filter(elem => {
            return elem >= lower && elem <= upper;
            
        });

        return arr.reduce((acc, elem) => {
            acc += 1;
            return acc;
        }, 0);
    }
}


const hit = new Hitcounter();

hit.record(1);
hit.record(2);
hit.record(3);


console.log(hit.total());
hit.record(4);

console.log(hit.total());

console.log(hit.range(1, 3));