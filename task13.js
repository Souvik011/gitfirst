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

        



        let userdetails_serialized = JSON.stringify(userdetails);

        localStorage.setItem(userdetails.name, userdetails_serialized);



        let userdetails_deserialized = JSON.parse(localStorage.getItem(userdetails.name));

        console.log(userdetails_deserialized);
    function onsubmit(e){
    }

}
Object.keys(localStorage).forEach((key) => {



    stringifiedDetailsOfPeople = localStorage.getItem(key);

    detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);

    showNewUserOnScreen(detailsOfPeople);

    });
}

function showNewUserOnScreen(user){
    const parentNode = document.getElementById('users');
    const childHTML = `<li id=${user.name}>${user.name}-${user.date}
    <button onClick=editUser('${user.name}','${user.date}')> Edit </button>
    <button onClick=deleteUser('${user.name}')> Delete user </button>
     </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUser(username,date){

    document.getElementById('name').value = username;
    document.getElementById('date').value = date;

    deleteUser(username);

}

function deleteUser(username){

    localStorage.removeItem(username);
    removeUserFromScreen(username);



    function removeUserFromScreen(username){
        const parentNode = document.getElementById('users');
        const deleteNode = document.getElementById(username);

        parentNode.removeChild(deleteNode);

    }
}
