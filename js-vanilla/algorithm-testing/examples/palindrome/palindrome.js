function palindrome(str) {
    // Your code here
    str = str.toLowerCase().split(' ').join('');
    let reversed = str.split('').reverse().join('');

    return str === reversed;
}

module.exports = palindrome;