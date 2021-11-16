/*==================== EmailJS ====================*/
emailjs.init('user_lpVkfvNY53LxQMkDPxWWs');


function validate() {
  // let loader = document.querySelector(".loader");
  let name = document.querySelector(".username");
  let email = document.querySelector(".email");
  let project = document.querySelector(".contactform-project");
  let msg = document.querySelector(".message");
  let btn = document.querySelector(".submit");
  console.log(project)

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || project.value == ""  || email.value == "" || msg.value == "") {
      emptyerror();
      project.value = "";
      msg.value = "";
      email.value = "";
      name.value = "";
     
    } else {
      emailjs.send("service_bw5mh6a","template_h5ssh9k",{
        message: msg.value,
        email: email.value,
        name: name.value,
        project: project.value,
        });
        project.value = "";
        msg.value = "";
        email.value = "";
        name.value = "";
      success();
      

      
    }
  });
}
validate();

function emptyerror() {
  swal({
    icon: "error",
    title: "Oops...",
    text: "Fields cannot be empty!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}

function success() {
  swal({
    icon: "success",
    title: "Success...",
    text: "Successfully sent message",
  });
}

// window.onload = function() {
//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       // this.contact_number.value = Math.random() * 100000 | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm('contact_service', 'contact_form', this)
//           .then(function() {
//               console.log('SUCCESS!');
//           }, function(error) {
//               console.log('FAILED...', error);
//           });
//   });
// }


/*==================== TYPED ====================*/
const typed = new Typed('.typed',{
  strings: [
    '<i class="home__subtitle-span">Front-end</i>',
    '<i class="home__subtitle-span">Back-end</i>',
    '<i class="home__subtitle-span">Full Stack</i>',
  ],
  // stringsElement: '#typed-strings',
  typeSpeed: 75,
  backSpeed: 75,
  backDelay: 300,
  startDelay: 1000,
  loop: true,
  // onBegin: function(self) { prettyLog('onBegin ' + self) },
  // onComplete: function(self) { prettyLog('onCmplete ' + self) },
  // preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
  // onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
  // onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
  // onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
  // onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
  // onReset: function(self) { prettyLog('onReset ' + self) },
  // onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
  // onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
  // onDestroy: function(self) { prettyLog('onDestroy ' + self) }
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

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab =>{
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () =>{
    modal(i)
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () =>{
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active-modal');
    })
  })
})



/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});


/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    568:{
      slidesPerView: 2,
    }
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}) 


