`THE DOCUMENT OBJECT MODEL - DOM`;

// The Document Object Model is basically a structured representation of a HTML Page. It can be thought of as a tree of nodes or elements created by the browser. These nodes/elements are the paragraphs and spans and basically every element that constitutes your html page. You can read, write and manipulate the DOM and its nodes with Javascript. 

// The DOM is object oriented, meaning each node has its own set of properties and methods



`ACCESSING ELEMENTS USING DOCUMENT OBJECT`;
// You can access elements in the DOM using the document object. The document object is the root of the DOM tree and is the entry point to the DOM. It has various properties and methods that can be used to access and manipulate the DOM. By simply using dot notation, you can access any element in the DOM. For example

val = document; // returns the entire document containing the html tag (page)
val = document.documentElement; // returns the entire html element
val = document.head; // returns the head element and its content
val = document.body;    // returns the body of the doc and its content

val = document.forms; // returns an html collection of all the forms on the page. html collections look like arrays but are not. You can't loop through them or
val = document.forms[0].id; // returns the id oF the first form
val = document.forms[0].action; // returns the action property
val = document.doctype; // returns the doctype of the doc
val = document.domain;  // DEPRECATED gets the domain of the doc
val = document.URL; // gets the URL of the doc
val = document.links; // returns a HTML collection of all links on the document
val = document.characterSet;    // gets the character set of the doc
val = document.links[0].classList; // gets the classList of the 1st link
val = document.images; // gets an html collection of all the images
val = document.scripts; // gets a collection of all scripts
val = document.scripts[2].getAttribute('src'); // gets the src attribute of the 2nd script
val = document.contentType; // gets the content type of the doc i.e text/html

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

console.log(val);


`HTMLcollections vs Arrays`;
// HTMLcollections look like arrays but are not. The only similarity is that you can index a HTMLcollection... i.e. HTMLcollectionName[3]. You can't loop through them or use array methods on them. You can however convert them to arrays and use array methods on them using the Array.from() method






`SELECTING ELEMENTS - DOM SELECTORS`;


`DOM SELECTORS for single elements`;
// There are 2 main single element selectors. getElementById and querySelector


`getElementById`;
// Just as the name says, it is used for selecting elements with IDs by their ID

const taskTitle = document.getElementById('task-title');

// Once selected, you can manipulate it anyway you want. 



`querySelector`;
// querySelector is an even more powerful single element selector. It is not limited to IDs, you can select just like you would any typical css selector from classes to elements. In cases where multiple elements meet the search criteria, querySelector only selects the 1st one

document.querySelector('#task-title'); // selects element with id 'task-title'
document.querySelector('.card-title'); // selects element with class 'card-title'
document.querySelector('ul li'); // select li element nested in ul
document.querySelector('li:last-child'); // selects last-child li element
document.querySelector('li:nth-child(3)'); // selects 3rd child li element
document.querySelector('li:nth-child(odd)'); // selects first odd li element






`DOM SELECTORS for Multiple Elements `;
// You have 3 main  multiple elements selectors in JS. getElementsByClassName, getElementsByTagName and querySelectorAll


`document.getElementsByClassName('className')`;
// getElementsByClassName selects all elements with the specified className and returns them in a HTML collection. You can easily convert this to an array to work with. 


let items = document.getElementsByClassName('collection-item'); // returns a HTML collection of items with the className .collection-item

console.log(items);
items[0].style.color = 'red';   // changes the color of the first item to red
items[3].textContent = 'Hello'; // changes the text content of the 3rd item to Hello


const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); //selects all elements with className .collection-item within a local scope 'ul'




`document.getElementsByTagName`;
// This is similar to getElementsByClassName only it selects elements by their tags...  p, div, ul, li, a...etc. It returns a HTML collection so you'll have to convert it to an array to use array methods


let listA = document.getElementsByTagName('li'); // returns a HTML collection of all li elements in the doc

listA[0]; // returns the first list item in the selected collection

listA = Array.from(listA); // converts the listA HTMLcollection to an array




`document.querySelectorAll`;
// querySelectorAll is the most powerful multiple element selector and the only one you really need. it takes in any css selector and returns evey item that matches in a NODELIST. A nodelist is closer to an array than a html collection but it is not an array. a nodelist takes account of text nodes as well.

// You can use array methods such as forEach, length, bracket notation and more on a nodelist unlike HTML collections 

items = document.querySelectorAll('ul.collection li');

items.forEach((item, index) => {
    item.textContent = `${index}: Hello`;

    item.style.color = red;
});





`MANIPULATING CONTENT`;

// Once you've selected an element, there are various ways to manipulate it. You can change it's styling, content, classes, attributes etc


`Getting and Setting Attributes`;

// You can get and set attributes of elements using the getAttribute('attributeName') and setAttribute('attributeName', 'value') methods

