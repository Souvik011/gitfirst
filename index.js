//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//document.title = "Souvik First DOM ";
//console.log(document.head);
//console.log(document.links);
//var x = document.getElementById('header-title');
//console.log(x.innerText);
//console.log(x.outerHTML)
//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';
//var items = document.getElementsByClassName('title');
//console.log(items[0]);
//items[0].innerHTML='<b> Add Items </b>'
//items[0].style.color="#00FF00";


//Get Elements by Class

//var items = document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[0]);
//items[1].textContent = 'Hello';
//items[1].style.fontWeight = 'Bold';
//items[1].style.backgroundColor = 'yellow';
//items[2].style.backgroundColor = 'green';


//Get Elements BY Tag Name

// var items = document.getElementsByClassName("list-group-item");
// items[4].innerText='Front Text'

var li = document.getElementsByTagName("li");
li[4].innerText = 'New Item';
li[4].style.backgroundColor = 'grey'