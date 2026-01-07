let email = document.querySelector("#email");
let form = document.querySelector("form");
let password = document.querySelector("#password");
form.addEventListener("submit",function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent=``;
    document.querySelector("#passwordError").textContent=``;
    let isValid = true;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const email_ans = regex.test(email.value);
    console.log(email_ans);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const pass_ans = passwordRegex.test(password.value);
    console.log(pass_ans);

    if(!email_ans){
        document.querySelector("#emailError").textContent=`Email is incorrect..!`;
        isValid=false;
    }

    if(!pass_ans){
        document.querySelector("#passwordError").textContent=`Password is incorrect..!`;
        isValid=false;
    }

    if(isValid){
        document.querySelector("#resultMessage").textContent=`All above details are correct !`;
    }

});