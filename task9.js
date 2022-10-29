var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete EVENT
itemList.addEventListener('click', removeItem);

//Filter 
filter.addEventListener('keyup', filterItems);


// ADD Item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;

    // Create new li element
    var li = document.createElement('li');
    //Add Class
    li.className = 'list-group-item';
    console.log(li);
    //ADD text node with input value
    li.appendChild(document.createTextNode(newItem +' '+description));

    //Create del button element
    var deleteBtn = document.createElement('button');

    //ADD classes to DELETE btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append TEXT node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Ctreating A EDITbutton
    var editBtn = document.createElement('button');
    editBtn.className = 'btn  btn-sm float-right float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));

    //Append button to li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    //Append li to list
    
    itemList.appendChild(li);
    
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter item

function filterItems(e){
    //Convert to lower case
    var text = e.target.value.toLowerCase();
    console.log(text);
    //get list
    var items = itemList.getElementsByTagName('li');

    //Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }

    });
}