window.addEventListener('scroll', function(){
    let navbar=this.document.querySelector('nav');
    if(window.pageYOffset>=300){
        navbar.classList.add('nav-scroll')
    }
    else{
        navbar.classList.remove('nav-scroll')
    }
})



//open the frequently ask question 
const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
    })
})


//show / nav menu
const menu=document.querySelector(".nav-menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");
const showHide=document.querySelector(".container a h4")


menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
    showHide.style.display="none"

})

//close nav menu
const closeNav=()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
    showHide.style.display="inline-block"
}
closeBtn.addEventListener('click',closeNav)