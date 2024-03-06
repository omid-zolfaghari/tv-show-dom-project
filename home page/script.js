import { setData, getData } from "../utiles/storage.js";

const container = document.querySelector(".par")
const row1 = document.createElement("div");
row1.classList.add("row", "my-5")
const row2 = document.createElement("div");
row2.classList.add("row", "my-5")
const row3 = document.createElement("div");
row3.classList.add("row", "my-5");



container.append(row1, row2, row3)
const movies = async(names, row)=>{
    const res =await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${names}`);
    const data = await res.json();
    console.log(data);
    const col3 = document.createElement("div");
    col3.classList.add("col-12", "col-md-6","col-lg-3", "mt-3");
    const card = document.createElement("div");
    card.style.cursor = "pointer";
    card.style.width = "300px"
    card.classList.add("card-body")
    col3.append(card);

    const image = document.createElement("img");
    image.style.transitionDuration = "0.5s"
    image.addEventListener("mouseenter", ()=>{
        image.style.transform = "scale(1.04)"
    })
    image.addEventListener("mouseleave", ()=>{
        image.style.transform = "scale(1)"
    })
    image.setAttribute("src", data.image.medium);
    image.classList.add("rounded", "image-fluid");
    const title = document.createElement("p");
    title.style.cursor = "pointer"
    title.classList.add("text-light", "my-3", "fs-5", "title")
    title.textContent = data.name;
    const rate = document.createElement("p");
    rate.textContent = data.rating.average;
    rate.classList.add("my-2", "text-info");
    
    const genre = document.createElement("p");
    genre.style.color= "#63E6BE"
    genre.classList.add("my-2")
    data.genres.forEach(item=>{
        genre.textContent = item
    })
    
    card.append(image, title, rate, genre)
    row.appendChild(col3)
    
    card.addEventListener("click", ()=>{
       console.log(data.id);
        setData(data.id);
        location.replace("./episod.html")
    })
} 
movies("game of thrones", row1);
movies("the vampire diaries", row1);
movies("dark", row1);
movies("the nevers", row1);

movies("sherlock", row2);
movies("the sopranus", row2);
movies("planet earth", row2);
movies("true detective", row2);

movies("fresh prince", row3);
movies("the wire", row3);
movies("last of us", row3);
movies("see", row3);



const searchInput = document.querySelector("input");
searchInput.addEventListener("input", (e)=>{
    console.log(e.target.value);
    const titles = document.querySelectorAll(".title");
    setTimeout(titles.forEach(title=>{
        if(! title.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
            title.parentElement.parentElement.style.display = "none"
        }else{
            title.parentElement.parentElement.style.display = "block"
        }
    }), 1000
)
    
})