selectedElement.getAttribute('href'); // gets the href attribute of the selected element if it has one, else it returns null
selectedElement.getAttribute('class'); // gets the class attribute of the selected element if it has one, else it returns null


selectedElement.setAttribute('href', 'http://google.com'); // sets the href attribute of the selected element to http://google.com
selectedElement.setAttribute('class', 'btn'); // sets the class attribute of the selected element to btn



`Get Things from Element`
taskTitle.id;   // gets the element's ID
taskTitle.className;    // gets the element's classes


`Alter Element Styling`
// for compound words, like background-color, or margin-bottom, JS uses camel case instead. i.e backgroundColor

taskTitle.style.color = '#fff'; // changes the elements color to #fff
taskTitle.style.paddingRight = '5px';    // sets the elements right padding to 5px


`Change Content`
taskTitle.textContent = 'My tasks'; // sets the elements textContent
taskTitle.innerText = 'Task List';  // sets the elements innerText
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

















`TRAVERSING THE DOM`;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');




`Accessing Children of Elements`;
// There are various ways to get to the children of elements


`Children`;
// .children returns a HTML COLLECTION with child elements. It is a property of the element and not a method

list.children; //returns just child elements

list.children[1].textContent = 'Hello';



`Children of Children`;
list.children[1].children; // returns a HTML collection of the children of the 2nd child of list

list.children[3].children[0].id = 'test-link'; // assigns an id to the first child of the 4th child of list
list.children[0].nodeName;    // returns the name of the node e.g LI, DIV, A, etc
list.children[0].nodeType; // returns a number that represents the type of the node




`childNodes`
// childNodes return child elements, its text nodes and other clutter in a NODELIST. Use children instead

list.childNodes; // returns nodelist with children of list element and unexpected clutter like linebreaks and textnodes
list.childNodes[0].nodeName;    // returns the name of the node
list.childNodes[0].nodeType; // returns a number that represents the type of the node

`nodeType reference
1 - Element
2 - Attribute (deprecated)
3 - Text Node
8 - Comment
9 - Document itself
10 - Doctype`;




`firstElementChild`;
// .firstElementChild returns the first child or null if non. alternatively, there is firstChild but it returns the first child including clutter
list.firstElementChild; //returns the first element child



`lastElementChild`;
// like firstElementChild, it returns the last element child (no clutter) or null if none. alternatively, there is lastChild but it returns the last child with clutter like line breaks, etc.
list.lastElementChild;



`childElementCount`;
// Counts the number of child elements (no clutter)
list.childElementCount; //returns the child count of list






`PARENTS OF ELEMENTS`;
// To get to parents of elements, you can use parentNode or parentElement. They both return the same thing


`parentElement`;
listItem.parentElement; // returns parent of element
listItem.parentElement.parentElement; //returns grandparent of element
// alternatively, there is parentNode that does the same thing




`SIBLINGS OF ELEMENTS`;
//You can move between sibling elements using nextSibling, previousSibling, nextElementSibling and previousElementSibling

`.nextElementSibling`;
listItem.nextElementSibling; // returns actual next sibling , no clutter. alternatively there is nextSibling that includes clutter

`.previousElementSibling`;
listItem.previousElementSibling; // returns actual previous sibling, no clutter or null if there's none. alternatively there is previousSibling that includes clutter




`GET CLOSEST ELEMENT`
// you can find the element with a specific attribute that is close to a specified element as follows

h1.closest('.card');    // returns the closest element with a class of card to the h1 element
























`CREATING ELEMENTS`;
// You can create new HTML elements in your document using the document.createElement('element-name') method as shown below. Once created, you can add classes using .className or id using.id or attributes using .setAttribute('attributeName', 'value') and text using .createTextNode('text') and then append it to the DOM using .appendChild(element)

// You can either use innerHTML or appendChild. innerHTML is the quicker way but it's not as good as appendChild as it can cause security issues and it's not as performant. appendChild is the better way to go. innerHTML could also have unintended consequences like removing event listeners

`Create New Element`;
const li = document.createElement('li');

`Add Class`;
li.className = 'collection-item';

`Add id`;
li.id = 'first-item';

`Add Attribute`;
li.setAttribute('title', 'New Item');

`Create TextNode and Append`;
li.appendChild(document.createTextNode('Hello World'));

`Create Link Element`;
const link = document.createElement('a');

`Add classes`;
link.className = 'delete-item secondary-content';

`Add Icon`;
let icon = document.createElement('i');
icon.className = 'fa fa-remove';
link.appendChild(icon);

`Append Link as Child of li`;
li.appendChild(link);

`Append Element As Child`
// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);











`Insert Before an Element`;
// The syntax for inserting before an element is as follows: parentElement.insertBefore(elementToInsert, elementToInsertBefore)
parent.insertBefore(child, elementToInsertBefore);






