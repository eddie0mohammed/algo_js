const solution = (pro, preferences) => {

    let objProf = {};

    preferences.forEach(elem => {
        elem.forEach(elem1 => {
            if (!objProf.hasOwnProperty(elem1)){
                objProf[elem1] = [];
            }
        })
    })
    
    for (let key in objProf){
        for (let i = 0; i < pro.length; i++){
            if (preferences[i].includes(key)){
                objProf[key].push(pro[i]);
            }
        }
    }

    let newArr = [];
    for (let key in objProf){
        newArr.push([key, [...objProf[key]]]);
    }

    return newArr;

}

console.log(solution(["Jack", "Leon", "Maria"],
[["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]
))