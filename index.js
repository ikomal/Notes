const container = document.querySelector(".notes-container")
const btn = document.querySelector(".btn")
const imgg=document.querySelector(".imgg")



   
        
    

btn.addEventListener("click",()=>
{
    let p=document.createElement("p")
    let img=document.createElement("img")
    img.src="img.png"
   
    img.className="dlt"
    p.className="input"
    p.setAttribute("contenteditable",true)
    p.style.color="black"
    p.style.backgroundColor="white"
    container.appendChild(p).appendChild(img)
    // img.addEventListener("click",()=>
    //     {
    //         container.remove();
    //     })
    p.querySelector(".dlt").addEventListener("click",()=>
    {
        p.remove();
    })

})
function removeAll()
{
    container.remove();
}
   





