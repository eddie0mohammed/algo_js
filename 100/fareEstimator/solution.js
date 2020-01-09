const solution = (cost_min, ride_time, cost_mile, distance) => {

    let newArr = [];
    for (let i = 0; i < cost_min.length; i++){
        let cost = parseFloat(cost_min[i] * ride_time + cost_mile[i] * distance).toFixed(1);
        console.log(cost);
        newArr.push(
            cost
        )

    }
    console.log(typeof(newArr[0]));
    return newArr;
}


console.log(solution([0.2, 0.35, 0.4, 0.45] , 30, [1.1, 1.8, 2.3, 3.5], 7))