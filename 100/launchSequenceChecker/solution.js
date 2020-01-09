const solution = (systemNames, stepNumbers) => {

    let obj = {};

    for (let i = 0; i < systemNames.length; i++){
        if (!obj.hasOwnProperty(systemNames[i])){
            obj[systemNames[i]] = [];
        }
    }

    for (let i = 0; i < systemNames.length; i++){
        if (obj.hasOwnProperty(systemNames[i])){
            obj[systemNames[i]].push(stepNumbers[i]);
        }
    }

    let decision = true;
    for (let key in obj){
        if (!isSorted(obj[key])){
            decision = false;
        }
    }
    return decision;

    


}

function isSorted(arr){
    let newArr = [...arr];
    newArr = newArr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== newArr[i]){
            return false;
        }
    }
    return true;
}



console.log(solution(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]))

console.log(solution(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111] ))