const menuBtn=document.querySelector(".menuicon");
const menu=document.querySelector(".menu");
const closeBtn=document.querySelector(".closeicon");
function onmenuClick(){
    menu.style.display='block';
    menuBtn.style.display='none';
    closeBtn.style.display='block';
}
function oncloseClick(){
    menu.style.display='none';
    menuBtn.style.display='block';
    closeBtn.style.display='none';
}
closeBtn.addEventListener('click',oncloseClick);
menuBtn.addEventListener('click',onmenuClick);