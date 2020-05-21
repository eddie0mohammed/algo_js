
function* test(){

    yield 'hello',
    yield 'world'
}

const testing = test();
console.log(testing.next());
console.log(testing.next());
console.log(testing.next());


const x = test();

for (let iterator of x){
    console.log(iterator);
}