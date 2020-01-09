const solution = (s, t) => {

    let arrS = s.split('');
    let arrT = t.split('');

    let str = '';

    for (let i = 0; i < arrT.length; i++){
        for (let j = 0; j < arrS.length; j++){
            if (arrT[i] === arrS[j]){
                str += arrT[i];
                i++;
            }
        }
    }

    console.log(str);
    if (str === t){
        return true;
    }
    return false;

}

console.log(solution("ceoydefthf5iyg5h5yts", "codefights"));
console.log(solution("addbyca", "abcd"));