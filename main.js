//change nav style on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classlist.toggle('window-scrolled', window.scrollY > 0);
})

// Contact button (circular text buttons)

const textButton = document.querySelectorAll('.contact_btn');

textButton.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character,index) => `<span style = "transform: rotate(${index * 12}deg">${character}</span>`).join("")});
