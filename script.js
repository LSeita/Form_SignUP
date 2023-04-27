const password = document.getElementById("password");
const confirm_pw = document.getElementById("confirm_password");

password.addEventListener("keyup", checkPW())
confirm_pw.addEventListener("keyup", checkPW())


function checkPW(){
    if(password!=confirm_pw){
        password.classList.add("error");
        confirm_pw.classList.add("error");
    }
    else if(password.classList.contains("error") || confirm_pw.classList.contains("error")){
        password.classList.remove("error");
        confirm_pw.classList.remove("error");
    }
}
