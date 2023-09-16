
const ul=document.querySelector("ul")
ul.addEventListener("click",e=>{
    console.log(e);
    if(e.target.tagName ==="LI")
    {
        e.target.remove()
    }
})

const button =document.querySelector("button")

button.addEventListener("click",()=>{
    console.log("tıklandı");
})

// const liElement =document.querySelectorAll("li")

// liElement.forEach(eleman =>{
//     eleman.addEventListener("click",e=>{
//         console.log(e.target);
//         console.log("li ye tıklandı");
//         e.target.style.color="blue"
//     })
// })
// liElement.forEach(eleman =>{
//     eleman.addEventListener("click",e=>{
        
//         e.target.remove()
//     })
// })

button.addEventListener("click", ()=>{
    const li =document.createElement("li")
    li.textContent="Javascript"
    // ul.append(li)//Sonuna ekler
    ul.prepend(li)//başa ekler
})

const liElement =document.querySelectorAll("li")
liElement.forEach(eleman =>{
    eleman.addEventListener("click",e=>{
        
        e.target.remove()
    })
})