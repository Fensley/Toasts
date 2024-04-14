const element = document.querySelectorAll(".btn");
const fensley = document.querySelectorAll(".fensley")

element.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
    fensley.forEach((each)=> {
        each.classList.toggle("toggle")
    })
    })
})
