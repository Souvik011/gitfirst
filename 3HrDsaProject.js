var Form=document.getElementById('fillupform')
var exp=document.getElementById('expence');
var desc=document.getElementById('description');
var cate=document.getElementById('category');
var itemlist=document.getElementById('users')
document.addEventListener("submit",addItem)
localStorage.setItem('userexpense','expence')
localStorage.setItem('userdescription','description')
localStorage.setItem('usercategory','category')

function addItem(e){
    e.preventDefault();
    if(exp.value==='' || desc.value==='' || cate.value===''){
        alert('Please Enter All Fields')
    }
    else{
        let Obj={
            expence:exp.value,
            description:desc.value,
            category:cate.value
        }
        let Obj_serialized=JSON.stringify(Obj);
localStorage.setItem(Obj.description,Obj_serialized);
let Obj_deserialized=JSON.parse(localStorage.getItem("Obj"))

var li=document.createElement('li');
li.className='item';
li.appendChild(document.createTextNode(localStorage.getItem(Obj.description)));

var delbtn=document.createElement('button');
delbtn.className='delete-btn';
delbtn.appendChild(document.createTextNode('DeleteExpense'));
li.appendChild(delbtn)

var edibtn=document.createElement('button');
edibtn.className='edit-btn';
edibtn.appendChild(document.createTextNode('EditExpense'));
li.appendChild(edibtn)

itemlist.appendChild(li)


    document.addEventListener('click',deleteitem);

    function deleteitem(e){
        if(e.target==delbtn){
            if(confirm('Are You Want to Delete This Item ?')){
                var li=e.target.parentElement;
                localStorage.removeItem(Obj.description);
                itemlist.removeChild(li)
            }
        }
    }
    document.addEventListener('click',edititem);

    function edititem(e){
        if(e.target==edibtn){
            var li=e.target.parentElement;
            for(var i=0;i<itemlist.getElementsByClassName('item').length;i++){
                if(itemlist.getElementsByClassName('item')[i]==li){
                    let myobj_deserialized1=JSON.parse(itemlist.getElementsByClassName('item')[i].firstChild.textContent);
                    Form.querySelector('#expence').value=myobj_deserialized1.expence
                    Form.querySelector('#description').value=myobj_deserialized1.description;
                    Form.querySelector('#category').value=myobj_deserialized1.category;
                    localStorage.removeItem(Obj.description);

                }
            }
            itemlist.removeChild(li)
        }
    }
}  

}