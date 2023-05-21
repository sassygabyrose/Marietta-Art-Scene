const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");
var submitl = document.getElementById('lsub');
var submits = document.getElementById('ssub');

//have to have the registered people and verified

const registered = new Map();
const verified = new Map([
    ["hi@email", "hi"]
]);



pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        //e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})


function getLoginName() {
    var name = document.getElementById('lname').value;
    var password = document.getElementById('lpass').value;
    for(let [key, value] of verified){
        if(key === name){
            if(value === password){
                var valert = document.getElementById('valert');
                valert.textContent = 'Welcome!';
                
                document.getElementById('s').style.visibility = "visible";
                document.getElementById('su').style.visibility = "hidden";

                var firstbtn = document.getElementById("lsub");
                var secondbtn = document.getElementById("s");
                firstbtn.parentNode.replaceChild(secondbtn, firstbtn);
                
                console.log("hi");
            }
            else{
                var valert = document.getElementById('valert');
                valert.textContent = 'Wrong password for that email.';
            }
        }
        else{
            var valert = document.getElementById('valert');
                valert.textContent = 'This email is not registered, please sign up for an account.';
        }
    }
    
}

function getSignupName() {
    var name = document.getElementById('sname').value;
    var pass1 = document.getElementById('spass1').value;
    var pass2 = document.getElementById('spass2').value;
    if(pass1 === pass2){
        registered.set(name, pass2);
        var ralert = document.getElementById('ralert');
        ralert.textContent = 'Wait for your account to get registered by the board to log-in. Thank you!';
    }
}

submitl.addEventListener('click', getLoginName);
submits.addEventListener('click', getSignupName);


