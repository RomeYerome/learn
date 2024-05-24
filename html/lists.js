`LISTS`;
// There are two types of lists in HTML, ordered and unordered lists. Lists are created with the <ul> and <ol> tags. The <ul> tag is used to create unordered lists and the <ol> tag is used to create ordered lists

`Unordered Lists`;
// Unordered lists are created with the <ul> tag. Each item in the list is created with the <li> tag. The <ul> tag can contain one or more <li> tags. The items in an unordered list are displayed with bullet points by default

`Example`;
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>

`Ordered Lists`;
// Ordered lists are created with the <ol> tag. Each item in the list is created with the <li> tag. The <ol> tag can contain one or more <li> tags. The items in an ordered list are displayed with numbers by default

`Example`;
<ol>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>

`Nested Lists`;
// You can also create lists inside a list. This is called a nested list. The nested list can be an ordered list or an unordered list and it is indented to the right

`Example`;
<ul>
    <li>Coffee</li>
    <li>Tea
        <ul>
            <li>Black tea</li>
            <li>Green tea</li>
        </ul>
    </li>
    <li>Milk</li>
</ul>




`Key Attributes of Lists`;
// The <ul> and <ol> tags support the following attributes

`type`;
// Specifies the type of bullet point to be displayed in an unordered list. The value can be disc, circle, or square. The default value is disc. It also specifies the type of numbering to be displayed in an ordered list. The value can be 1, A, a, I, or i. The default value is 1

`Example`;
<ul type="circle">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>

`start`;
// Specifies the start value of an ordered list. The value can be any number

`Example`;
<ol start="50">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>

`reversed`;
// Specifies that the list items should be displayed in a reversed order. The value can be true or false. The default value is false

`Example`;
<ol reversed>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>

`value`;
// Specifies the value of an ordered list item. The value can be any number. You can use this attribute to start the numbering of an ordered list from a specific number. You can access the value attribute by using the value attribute in the <li> tag

`Example`;
<ol>
    <li value="100">Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>

