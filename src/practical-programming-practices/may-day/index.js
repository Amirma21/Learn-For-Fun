
const message = 'Whiskey Hotel Four Tango Dash Alpha Romeo Three Dash Yankee Oscar Uniform Dash Sierra One November Kilo India November Golf Dash Four Bravo Zero Uniform Seven'

const listOfWords = message.split(" ");


const specials = {
    "Zero" : "0" ,
    "One" : "1" ,
    "Two" : "2" ,
    "Three" : "3" ,
    "Four" : "4" ,
    "Five" : "5" ,
    "Six" : "6" ,
    "Seven" : "7" ,
    "Eight" : "8" ,
    "Nine" : "9" ,
    "Dash" : "-"
}



const decodedMessage = []

for (let word of listOfWords) {
    if (specials[word]){
        decodedMessage.push(specials[word])
    }else decodedMessage.push(word[0])
}



console.log(decodedMessage)

