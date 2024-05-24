// Solution 1
// function anagram(str1, str2) {
//     return formatStr(str1) === formatStr(str2);

// }

function formatStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// Solution 2

function anagram(str1, str2) {
    const aCharMap = buildCharMap(formatStr(str1));
    const bCharMap = buildCharMap(formatStr(str2));

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
        return false

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char])
            return false;
    }

    return true
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

module.exports = anagram;