`REPLACE ELEMENTS`;
// There are several ways to replace elements but the most common are, replaceWith and replaceChild. You can also replace directly using innerHTML and OuterHTML. However, these are not recommended as they can cause security issues and unintended consequences like removing event listeners

// Create New Element;
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// Add Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get Old Element to be Replaced
const oldHeading = document.getElementById('task-title');

// Get Parent Element
const cardAction = oldHeading.parentElement;



`using replaceChild()`
// replaceChild syntax is as follows - parentElement.replaceChild(newElement, oldElement)
cardAction.replaceChild(newHeading, oldHeading);

`using replaceWith()`
// replaceWith syntax is as follows - elementToBeReplaced.replaceWith(elementToReplaceWith)
oldHeading.replaceWith(newHeading);

`using innerHTML`
// innerHTML syntax is as follows - element.innerHTML = 'HTML to be inserted'

oldHeading.innerHTML = 'Task List';

`using outerHTML`
// outerHTML syntax is as follows - element.outerHTML = 'HTML to be inserted'

cardAction.outerHTML = '<h2>Task List</h2>';








`HOW TO REMOVE ELEMENTS`;
//There are 2 main ways of removing elements from a document. The 1st is element.remove() method and the 2nd is parent.removeChild(child);

const lis = document.querySelectorAll('li'); // children
const list = document.querySelector('ul');  // parent


`element.remove() - Remove item`;
// this is called on the element itself
lis[0].remove();


`Remove Child`;
// this is called on the parent element and takes the child element to be removed as an argument
list.removeChild(lis[3]);









`INSERTING ELEMENTS`;
// there are four (4) main ways to insert elements into the DOM. They are insertAdjacentElement, insertAdjacentHTML, insertAdjacentText and insertBefore. When inserting adjacent elements or html or text, you have four (4) position options

// beforebegin - before the element itself
// afterbegin - just inside the element, before its first child
// beforeend - just inside the element, after its last child
// afterend - after the element itself


`insertAdjacentElement`;
function insertElement() {
    // select element
    const filter = document.querySelector('#filter');

    // create element to be inserted
    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    // insert element. syntax is element.insertAdjacentElement(position, elementToInsert)
    filter.insertAdjacentElement('beforebegin', h1);
}


`insertAdjacentHTML`
function insertHTML() {
    // select adjacent element
    const filter = document.querySelector('#filter');

    // insert element. syntax is element.insertAdjacentHTML(position, HTMLToInsert)
    filter.insertAdjacentHTML('afterbegin', '<h1>insertAdjacentHTML</h1>');
}



`insertAdjacentText`
function insertText() {
    // select adjacent element
    const filter = document.querySelector('#filter');

    // insert element. syntax is adjacentElement.insertAdjacentText(position, textToInsert)
    filter.insertAdjacentText('afterend', 'Text to be inserted');
}



`insertBefore`
// insertBefore is called on the parent element and takes the element to be inserted and the element to be inserted before as arguments

function insertBefore() {
    // select parent element
    const filter = document.querySelector('#filter');

    // create element to be inserted
    const h1 = document.createElement('h1');
    h1.textContent = 'insertBefore';

    // select element to be inserted before
    const ul = document.querySelector('ul');

    // insert element. syntax is parentElement.insertBefore(elementToInsert, elementToInsertBefore)
    filter.insertBefore(h1, ul);
}


/* beforebegin - before the element itself
<p id ='filter'>
    afterbegin - just inside the element, before its first child

    foo

    beforeend - just inside the element, after its last child
</p>
afterend - after the element itself
*/






` CUSTOM INSERTAFTER CHALLENGE`

// create element to be inserted
const h1 = document.createElement('h1');
h1.textContent = 'insertAfter';


function insertAfter(newElement, targetElement) {
    // select parent element
    targetElement.parentElement.insertBefore(newElement, targetElement.nextElementSibling);
}

















`CLASSES & ATTRIBUTES`;

// You can add, remove and modify classes and attributes of html element using JS.
// The code below is used to select the first child of a list item that is like this <li>Link <a>icon</a></li>

const firstLi = document.querySelector('li:first-child'); // selects the first li item
const link = firstLi.children[0]; // selects the first child of that li which is the link



`CLASSES`;
`There are 2 ways to get or set the classes of an element 
1: .className - returns a string of all the classes)

2: .classList - returns a DOMTokenList (similar to an array) of all the classes of that element. As it is like an array, you can access individual classes using bracket notation and use high order array methods like forEach... just like an array.

.classList also has methods like .add(new class name) and .remove(class name)`;


val = link.className; // returns a string of all the classes of the element
val = link.classList; // returns a DOMTokenList of classes
val = link.classList[0];

link.classList.add('test'); // adds the given class
link.classList.remove('test'); // removes the given class 
link.classList.toggle('test'); // switches between adding and removing the class everytime the method is called
link.classList.replace('oldClass', 'newClass')  // 




















