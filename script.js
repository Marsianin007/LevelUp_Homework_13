var check;
function valid(form){
    var pass= form.password.value;
   
    if(pass < 6 || pass > 16){
        //alert("Error");
        document.getElementById("password").className = "password_bad";
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