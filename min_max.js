// function getMinMax(arr) {
//     return {
//         min: Math.min( ...arr ),
//         max: Math.max( ...arr )
//     }
// }

// console.log( getMinMax([1, 5, 9, 8, 4, 10, 7, 3]));

// function getMinMax(arr) {
//     const sortedArray = arr.sort((a, b) => a - b)

//     return {
//         min: sortedArray[0],
//         max: sortedArray[sortedArray.length - 1]
//     }
// }

// console.log( getMinMax([1, 5, 9, 8, 4, 0, 7, 3]));

function getMinMax(arr) {
    let min = arr[0]
    let max = arr[0]

    for (let index of arr) {
        if (index > max) {
            max = index;
        }

        if (index < min) {
            min = index;
        }
    }

    return {
        min,
        max
    }
}

console.log( getMinMax([1, 5, 9, 8, 4, 10, 7, 3]));