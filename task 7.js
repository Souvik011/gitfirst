var itemList = document.querySelector('#items');
// Parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

// Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//Child Nodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = 'yellow';

// // First Child
// console.log(itemList.firstChild);

// //First Element Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'


// // Last Child
// console.log(itemList.lastChild);

// //Last Element Child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4'

//NEXT SIBLING
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//PREVIOUS SIBLING
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//Create ELEMENT

//CREATE A DIV

var newDiv = document.createElement('div')

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello 1'

//add attr
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('HEllo word');

//Add Text to DIV
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');



console.log(newDiv);
container.insertBefore(newDiv, h1);

var newDiv2 = document.createElement('li');
newDiv2.className = 'new';
var textNode = document.createTextNode('HEllo word');
newDiv2.appendChild(textNode);

var x = document.getElementById('items');
var li2 = document.querySelector('li');
x.insertBefore(newDiv2, li2);




