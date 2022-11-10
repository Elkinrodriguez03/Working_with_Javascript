// function reverseString(str) {
//     return str.split('')
//         .reverse()
//         .join('')
// }

// console.log( reverseString('Hello'));

// function reverseString(str) {
//     let reversedString = ''

//     str.split('').forEach(char => {
//         reversedString = char + reversedString
//     })

//     return reversedString
// }

// console.log( reverseString('Hello'));

function reverseString(str) {
    return str.split('')
        .reduce((prev, curr) => curr + prev, '')
}

console.log( reverseString('Hello'));