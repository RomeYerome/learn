`FONTS`;
// Picking a font-family for your website is an important decision. The font-family property specifies the font for an element. It can be a specific font-family name or a generic font-family name. Typically you'll pick a font stack that includes a specific font followed by a generic font family in case the specific font is not available.

// You can use web-safe fonts that are available on most devices, or you can use custom fonts by importing them from a font service like Google Fonts or Adobe Fonts or you can upload the font you want to use to your project


`Using Included Websafe Fonts in CSS`;
// The font-family property specifies the font for an element. It can be a specific font-family name or a generic font-family name. Typically you'll pick a font stack that includes a specific font followed by a generic font family in case the specific font is not available. Here are some common web-safe fonts:

`
a {
    font-family: Arial, sans-serif;
}
`;

// In this example, the font-family property is set to Arial, sans-serif. If Arial is not available, the browser will use a generic sans-serif font instead.





`Using External Fonts (E.G Google Fonts) in CSS`;
// You can use custom fonts in your CSS by importing them from a font service like Google Fonts. Here's an example of how to import a font from Google Fonts:

`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}

`;

// In this example, the @import rule is used to import the Roboto font from Google Fonts. The font-family property is then set to 'Roboto', sans-serif. If Roboto is not available, the browser will use a generic sans-serif font instead.






`Using Local (Uploaded) Fonts in CSS`;
// You can also use custom fonts in your CSS by uploading the font file to your project and referencing it in your CSS. Here's an example of how to use a local font in your CSS:

`
@font-face {
    font-family: 'MyCustomFont';
    src: url('mycustomfont.woff') format('woff');
}

body {
    font-family: 'MyCustomFont', sans-serif;
}

`;

// In this example, the @font-face rule is used to define the custom font 'MyCustomFont' and specify the font file mycustomfont.woff. The font-family property is then set to 'MyCustomFont', sans-serif. If the custom font is not available, the browser will use a generic sans-serif font instead.









`FONT PROPERTIES`;
// There are several font properties you can use to style text on your website. Here are some common font properties:




`font-family`;
// The font-family property specifies the font for an element. It can be a specific font-family name or a generic font-family name. Typically you'll pick a font stack that includes a specific font followed by a generic font family in case the specific font is not available.

`font-size`;
// The font-size property specifies the size of the font. You can use absolute units like pixels (px) or relative units like em or rem.

// EM: The em unit is a relative unit of measurement that is based on the font size of the parent element. For example, if the font-size of the parent element is 16px, 1em is equal to 16px. This makes em units useful for creating scalable designs that adapt to changes in font size. However they are also relative to the font-size of the element itself, so they can compound and cause unexpected results.

// REM: The rem unit is similar to the em unit, but it is based on the font size of the root element (html). This makes rem units useful for creating designs that adapt to changes in the root font size, such as when the user changes the default font size in their browser settings. They are also easier to work with than em units because they are not relative to the font-size of the element itself.



`font-weight`;
// The font-weight property specifies the weight of the font. You can use numeric values like 400 or keywords like bold or normal.

// some common values are:
// 100: Thin
// 200: Extra Light (Ultra Light)
// 300: Light
// 400: Normal
// 500: Medium
// 600: Semi Bold (Demi Bold)
// 700: Bold
// 800: Extra Bold (Ultra Bold)
// 900: Black (Heavy)



`font-style`;
// The font-style property specifies the style of the font. You can use keywords like italic or normal.

`font-variant`;
// The font-variant property specifies whether the text should be displayed in small caps. You can use keywords like small-caps or normal.

`text-transform`;
// The text-transform property specifies how the text should be capitalized. You can use keywords like uppercase, lowercase, or capitalize.

`text-decoration`;
// The text-decoration property specifies how the text should be decorated. You can use keywords like underline, overline, line-through, or none.

`line-height`;
// The line-height property specifies the height of a line of text. You can use absolute units like pixels (px) or relative units like em or rem.

// more commonly you can use a factor of the font-size to set the line-height. For example, a line-height of 1.5 would be 1.5 times the font-size.

