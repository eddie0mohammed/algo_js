const solution = (l , fares) => {

    let cars = ["UberX", "UberXL", "UberPlus", "UberBlack","UberSUV"]

    let cost = fares.map(elem => elem * l);

    let maxIndex = 0;
    let max = Math.min(...cost);
    
    cost.forEach((elem, i) => {
        if (elem > max && elem <= 20){
            maxIndex = i;
            max = elem
        }
    })

    return cars[maxIndex];

}

console.log(solution(30, [0.3, 0.5, 0.7, 1, 1.3]))