const btnAdd=document.querySelector("#btnAdd")



const divContent=document.querySelector("#content")


btnAdd.addEventListener("click",function(){
    const div=document.createElement("div")
    div.textContent="Bonjour"
    // div.style='color:red'
    // console.log();
    div.classList.add(btnAdd.classList[1].replace("btn","text"))
    divContent.appendChild(div)
   //divContent.innerHTML+="<div class='text-danger'>Bonjour</div>"
})