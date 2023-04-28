const password = document.getElementById("password");
const confirm_pw = document.getElementById("confirm_password");
const message = document.getElementsByClassName("error-msg");
const button = document.querySelector("button");
const form = document.querySelector("form");

for(let i=0; i<message.length;i++){
    message[i].classList.add("error-visible");
}

button.addEventListener("click", (event) => {
    if(password.value!=confirm_pw.value){
        event.preventDefault();
        password.classList.add("error")
        confirm_pw.classList.add("error")
        for(let i=0; i<message.length;i++){
            message[i].classList.remove("error-visible");
        }
    }
    else if(password.classList.contains("error") || confirm_pw.classList.contains("error")){
        password.classList.remove("error")
        confirm_pw.classList.remove("error")
        for(let i=0; i<message.length;i++){
            message[i].classList.add("error-visible");
        }
    }
});
