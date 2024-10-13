const sidemenu=document.querySelector("#sideMenu");

function openMenu(){
    sidemenu.style.transform ='translateX(-16rem)';
}

function closeMenu(){
    sidemenu.style.transform='translateX(16rem)';
}