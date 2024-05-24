function getElsByTag(root, tagName) {
    if (!root)
        return [];

    if (!tagName)
        return [root];

    let result = [];

    if (root.tagName.toLowerCase() === tagName.toLowerCase())
        result.push(root);

    if (root.hasChildNodes()) {
        for (let child of root.children) {
            result = result.concat(getElsByTag(child, tagName))
        }
    }

    console.log(result);
    return result;
}

module.exports = getElsByTag;
