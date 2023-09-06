
let countOfValidNumber  = 0

function checkCondition(set) {
    if (!set.has(0) && set.size === 2){
        countOfValidNumber = countOfValidNumber + 1
    }
}

function separatingDigitsOfNumber(set , number) {
    for (let i = 0 ; i < 3 ; i++){
        let latestDigit =  number % 10
        set.add(latestDigit)
        number =  Math.floor(number / 10)
    }
}


for (let number = 100 ; number <= 999 ; number ++){
    const mySet =  new Set()

    separatingDigitsOfNumber(mySet , number);

    checkCondition(mySet);
}

console.log(countOfValidNumber);