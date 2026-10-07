let id1 = document.querySelector(".id1");
let id2 = document.querySelector(".id2");
let id3 = document.querySelector(".id3");
let div = document.querySelector(".main");
let btn = document.querySelector("button");


btn.addEventListener("click", () => {
    p1 = Math.floor(Math.random() * 100);
    p2 = Math.floor(Math.random() * 100);
    p3 = Math.floor(Math.random() * 100);
    div.style.backgroundColor = `rgb(${p1}, ${p2}, ${p3})`;  
    id1.innerText = p1;   
    id2.innerText = p2;   
    id3.innerText = p3;   
}); 