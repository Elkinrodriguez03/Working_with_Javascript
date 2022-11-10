function getVowelsCount (sentence) {
    return sentence.match(/[aeiou]/gi)
    ? sentence.match(/[aeiou]/gi).length
    : 0
}

console.log( getVowelsCount('zczv'));