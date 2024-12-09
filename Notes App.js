let notesBtn = document.getElementById('btn');
let notesContainer = document.querySelector('.notes-container');
let input = document.querySelector('.input-box');

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("input");
}
showNotes();


function storageData(){
  localStorage.setItem("input", notesContainer.innerHTML);
}


 notesBtn.addEventListener('click', (e)=>{
   let para = document.createElement("p");
   let img = document.createElement("img");
   para.className = "input-box";
   para.setAttribute("contenteditable", "true");
   img.src = "https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-delete-vector-icon-png-image_963444.jpg";
   notesContainer.appendChild(para).appendChild(img);
 })

 

 notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        storageData();
    }
    else if(e.target.tagName === "P"){
      input = document.querySelectorAll(".input-box")
      input.forEach(nt => {
        nt.onkeyup = function(){
          storageData();
        }
      })
    }
 })


 document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
      document.execCommand("insertLineBreak");
      event.preventDefault();
    }
 })

