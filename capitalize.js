// function capitalize(sentence) {
//     return sentence
//         .split(' ')
//         .map(word => word[0].toUpperCase() + word.slice(1))
//         .join(' ')
// }

// console.log( capitalize('hi budy!'));

function capitalize(sentence) {
    return sentence
    .split(' ')
    .reduce((prev, current) => {
        return `${prev} ${current[0].toUpperCase() + current.slice(1)}`
    }, '')
}

console.log( capitalize('hi budy!'));