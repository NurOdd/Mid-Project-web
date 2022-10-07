//objectivo> inputs en consola + !refresh
const contactForm=document.querySelector(".contactForm")

// let form = document.forms['contactForm'];

contactForm.onsubmit=function(e){
    e.preventDefault();


const username = document.querySelector("#ctrName").value;
const email = document.querySelector("#ctrEmail").value;
const phone = document.querySelector("#ctrPhone").value;
const message = document.querySelector("#ctrMsg").value;

console.log(`Name: ${username}  Email: ${email}  Phone:${phone} Message: ${message}`)
}

