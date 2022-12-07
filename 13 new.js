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
        let Obj={
            name:namei.value,
            email:emaili.value,
            contactNumber:numberi.value
        }
        axios.post("https://crudcrud.com/api/0fd737a168104501ba123a946f24f4a4/appointmentData",Obj)
        .then((response)=>{
            showData(response.data)

            console.log(response)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML+"<h4>something wrong</h4>"
            console.log(err)
        })
// let Obj_serialized=JSON.stringify(Obj);
//localStorage.setItem(Obj.description,Obj_serialized);
//let Obj_deserialized=JSON.parse(localStorage.getItem("Obj"))

    }
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/0fd737a168104501ba123a946f24f4a4/appointmentData")
    .then((response)=>{
        console.log(response)
         for(var i=0;i<response.data.length;i++){
            showData(response.data[i])
         }
    })
    .catch((error)=>{
        console.log(error);
    })
})

function showData(data){
    var li=document.createElement('li');
    li.className='item';
    li.appendChild(document.createTextNode(`${data.name}- ${data.email}- ${data.contactNumber}`));




    var deletbtn=document.createElement('delete');
    deletbtn.className='btn';
    deletbtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deletbtn);

    var editbtn=document.createElement('edit');
    editbtn.className='btn';
    editbtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editbtn);

    itemList.appendChild(li);

    itemList.addEventListener('click',deleteitem);

    function deleteitem(e){
        if(e.target===deletbtn){
            if(confirm('are you sure?')){
                var li=e.target.parentElement;
                // localStorage.removeItem(emaili.value);
                axios.get(`https://crudcrud.com/api/0fd737a168104501ba123a946f24f4a4/appointmentData`)
                   .then((response)=>{
                       console.log(response)
                        for(var i=0;i<response.data.length;i++){

                            if(li.innerHTML.indexOf(response.data[i].email)!=-1){
                            axios.delete(`https://crudcrud.com/api/0fd737a168104501ba123a946f24f4a4/appointmentData/${response.data[i]._id}`)
                             .then()
                             .catch(err=>console.log(err));
                            }
                        }
                   })
                   .catch((error)=>{
                       console.log(error);
                   })
                 
                itemList.removeChild(li);
            }
        }
    }

    itemList.addEventListener('click',edititem);

    function edititem(e){
        if(e.target==editbtn){
            var li=e.target.parentElement;
            axios.get(`https://crudcrud.com/api/0fd737a168104501ba123a946f24f4a4/appointmentData`)
            .then((response)=>{
            for(var i=0;i<response.data.length;i++){
            if(li.innerHTML.indexOf(response.data[i].email)!=-1) {

                myForm.querySelector('#name').value=response.data[i].name
                myForm.querySelector('#email').value=response.data[i].email;
                myForm.querySelector('#number').value=response.data[i].contactNumber;
                axios.delete(`https://crudcrud.com/api/0fd737a168104501ba123a946f24f4a4/appointmentData/${response.data[i]._id}`)
                .then()
                .catch(err=>console.log(err));

            }
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    itemList.removeChild(li);
}
}    
    }


    
    