var check;
function valid(form){

    document.getElementById("user").className = "user";
    document.getElementById("password").className = "password";
    
    var pass= form.password.value.length;
     login=document.getElementById("user");
   
    if(pass < 6 || pass > 16){
        //alert("Error");
        document.getElementById("password").className = "password_bad";
        alert("Введите пароль нужной длины");
        check=false;
    }
    else{
        document.getElementById("password").className = "password";
        check=true;
    }
    


    if(check){
        alert("All is good");
    }
}

function user_mistake(){
    alert("Нельзя использовать заглавные буквы в никнейме");
    document.getElementById("user").className = "user_bad";

}

function pass_mistake(){
    alert("Нельзя использовать цифры в пароле");
    document.getElementById("password").className = "password_bad";
}
   /* login.oninvalid = function(event) {
        event.target.setCustomValidity('Username should only contain lowercase letters. e.g. john');
        alert("GUGU");
    }
*/