const form=document.querySelector('#my-form');

const inputname=document.querySelector('#name');

const date=document.querySelector('#date');

const msg=document.querySelector('.msg');

const userList=document.querySelector('#users');



form.addEventListener('submit',onsubmit);


function onsubmit(e){

    e.preventDefault();


    if(inputname.value===''|| date.value===null)

    {

       msg.classList.add('error'); 

        msg.innerHTML='please enter all fields';

        setTimeout(() => {

            msg.remove();

        }, 3000);

    }

    else{

        

        

        let username = document.getElementById('name').value;
        let userdate = document.getElementById('date').value;

        let userdetails = {
            name : username ,
            date : userdate
        } ;

        let userkey = 'userdetalis'+username;

        

        let userdetails_serialized = JSON.stringify(userdetails);

        localStorage.setItem(userkey, userdetails_serialized);

        

        let userdetails_deserialized = JSON.parse(localStorage.getItem(userkey));

        console.log(userdetails_deserialized);
        


    }

}
Object.keys(localStorage).forEach((key) => {



    stringifiedDetailsOfPeople = localStorage.getItem(key);
    
    detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);

    const li=document.createElement('li');

    li.appendChild(document.createTextNode(detailsOfPeople.name+':'+detailsOfPeople.date));

    userList.appendChild(li);
    
    
    
    console.log(detailsOfPeople);
    
    });
