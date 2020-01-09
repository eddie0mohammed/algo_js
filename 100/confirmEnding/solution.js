const solution = ( str, end) => {

    // return str.endsWith(end);

    // console.log(str.slice(-end.length))
    if (str.slice(-end.length) === end){
        return true;
    }
    return false;

}

console.log(solution('abstraction', 'action'));