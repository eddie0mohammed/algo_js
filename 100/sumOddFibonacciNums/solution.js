const solution = (num) => {

    let seq = generate(num);

    // let sum = 0;
    // for (let i = 0; i < seq.length; i++){
    //     if (seq[i] <= num && seq[i] % 2 !== 0){
    //         sum += seq[i];
    //     }
    // }

    // return sum;

    let odd = seq.filter(elem => {
        return elem % 2 !== 0 && elem <= num;
    });

    console.log(odd);

   return  odd.reduce((elem, acc) => {
        return acc + elem;
    }, 0);

    



}

function generate(num){
    let arr = [1,1];

    let previous = 1;
    let current = 1;
    let next = 0;
    while (next < num){
        next = previous + current;
        arr.push(next);
        previous = current;
        current = next;
    }
    return arr;
}

console.log(solution(10));