const passwordBox=document.getElementById("password");
const  lengthSlider=document.getElementById("length");
const lengthValue=document.getElementById("lengthValue");

const uppercase=document.getElementById("uppercase");
const  lowercase=document.getElementById("lowercase");
const numbers=document.getElementById("numbers");
const symbols=document.getElementById("symbols");
const strength =document.getElementById("strength")

lengthSlider.addEventListener("input",()=>{
    lengthValue.textContent=lengthSlider.value
})
function generatePassword(){
    let chars="";
    if(uppercase.checked)
        chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     if(lowercase.checked)
        chars+="abcdefghijklmnopqrstuvwxyz";
     if(numbers.checked)
        chars+="0123456789";
     if(symbols.checked)
        chars+="!@#$%^&*()_+?<>{}[]";
    if(chars===""){
        alert("select at least one option!");
        return;
    }
let password="";

for( let i=0;i<lengthSlider.value;i++){
    password+=chars.charAt(Math.floor(Math.random()*chars.length));
}
passwordBox.value=password;
checkStrength(password);
}
function copyPassword(){
if(passwordBox.value===""){
    alert("Generate password first");
    return;
}
navigator.clipboard.writeText(passwordBox.value);
alert("password copied");
}
function checkStrength(password){
    if(password.length<8){
        strength.textContent="strength:weak";
    }
     else if(password.length<15){
        strength.textContent="strength:medium";
    }
    else{
        strength.textContent="strength:strong";
    }
}

const toggleBtn = document.getElementById("toggle");

toggleBtn.addEventListener("click", () => {
    if (passwordBox.type === "password") {
        passwordBox.type = "text";
        toggleBtn.textContent = "🙈";
    } else {
        passwordBox.type = "password";
        toggleBtn.textContent = "👁️";
    }
});
generatePassword();
