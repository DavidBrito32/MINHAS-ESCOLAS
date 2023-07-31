


function escondeSenha(event){
    event.preventDefault();
    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}

function light(event){
    event.preventDefault();
    forrr.classList.toggle('dark');
}