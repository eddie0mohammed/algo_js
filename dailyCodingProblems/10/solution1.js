const solution = (func, n ) => {

    setTimeout(() => {
        func();
    }, n);
}

console.log(solution(test, 3000));


function test(){

    console.log('hello');
}