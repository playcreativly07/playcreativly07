/* ****************************************************** */
/*       Coded and Designed By Rahul Raj @damnitahul      */
/* ****************************************************** */
console.log(
  '%c 👋 Oh, Hi there, Web lover!',
  'color: #d74034; font-size:24px;'
);
console.log(
  `%c  ✨ Like what you see? We could work together!
  
  🐛 Found a bug? Please, let me know by e-mail, twitter, github issue...
  
  📬 Find me here: https://twitter.com/deepakS66774301
  
  Let the debug begin!

  Bonus meme: https://i.redd.it/ig5u8ke5qo421.png
`,
  'font-size:16px'
);
// #### POPUP The Nav Panel #### //

// Assgining DOM //
const menu = document.getElementById('hamburger');
const nav1 = document.querySelector('nav .container ul');
const li = document.getElementsByClassName('nav-item');
const liArr = Array.from(li);
const body = document.querySelector('body');
const html = document.querySelector('html');
const headerCta = document.querySelector('.header-hero .hero-cta');

/* **************** Media Query Checking **************** */

const media = window.matchMedia('(max-width: 1023px)');

let flag = true;
// Init Click Event//
menu.addEventListener('click', () => {
  menu.classList.add('active');

  if (flag) {
    nav1.style.opacity = '1';
    nav1.style.display = 'block';
    headerCta.style.visibility = 'hidden';
    nav1.classList.add('animated', 'zoomIn');
    body.style.overflowY = 'hidden';
    html.style.overflowY = 'hidden';
    liArr.forEach((li) => {
      li.classList.add('animated', 'flipInX');
    });
    flag = false;
  } else {
    closeNav();
  }
});

/* ***************** Close Nav1 Function ***************** */

function closeNav() {
  menu.classList.remove('active');
  nav1.style.opacity = '0';
  nav1.style.display = 'none';
  headerCta.style.visibility = 'visible';
  body.style.overflowY = 'auto';
  html.style.overflowY = 'auto';
  nav1.classList.remove('animated', 'zoomIn');
  liArr.forEach((li) => {
    li.classList.remove('animated', 'flipInX');
  });
  flag = true;
}

/* *************** Close Nav1 On Link Click ************** */

function navForMobile(media) {
  if (media.matches) {
    liArr.forEach((li) => {
      li.addEventListener('click', closeNav);
    });
  } else {
    liArr.forEach((li) => {
      li.removeEventListener('click', closeNav);
    });
    // Desktop State
    menu.classList.remove('active');
    nav1.style.opacity = '1';
    nav1.style.display = 'flex';
    body.style.overflowY = 'auto';
    html.style.overflowY = 'auto';
    nav1.classList.remove('animated', 'zoomIn');
    liArr.forEach((li) => {
      li.classList.remove('animated', 'flipInX');
    });
  }
}

/* ******** Media Query for Checking Mobile View ******** */

navForMobile(media);
// media.addEventListener('change', navForMobile);

// #### Transform Nav1 ####//

const navbar1 = document.getElementById('nav');
const header1 = document.getElementById('header');

//  Intersection Observer for changing Nav Color on scroll //

// Intersection Observer Options for Precision //
const options = {
  rootMargin: '-90% 0px 0px 0px'
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar1.classList.add('nav-change');
    } else {
      navbar1.classList.remove('nav-change');
    }
  });
}, options);

//  Init Intersection Observer on NavBar1 //
observer.observe(header1);

/* ******************** SVG Animation ******************* */

var wrapper = document.querySelector('.hero-left svg');
function draw() {
  wrapper.classList.add('activesvg');
}
function undraw() {
  wrapper.classList.remove('activesvg');
}

window.onload = (event) => {
  setTimeout(draw, 300);
};

/* ***************** SVG ICON ANIMATION ***************** */

function animateSVG() {
  const skillIcon = Array.from(document.getElementsByClassName('skill-icon'));

  skillIcon.forEach((div, index) => {
    setTimeout(() => {
      div
        .getElementsByTagName('svg')[0]
        .classList.add(`active-icon-${index + 1}`);
    }, 50);

    // div.addEventListener('mouseenter', () => {
    //   div
    //     .getElementsByTagName('svg')[0]
    //     .classList.remove(`active-icon-${index + 1}`);
    //   setTimeout(() => {
    //     div
    //       .getElementsByTagName('svg')[0]
    //       .classList.add(`active-icon-${index + 1}`);
    //   }, 50);
    // });
  });
}

/* *************** AniMate Icons On Scroll ************** */

// Intersection Observer Options for Precision //
const options1 = {
  rootMargin: '50% 0px 0px 0px',
  threshold: 0.6
};
const observerSVG = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateSVG();
    }
  });
}, options1);

//  Init Intersection Observer on NavBar1 //
observerSVG.observe(document.getElementById('skill-showcase'));

/* ****************************************************** */
/*                    Dark Mode Trigger                   */
/* ****************************************************** */

const switchTrigger = document.querySelector('.switch');
const themeMeta = document.querySelector('meta[name="theme-color"]');
let dark = false;
switchTrigger.addEventListener('click', () => {
  if (dark) {
    trans();
    html.removeAttribute('data-theme');
    themeMeta.setAttribute('content', '#f7f8f3');
    switchTrigger.innerHTML = '<p>Dark</p>';
    dark = false;
  } else {
    trans();
    html.setAttribute('data-theme', 'dark');
    themeMeta.setAttribute('content', '#0f0717');
    switchTrigger.innerHTML = '<p>Light</p>';
    dark = true;
  }
});

let trans = function () {
  document.documentElement.classList.add('html-trans');

  window.setTimeout(() => {
    document.documentElement.classList.remove('html-trans');
  }, 1000);
};

/* *************** Moved to end for safari ************** */

media.addEventListener('change', navForMobile);
