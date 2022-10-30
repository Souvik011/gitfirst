const form=document.querySelector('#my-form');

const inputname=document.querySelector('#name');

const email=document.querySelector('#email');

const msg=document.querySelector('.msg');

const userList=document.querySelector('#users');



form.addEventListener('submit',onsubmit);


function onsubmit(e){

    e.preventDefault();


    if(inputname.value===''|| email.value==='')

    {

       msg.classList.add('error'); 

        msg.innerHTML='please enter all fields';

        setTimeout(() => {

            msg.remove();

        }, 3000);

    }

    else{

        let username = document.getElementById('name').value;
        let useremail = document.getElementById('email').value;

        let userdetails = {
            name : username ,
            email : useremail
        } ;

        

        let userdetails_serialized = JSON.stringify(userdetails);

        localStorage.setItem('userdetails', userdetails_serialized);

        

        let userdetails_deserialized = JSON.parse(localStorage.getItem('userdetails'));

        console.log(userdetails_deserialized);
        


    }

}
