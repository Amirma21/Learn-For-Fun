const ourList = ['A', 1, '3', 4, '3']

const isOk = ourList.some((item) => {
    return item === '2'
})

function some(array, callbackFn) {
    for (let i = 0; i < array.length; i++) return !!callbackFn(array[i], i, array);
}

const isOkTwo = some(ourList, (item, index) => {
    return typeof item === "boolean"
})

console.log("it's ok Two ", isOkTwo)