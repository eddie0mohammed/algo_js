const solution = (arr) => {

    let general = ['organization', 'commercial', 'network', 'information'];
    let general1 = ['org', 'com', 'net', 'info'];

    return arr.map(elem => {
        let tempArr = elem.split('.');
        return general[general1.findIndex((elem) => {
            return elem.endsWith(tempArr[tempArr.length - 1]);
        })]
    })

}

console.log(solution(["en.wiki.org", "codefights.com", "happy.net", "code.info", "en.wiki.org"]))