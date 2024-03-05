import { getData } from "../utiles/storage.js";

async function episodes (){
 const movie = getData("id");

 const containerDiv = document.querySelector(".container")
 const rowDiv = document.createElement("div");
 rowDiv.classList.add("row", "d-flex", "flex-wrap")
 containerDiv.appendChild(rowDiv)

 const res = await fetch(`https://api.tvmaze.com/shows/${movie}/episodes`)
 const data = await res.json();
 console.log(data);
data.forEach(episod =>{
 const column = document.createElement("div");
 column.classList.add("col-sm-6", "col-md-3");
 const card = document.createElement("div");
 card.classList.add("card-body", "bg-dark", "my-4");
 card.style.minHeight = "300px";
 card.style.width = "250px"
 const image = document.createElement("img");
 image.setAttribute("src", episod.image.medium);
 image.classList.add("image-fluid");
 const pEle = document.createElement("p");
 pEle.classList.add("text-light", "my-3","bg-dark", "py-2", "px-3", "name-of-episod")
 pEle.textContent = `S${episod.season}-E${episod.number} ${episod.name}`;
 const icon = document.createElement("i");
 icon.classList.add("bi", "bi-play-circle-fill", "bg-dark");
 icon.style.color = "#63ebb7";
 const box = document.createElement("div");
 box.classList.add("d-flex", "w-100", "bg-dark", "box");
 const aEle = document.createElement("a");
 aEle.classList.add("display-5", "mt-5", "bg-dark");
 aEle.setAttribute("href", episod.url)
 aEle.append(icon)
 box.append(pEle, aEle)
 card.append(image, box);
 column.appendChild(card);
 rowDiv.appendChild(column);


 const selection = document.querySelector("#series");
 const options = document.createElement("option");
 options.setAttribute("value", `S${episod.season}-E${episod.number} ${episod.name}`);
 options.textContent = `S${episod.season}-E${episod.number} ${episod.name}`;
selection.appendChild(options);

const summary = document.createElement("p");
summary.classList.add("bg-dark", "text-light", "d-none", "px-2")
summary.textContent = episod.summary
card.appendChild(summary);
pEle.addEventListener("mouseenter", ()=>{
    card.style.position = "relative"
    summary.classList.remove("d-none");
    summary.classList.add("d-block", "position-absolute", "top-50", "w-75")
})

pEle.addEventListener("mouseleave", ()=>{
    summary.classList.remove("d-block");
    summary.classList.add("d-none")
})

})


const selection = document.querySelector("#series");
const pElements = document.querySelectorAll(".name-of-episod")
selection.addEventListener("change", (e)=>{
pElements.forEach(pEl=>{
    if(! (e.target.value === pEl.textContent)){
        pEl.parentElement.parentElement.style.display = "none"
    }else{
        pEl.parentElement.parentElement.style.display = "block"
    }

    if(e.target.value === "All Episodes"){
        pEl.parentElement.parentElement.style.display = "block"
    }

})

})

}

episodes()

