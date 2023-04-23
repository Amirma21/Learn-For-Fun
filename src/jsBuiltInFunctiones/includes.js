const list = [2, 4, 5, 6, 7, 8]


// console.log(list.includes(2, 0));

function includes(entry, searchElement, fromIndex) {
    // entry can be string or an array
    if (!fromIndex) {
        for (let i = 0; i < entry.length; i++) {
            return entry[i] === searchElement;
        }
    } else {
        for (let i = 0; i < entry.length; i++) {
            return i === fromIndex && entry[i] === searchElement;
        }
    }
}

console.log(includes('amir', 'a' , 1));
