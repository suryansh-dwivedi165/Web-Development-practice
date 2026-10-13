let parent = document.querySelector(".parent-box");
let allbtn = document.querySelector(".parent-box .box");
let para = document.querySelector(".para");

// allbtn.forEach((el) => {
//   el.addEventListener("click", function () {
//     if (el.innerHTML === "Add Friend") el.innerHTML = "Remove Friend";
//     else el.innerHTML = "Add Friend";
//   });
// });

// [...parent.children].forEach(element => {
//     element.addEventListener("click", () => {
//         if(element.innerHTML === "Add Friend")
//             element.innerHTML = "Remove Friend";
//         else 
//             element.innerHTML = "Add Friend"
//     }) 
// });


Array.from(parent.children).forEach(element => {
    element.addEventListener("click", () => {
        if(element.innerHTML === "Add Friend")
            element.innerHTML = "Remove Friend";
        else 
            element.innerHTML = "Add Friend"
    }) 
});
