
const upbox = document.getElementsByClassName("upload-box")[0];
const finp = document.getElementById("file-upload-input");
const fcont = document.getElementsByClassName('files-container')[0];


console.log(upbox);
document.getElementsByClassName("upload-box")[0].addEventListener("click",(e)=>{
    console.log(e);
    finp.click();
})

finp.addEventListener("click",(e)=>{
console.log(e);
console.log(e.target);
})

finp.onchange = function(e){
    const files = e.target.files;

    console.log(files);
    for(let i = 0; i < files.length; i++){
        console.log(files[i]);
        let f = files[i];
        console.log(f.name);
        console.log(f.type);
        let fileCard = `   <div class="file-card">
        <p>${f.name}</p>
        <span>${f.type.split("/")[0]}</span>
    </div>`
        fcont.insertAdjacentHTML('beforeend',fileCard);
    }

   
    console.log(e.target.files);
}