`letter-spacing`;
// The letter-spacing property specifies the spacing between characters in a text. You can use absolute units like pixels (px) or relative units like em or rem.

// a positive value will increase the space between characters, while a negative value will decrease the space between characters. again, you can use a factor of the font-size to set the letter-spacing.

`word-spacing`;
// The word-spacing property specifies the spacing between words in a text. You can use absolute units like pixels (px) or relative units like em or rem.

// a positive value will increase the space between words, while a negative value will decrease the space between words. again, you can use a factor of the font-size to set the word-spacing.

`text-align`;
// The text-align property specifies the alignment of text. You can use keywords like left, right, center, or justify.




`Shorthand for setting multiple font properties at once`;

`font`;
// The font property is a shorthand property that allows you to set all the font properties in one declaration. It can include the font-style, font-variant, font-weight, font-size, line-height, and font-family properties.

// Example:
`
p {
    font: italic small-caps bold 16px/1.5 'Times New Roman', serif;
}
`;

// In this example, the font property is set to italic small-caps bold 16px/1.5 'Times New Roman', serif. This sets the font style to italic, the font variant to small-caps, the font weight to bold, the font size to 16px, the line height to 1.5 times the font size, and the font family to 'Times New Roman', serif.





`UNITS OF MEASURE FOR FONTS`;
// There are two main types of units of measure for fonts: absolute units and relative units.

`Absolute Units`;
// Absolute units are fixed units of measurement that do not change based on the context. Some common absolute units for fonts include: pixels (px), points (pt), and inches (in). The only one you'll likely use for fonts is pixels (px).

`Relative Units`;
// Relative units are units of measurement that are based on the context of the element. Some common relative units for fonts include: em, rem, and percentages (%). These units are useful for creating scalable designs that adapt to changes in font size.

`Em`;
// The em unit is a relative unit of measurement that is based on the font size of the parent element. For example, if the font-size of the parent element is 16px, 1em is equal to 16px. This makes em units useful for creating scalable designs that adapt to changes in font size. However they are also relative to the font-size of the element itself, so they can compound and cause unexpected results.

`Rem`;
// The rem unit is similar to the em unit, but it is based on the font size of the root element (html). This makes rem units useful for creating designs that adapt to changes in the root font size, such as when the user changes the default font size in their browser settings. They are also easier to work with than em units because they are not relative to the font-size of the element itself.

`Percentages`;
// Percentages are another relative unit of measurement that are based on the context of the element. For font-size, percentages are based on the font-size of the parent element. For example, if the font-size of the parent element is 16px, 100% is equal to 16px. Percentages are useful for creating scalable designs that adapt to changes in font size. They are basically like em units








`OTHER LESS COMMON TEXT PROPERTIES`;

`text-indent`;
// The text-indent property specifies the indentation of the first line of text. You can use absolute units like pixels (px) or relative units like em or rem.

// a positive value will indent the first line of text, while a negative value will outdent the first line of text. again, you can use a factor of the font-size to set the text-indent.

`vertical-align`;
// The vertical-align property specifies the vertical alignment of an inline or table-cell element. You can use keywords like top, middle, bottom, or baseline.

`white-space`;
// The white-space property specifies how white-space inside an element should be handled. You can use keywords like normal, nowrap, pre, or pre-line.

`text-overflow`;
// The text-overflow property specifies how overflowed text should be displayed. You can use keywords like clip, ellipsis, or string.

`overflow-wrap`;
// The overflow-wrap property specifies whether the browser should break words to prevent text from overflowing its container. You can use keywords like normal or break-word.

`word-wrap`;
// The word-wrap property specifies whether the browser should break words to prevent text from overflowing its container. You can use keywords like normal or break-word.

`word-break`;
// The word-break property specifies how words should be broken when they exceed the width of their container. You can use keywords like normal, break-all, or keep-all.

`hyphens`;
// The hyphens property specifies whether the browser should insert hyphens to break words that exceed the width of their container. You can use keywords like auto, manual, or none.




