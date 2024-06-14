`NESTING & STRUCTURING`;
// When writing HTML you’ve probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn’t.

// Sass lets you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.Be aware that overly nested rules will result in over - qualified CSS that could prove hard to maintain and is generally considered bad practice.

// Here’s an example of nesting in Sass:

// `main.scss`;

`nav {
    display: flex;
    justify-content: space - between;
    background - color: #333;
    color: #fff;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li { display: inline-block; }

    a {
        display: block;
        padding: 6px 12px;
        text - decoration: none;
    }
}`;


// In this example, the CSS rules are nested inside the nav selector. This makes it easier to read and understand the relationship between the rules and the nav element. The resulting CSS will look like this:

// `main.css`;

`nav {
    display: flex;
    justify-content: space - between;
    background - color: #333;
    color: #fff;
}

nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

nav li {
    display: inline-block;
}


nav a {
    display: block;
    padding: 6px 12px;
    text - decoration: none;
}`;

// As you can see, the nested Sass code is compiled into flat CSS code. This makes it easier to maintain and update your styles while keeping your CSS organized and structured.

// Nesting in Sass can help you write cleaner and more maintainable code. However, be careful not to over - nest your styles, as this can lead to overly specific and hard - to - maintain CSS. Use nesting judiciously to improve readability and maintainability without sacrificing performance and specificity.



`NESTING WITH AMPERSAND &`;
// Sass also allows you to reference the parent selector using the & character. This can be useful when you want to apply styles to a parent element based on a child element. 

// The & is a joiner that allows you to concatenate the parent selector with the child selector. So instead of writing separate rules for the parent and child elements, you can nest them together and use the & to reference the parent selector. E.G. #section { &-a { color: red; } } will compile to #section-a { color: red; }.


// Here’s an example:

// `main.scss`;

`nav {
    display: flex;
    justify-content: space - between;
    background - color: #333;
    color: #fff;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: inline-block;

        &: hover {
            background - color: #555;
        }
    }

    a {
        display: block;
        padding: 6px 12px;
        text - decoration: none;

        &: hover {
            color: #ff0;
        }
    }
}`;
