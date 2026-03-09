console.log(document.title);
//Ejer1
const titulo = document.getElementById("gen-1");
titulo.innerText = "Generasión 1 Pokimon";
//Ejer2
let fon = document.querySelector(".infocard-list");
fon.style.backgroundColor = "red";


//Ejerc 3
let url = document.querySelector(".header-logo").href;
console.log(url);

//Ejer 4

let dom = document.querySelector(".header-logo").host;
console.log(dom);

//Ejer 5
let imagen = document.querySelectorAll("img-fixed");
console.log(imagen);

//Ejer 6
let img = document.querySelectorAll("img-fixed");
img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
console.log(img);

//Ejer 7
let infocard = document.querySelectorAll(".flying");
for(const info of infocard){
    let color = info.closest(".infocard")
    color.style.backgroundColor = "black";
}
