const numbers = [1, 3, 5, 6, 7, 20]

// const newList = numbers.filter((item, index, array) => {
//     return item % 2 === 0
// })


// Filter method manually
function filter(array, callbackFn) {
    const filteredArray = []
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i], i, array)) {
            filteredArray.push(array[i])
        }
    }

    return filteredArray
}

const newList = filter(numbers , function (item){
    return item % 2 === 0
})

console.log(newList)