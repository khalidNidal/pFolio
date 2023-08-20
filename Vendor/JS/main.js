let servicesection =document.getElementById('services');
let aboutsec =document.getElementById('about');

let portfolioSection = document.getElementById('portfolio');
let resumeSection = document.getElementById('resume');
let contactSection = document.getElementById('contact');
let navbar = document.querySelector('.navbar');
let scroll = document.querySelector('.scrolltotop');
var loading = document.querySelector('.loading');

console.log(resumeSection)


//start changing navbar
navbar.style.transition='.5s'
window.addEventListener('scroll', function(){
    if(window.scrollY>=navbar.offsetTop){
        navbar.style.backgroundColor = '#f3f3f3';
        scroll.style.opacity = '0';
    }

// if(window.scrollY<servicesection.offsetTop){
//     scroll.style.opacity = '0';
//     navbar.style.backgroundColor = 'transparent';
// }

if(window.scrollY<aboutsec.offsetTop){
    scroll.style.opacity = '0';
    navbar.style.backgroundColor = 'transparent';
}

if(window.scrollY>=servicesection.offsetTop){
    navbar.style.backgroundColor = 'white';
    scroll.style.opacity = '1';
}

if(window.scrollY>=portfolioSection.offsetTop){
    navbar.style.backgroundColor = '#f3f3f3'
}

if(window.scrollY>=resumeSection.offsetTop){
    navbar.style.backgroundColor = 'white';
}
})
//end changing navbar

// start scroll to top 
scroll.style.transition='.5s'
scroll.style.opacity = '0'

scroll.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})
// end



// start smooth scrolling
var link = document.querySelectorAll('.nav-link')
for(let i=0; i<link.length; i++){
    link[i].addEventListener('click',function(e){
        e.preventDefault()
        var currentId=e.target.getAttribute('href')
        var targetSelection = document.querySelector(currentId)
        console.log(targetSelection)
        window.scroll({
            top:targetSelection.offsetTop,
            behavior: "smooth"
        })
    })

}



//loading

window.addEventListener('load',function(){
loading.style.opacity='0'
loading.style.transition='1s'
loading.style.visibility='hidden'
loading.style.overflow='auto'

})



// setTimeout( function(){ 
//     loading.style.display="none"
    
// }, 2000);
