// function stringChallange(arr) {
//     let firstItem = arr[0].toLowerCase();
//     let secondItem = arr[1].toLowerCase();

//     for (let i = 0; i < secondItem.length; i++) {
//         if (firstItem.indexOf(secondItem[i]) === -1)
//             return false;
//     }

//     return true;
// }

// console.log(stringChallange(["dasda", "asdadf"]));


function isPalindrome(str) {
    return str.split('')
        .reverse()
        .join('') === str
}

console.log( isPalindrome("ede"))