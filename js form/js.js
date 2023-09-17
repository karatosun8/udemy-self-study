

const form =document.querySelector(".signupForm")
const username=document.querySelector("#username")

form.addEventListener("submit",e=>{
    // console.log("Submit oldu");
    e.preventDefault();
    console.log(username.value);
})