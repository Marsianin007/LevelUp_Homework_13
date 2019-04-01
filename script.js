/*
var check;
function valid(form){

   // document.getElementById("user").className = "user";
    //document.getElementById("password").className = "password";
    
    //var pass= form.password.value.length;
     //login=document.getElementById("user");
   
    if(form.password.value.length < 6 || form.password.value.length > 16){
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

/*function checkValidity() {};
for(var i = 0; i < inputs.length; i++){
    if (input.checkValidity() == false) {
        console.log("Mist");
    }
}

*/
/*
login.addEventListener('keyup', function(){
    var resultLog = login.match(/A-Z/gi);
    if(resultLog!=0){
        login.className = "user_bad";
        login.addInvalidity('Только маленькие буквы');
    }
    else{
        login.className = "user";
    }
}false)

password.addEventListener('keyup', function(){
    var resultPass = password.match(/0-9/gi);
    if(resultPass!=0){
        password.className = "password_bad";
        password.addInvalidity('Нельзя использовать цифры');
    }
    else{
        password.className = "password";
    }
}false)
*/
var password = document.getElementById("password");
    login = document.getElementById("user");

function valid(form){
    //var pass= form.password.value;
    

    if(password.length < 6 || password.length > 16){
        password.className = "password_bad";
        alert("Введите пароль нужной длины");
        check = false;
    }
    else{
        password.className = "password";
        check = true;
    }


    if(check){
        alert("All is good");
    }

     var resultLog = login.match(/A-Z/gi);
    if(resultLog!=0){
        login.className = "user_bad";
        login.addInvalidity('Только маленькие буквы');
    }
    else{
        login.className = "user";
    }

    var resultPass = password.value.match(/0-9/gi);
        if(resultPass!=0){
            password.className = "password_bad";
            password.addInvalidity('Нельзя использовать цифры');
        }
        else{
            password.className = "password";
        }

}
/*
function onLogin(){
    var resultLog = login.match(/A-Z/gi);
    if(resultLog!=0){
        login.className = "user_bad";
        login.addInvalidity('Только маленькие буквы');
    }
    else{
        login.className = "user";
    }
}

function onPass(){
    var resultPass = password.match(/0-9/gi);
    if(resultPass!=0){
        password.className = "password_bad";
        password.addInvalidity('Нельзя использовать цифры');
    }
    else{
        password.className = "password";
    }
}

