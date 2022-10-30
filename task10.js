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

        var username = document.getElementById('name').value;
        var useremail = document.getElementById('email').value;

        localStorage.setItem('name',username);
        localStorage.setItem('email',useremail);

        username = '';
        useremail = '';

    }

}
