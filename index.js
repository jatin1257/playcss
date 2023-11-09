




var blur=document.getElementById("blur");
var spacing=document.getElementById("spacing");
var image=document.querySelector("img");
var inputs=document.querySelectorAll(".properties input");
const root = document.documentElement;
inputs.forEach(input=>{
    input.addEventListener("change",handlechange);
    input.addEventListener("mousemove",handlechange);
})
function handlechange()
{
    var suffix=this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.id}`,`${this.value}${suffix}`)
    

    
}

