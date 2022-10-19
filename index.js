//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//document.title = "Souvik First DOM ";
//console.log(document.head);
//console.log(document.links);
var x = document.getElementById('header-title');
console.log(x.innerText);
console.log(x.textContent);
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
var items = document.getElementsByClassName('title');
console.log(items[0]);
items[0].innerHTML='<b> Add Items </b>'
items[0].style.color="#00FF00";