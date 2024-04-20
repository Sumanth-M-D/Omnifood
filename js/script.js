// Dynamically updating the year in the footer
   const yearEl = document.querySelector(".year");
   yearEl.textContent = new Date().getFullYear();




//Mobile navigation
   const navMenu = document.querySelector(".btn-mobile-nav");
   const header = document.querySelector('.header');

   navMenu.addEventListener('click', function() {
      header.classList.toggle('nav-open');
   });






// Implementing smooth scrolling
   const allLinks = document.querySelectorAll('a:link');

   allLinks.forEach(link => {
      link.addEventListener('click', function(event) {
         event.preventDefault();

         let href = link.getAttribute('href');
         
         //scroll to top
         if(href === "#") window.scrollTo({
            top:0,
            behavior:"smooth"
         })

         //scroll to respective sections
         const sectionEl = document.querySelector(href);
         sectionEl.scrollIntoView({
            behavior:"smooth"
         })

         //close the navigation menu in mobile view
         if(header.classList.contains('nav-open')) 
            header.classList.remove('nav-open')
      })
   })





//Stickey navigation
   const sectionHeroEl = document.querySelector(".section-hero");
   const observer = new IntersectionObserver(function(entries){
         const ent = entries[0];
         if(!ent.isIntersecting )
            document.body.classList.add('sticky');

         if(ent.isIntersecting )
            document.body.classList.remove('sticky');
      }, 
      {
         //In the viewport 
         root:null,
         threshold:0,
         rootMargin:'-80px',
      }
   )
   observer.observe(sectionHeroEl);












   

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

      // Update -> now it supports the gap in flex. .'. no need of below code


function checkFlexGap() {
   var flex = document.createElement("div");
   flex.style.display = "flex";
   flex.style.flexDirection = "column";
   flex.style.rowGap = "1px";
 
   flex.appendChild(document.createElement("div"));
   flex.appendChild(document.createElement("div"));
 
   document.body.appendChild(flex);
   var isSupported = flex.scrollHeight === 1;
   flex.parentNode.removeChild(flex);
   console.log(isSupported);
 
   if (!isSupported) document.body.classList.add("no-flexbox-gap");
 }
 checkFlexGap();
 
 // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
 


 /*
 .no-flexbox-gap .main-nav-list li:not(:last-child) {
   margin-right: 4.8rem;
 }
 
 .no-flexbox-gap .list-item:not(:last-child) {
   margin-bottom: 1.6rem;
 }
 
 .no-flexbox-gap .list-icon:not(:last-child) {
   margin-right: 1.6rem;
 }
 
 .no-flexbox-gap .delivered-faces {
   margin-right: 1.6rem;
 }
 
 .no-flexbox-gap .meal-attribute:not(:last-child) {
   margin-bottom: 2rem;
 }
 
 .no-flexbox-gap .meal-icon {
   margin-right: 1.6rem;
 }
 
 .no-flexbox-gap .footer-row div:not(:last-child) {
   margin-right: 6.4rem;
 }
 
 .no-flexbox-gap .social-links li:not(:last-child) {
   margin-right: 2.4rem;
 }
 
 .no-flexbox-gap .footer-nav li:not(:last-child) {
   margin-bottom: 2.4rem;
 }
 
 @media (max-width: 75em) {
   .no-flexbox-gap .main-nav-list li:not(:last-child) {
     margin-right: 3.2rem;
   }
 }
 
 @media (max-width: 59em) {
   .no-flexbox-gap .main-nav-list li:not(:last-child) {
     margin-right: 0;
     margin-bottom: 4.8rem;
   }
 }
 */
 