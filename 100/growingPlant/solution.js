const solution = (upSpeed, downSpeed, desired) => {
    return Math.round(desired / (upSpeed - downSpeed));

}

console.log(solution(100, 10, 910))