// function removeDuplicates(array) {
//     return [...new Set(array)]
// }

// const array = [1, 1, 0, 2, 8, 2, 3, 6, 6, 3, 9, 9]
// console.log( removeDuplicates(array));

function removeDuplicates(array) {
    const map = {}

    for (const char of array) {
        if (map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
    }

    return Object.keys(map)
}

const array = [1, 1, 0, 2, 8, 2, 3, 6, 6, 3, 9, 9]
console.log( removeDuplicates(array));