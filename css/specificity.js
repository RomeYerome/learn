`SPECIFICITY IN CSS`;
// Specificity is the means by which browsers decide which of two or more conflicting CSS property values is the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors.

`CASCADE`;
// CSS stands for Cascading Style Sheets. The "cascading" part of the name refers to the way that CSS rules are applied to elements. Basically the last written rule generally takes precedence. Except a previous one is more specific. The specificity is calculated based on the weight of the selector

`WEIGHT OF SELECTORS`;
// The weight of selectors is calculated based on the following:

// 1. ID selectors have a weight of 100

// 2. Class selectors, attributes selectors, and pseudo-classes have a weight of 10

// 3. Type selectors and pseudo-elements have a weight of 1

// 4. Universal selector and combinators have a weight of 0

`EXAMPLES`;
// Here are some examples of specificity:

// 1. h1 has a specificity of 1
// 2. h1.class has a specificity of 11
// 3. h1#id has a specificity of 101
// 4. h1.class#id has a specificity of 111
// 5. h1.class.class has a specificity of 21
// 6. h1.class.class.class has a specificity of 31
// 7. h1.class.class.class.class has a specificity of 41



`INLINE STYLES VS INTERNAL STYLES VS EXTERNAL STYLES`;
// Inline styles are styles that are applied directly to an element. They are defined within the element's opening tag. They have the highest specificity because of cascade (basically they are technically at the bottom i.e will load after the internal styles and external styles). Internal styles are defined within the `<style>` element in the head of the document. They have a medium specificity. External styles are defined in a separate CSS file and linked to the HTML document. They have the lowest specificity.



`IMPORTANT FLAG`;
// There is a way to override specificity calculations in CSS by adding the important flag to a property. This tells the browser to disregard its standard calculation and prioritize that rule. Here is an example


`
h1 {
    font-size: 2rem !Important;
}

h1#title {
    font-size 1rem;
}
`

// Even though the h1#title has a specificity of 101 and also has a cascade advantage, the plain h1's rules take precedence because of the important flag