document.querySelector('.burger-btn').addEventListener('click', () => {
    document.querySelector('.header-nav').classList.toggle('header-nav-burger-active');
    
    if(!document.body.style.overflowY)
        document.body.style.overflowY = "hidden";
    else
        document.body.style.overflowY = "";
});