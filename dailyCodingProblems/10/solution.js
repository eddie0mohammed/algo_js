const callFunc = () => {
    console.log('testing');
}

const solution = (func, integer) => {
    setTimeout(func, integer);
}

solution(callFunc, 2000);
