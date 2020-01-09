const solution = (children, candies) => {
    let remainder = candies % children;
    // return (candies - remainder) / children;
    return candies - remainder;

}

console.log(solution(3, 10));