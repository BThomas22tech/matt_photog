//change nav style on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classlist.toggle('window-scrolled', window.scrollY > 0);
})