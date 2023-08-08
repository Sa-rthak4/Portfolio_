window.onscroll = () => {
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll = ()=>{
sections.forEach(sec =>{
let top=window.scrollY;
let offset= sec.offsetTop -100;
let height =sec.offsetHeight;
let id=sec.getAttribute

})
}