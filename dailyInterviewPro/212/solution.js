
const solution = (num) => {

    return numberWithCommas(num) + '.00 N';

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


console.log(solution(3333333333));