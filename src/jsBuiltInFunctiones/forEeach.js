/// In this file, I want to manually implement the forEach method.

const numbers = [1, 3, 5, 7, 8, 9]

function forEach(array, callBackFn) {
    for (let i = 0; i < array.length; i++) {
        callBackFn(array[i], i, array)
    }
}


forEach(numbers, (num, index) => {
    console.log(`number in index ${index} is ${num}`)
})


/// outPut :
// number in index 0 is 1
// number in index 1 is 3
// number in index 2 is 5
// number in index 3 is 7
// number in index 4 is 8
// number in index 5 is 9


// numbers.forEach((value , index)=>{
//     console.log(index)
// })


/// using other arguments of our ForEach method.

const newNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

forEach(newNumberList, function (item, index, array) {
    array[index] = item + 1
})