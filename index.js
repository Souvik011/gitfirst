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

// var li = document.getElementsByTagName("li");
// li[4].innerText = 'New Item';
// li[4].style.backgroundColor = 'grey'

// Query Selector //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px grey';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='Send';

// Query Selector all //

// var titles = document.querySelectorAll('.title');
// console.log(titles);


//My Tasks for Task 5//
// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color='green';
// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display = 'none';


var li2 = document.querySelector('li:nth-child(2)');
li2.style.color='green';
var lis = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<lis.length;i++){
    lis[i].style.backgroundColor = 'green';
}
