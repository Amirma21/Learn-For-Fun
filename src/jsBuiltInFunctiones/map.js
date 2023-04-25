const numbers = [2, 3, 4, 5, 10]

const newList = []

function forEach(array, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        callbackFn(array[i], i, array)
    }
}


function map(array, callbackFn) {
    const newList = []

    for (let i = 0; i < array.length; i++) {
        newList.push(callbackFn(array[i], i, array))
    }

    return newList
}


const test = map(numbers, function (value) {
    if (value % 2 === 0) {
        return value = value + 1
    } else return value
})

console.log(test)

