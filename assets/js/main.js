/*==================== NAV ====================*/
const imgApp = document.getElementById('nav-toggle-img');
const closeIcon = document.getElementById('nav-close');

imgApp.addEventListener("mouseover", () => {
  imgApp.src="./assets/img/app (1).png";
})

imgApp.addEventListener("mouseleave", () => {
  imgApp.src="./assets/img/app.png";
})

closeIcon.addEventListener("mouseover", () => {
  closeIcon.src="./assets/img/close (1).png";
})

closeIcon.addEventListener("mouseleave", () => {
  closeIcon.src="./assets/img/close.png";
})

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.getElementsByClassName('skills__content');
const skillHeader = document.querySelectorAll('.skills__header');


function toggleSkills(){
  let itemClass = this.parentNode.className; //return the node father
  
  for(i=0; i<skillContent.length; i++){
    skillContent[i].className = "skills__content skills__close"
  };

  if(itemClass === "skills__content skills__close"){
    this.parentNode.className = "skills__content skills__open"
  };
};

skillHeader.forEach((e) => {
  e.addEventListener("click", toggleSkills)
})

/*==================== SKILLS DESCRIPTION ====================*/

const skillContainer = document.getElementsByClassName('skill__container')
const skillTitles = document.querySelectorAll('.skills__titles')


// console.log(skillDescription[1]);

function hideDescription(){

  let descriptionClass = this.parentNode.className;

  for(i=0; i<skillContainer.length; i++){
    skillContainer[i].className = "skill__container skills__bar-close"

    // console.log(skillDescription[i])
  };

  if(descriptionClass === "skill__container skills__bar-close"){
    this.parentNode.className = "skill__container skills__bar-open"
  };
}

skillTitles.forEach((e) => {
  e.addEventListener("click", hideDescription)
})
// console.log(skillDescription)


