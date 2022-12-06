var namei=document.getElementById('name')
var emaili=document.getElementById('email')
var numberi=document.getElementById('number')

var itemList=document.querySelector('#users')
var myForm=document.querySelector('#my-form');
myForm.addEventListener('submit',onsubmit);


function onsubmit(e){
    e.preventDefault();
    if(namei.value==='' || emaili.value==='' || numberi.value===''){
        alert('please enter fields')
    }
    else{
        // if(localStorage.getItem(emaili.value)){
        //     var it=document.querySelectorAll('.items');
        //     for(var i=0;i<it.length;i++){
        //         if(it[i].innerHTML.indexOf(emaili.value)!=-1){
        //             it[i].remove();
        //         }
        //     }
        // }
let myObj={
    name:namei.value,
    email:emaili.value,
    contactNumber:numberi.value
}
// let myobj_serialized=JSON.stringify(myObj);
// localStorage.setItem(myObj.email,myobj_serialized);
// let myobj_deserialized=JSON.parse(localStorage.getItem("myObj"))
axios.post("https://crudcrud.com/api/424091e9ef2649d9a4befa8c38a8b102/appointmentData", myObj)
.then((response) => {
    showData(response.data);
})
.catch(error => console.log(error));

// showData(myObj);
        

}
function showData(data){
    var li=document.createElement('li');
    li.className='items';
    li.appendChild(document.createTextNode(data.email));




    var deletbtn=document.createElement('delete');
    deletbtn.className='btn';
    deletbtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deletbtn);

    var editbtn=document.createElement('edit');
    editbtn.className='btn';
    editbtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editbtn);

    itemList.appendChild(li);
        
        }


        itemList.addEventListener('click',deleteitem);
        itemList.addEventListener('click',edititem);

    function deleteitem(e){
        if(e.target==deletbtn){
            if(confirm('are you sure?')){
                var li=e.target.parentElement;
                localStorage.removeItem(emaili.value);
                itemList.removeChild(li);
            }
        }
    }
    function edititem(e){
        if(e.target==editbtn){
        var li=e.target.parentElement;
        for(var i=0;i<itemList.getElementsByClassName('items').length;i++)
            {
                if(itemList.getElementsByClassName('items')[i]==li){
                    
                    let myobj_deserialized1=JSON.parse(itemList.getElementsByClassName('items')[i].firstChild.textContent)
                    
                    myForm.querySelector('#name').value=myobj_deserialized1.name;
                    myForm.querySelector('#email').value=myobj_deserialized1.email;
                }
            }
        localStorage.removeItem(emaili.value);
        itemList.removeChild(li);
        }
    }
}