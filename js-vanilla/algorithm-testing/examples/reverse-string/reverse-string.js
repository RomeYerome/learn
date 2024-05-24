function reverseString(str) {
    // Solution One
    // return str.split('').reverse().join('');

    // Solution Two
    let reversed = '';

    // for (i = 0; i < str.length; i++) {
    //     reversed = str[i] + newString;
    // }

    // Solution Three
    // for (let char of str) {
    //     reversed = char + reversed;
    // }

    // Solution Four

    reversed = str.split('').reduce((reversed, char) => {
        return char + reversed;
    })
    return reversed;
}
console.log(reverseString('hello'));    // olleh
module.exports = reverseString;