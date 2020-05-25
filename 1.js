

const mainState = {
    "1": ["1"],
    "2": ["2"],
    "3": ["3"]
}


const objToSend = {
    "a": "test1",
    "b": "test2",
    "c": "test3",
    "test": mainState
}

console.log(JSON.stringify(objToSend));