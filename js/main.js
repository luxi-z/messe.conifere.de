/////////lightbox click///////////////////
const lightbox = document.createElement('div');
lightbox.id='lightbox';
document.body.appendChild(lightbox);

const imgs=document.querySelectorAll('#click img');

imgs.forEach(function(aimg){
    aimg.addEventListener('click', function(){
        lightbox.classList.add('active');
        const fullimg = document.createElement('img');
        fullimg.src = aimg.src;
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        };
        lightbox.appendChild(fullimg)
    })
});

lightbox.addEventListener('click', function(e){
    if(e.target != e.currentTarget) return;
    lightbox.classList.remove('active')

})

///////...showroom map pop//////////////
const lightboxmap = document.createElement('div');
lightboxmap.id='lightboxmap';
document.body.appendChild(lightboxmap);

const map=document.querySelector('#showroom div.map img');
map.addEventListener('click', function(){
    lightboxmap.classList.add('activemap');
    const fullmap = document.createElement('img');
    fullmap.src = map.src;
    while(lightboxmap.firstChild){
        lightboxmap.removeChild(lightboxmap.firstChild)
    };
    lightboxmap.appendChild(fullmap);
})

lightboxmap.addEventListener('click', function(e){
    if(e.target != e.currentTarget) return;
    lightboxmap.classList.remove('activemap')

})

///////////showroom//////////////////

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const slides = document.querySelector('.sds');
const  slideImgs = Array.from(document.querySelectorAll('.sd')) ;


nextBtn.addEventListener('click', function(){
    const activeSlide = document.querySelector('.activeslide');
    const activeIndex =  slideImgs.indexOf(activeSlide);

let currentSlide = slideImgs[activeIndex];
let nextSlide;
if(activeIndex===2)return;
 
    currentSlide.style.transform = 'translateX(-101%)';
    currentSlide.classList.remove('activeslide');
    
    
    nextSlide = slideImgs[activeIndex + 1];
    nextSlide.classList.add('activeslide');
    nextSlide.style.transform='translateX(0)';


    
})

prevBtn.addEventListener('click', function(){
    const activeSlide = document.querySelector('.sd.activeslide');
    const activeIndex =  slideImgs.indexOf(activeSlide);

    let currentSlide = slideImgs[activeIndex];

    let nextSlide;

   if(activeIndex === 0) return;
 
    currentSlide.classList.remove('activeslide');
    currentSlide.style.transform='translateX(101%)';
    
nextSlide = slideImgs[activeIndex - 1];
nextSlide.classList.add('activeslide');
nextSlide.style.transform='translateX(0)';
   

    
})





