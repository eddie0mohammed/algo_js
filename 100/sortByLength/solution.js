const solution = (arr) => {

    let newArr = arr.sort((a, b) => {
        return a.length - b.length
    });

    return newArr;

}

console.log(solution(["abc",
"",
"aaa",
"a",
"zz"]))