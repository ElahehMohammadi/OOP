'use strict';

///////////////////////////////////////
// Modal window

//////////// SECTION BASE SELECTION
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const dotContainer = document.querySelector('.dots');

//////////// SECTION FUNCTIONS

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/// SUB SECTION SCROLLING

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  /*
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('current scroll (x/y)', window.pageXOffset, pageYOffset);
  console.log(
    'height/width view port',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );*/
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' }); //it works in modern browsers only
});

/// SUB SECTION PAGE NAV
document.querySelectorAll('.nav__links').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      if (id !== '#') {
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

/// SUB SECTION OPERATIONS
const openOperation = function (op) {
  op.classList.add('.operations__content--active');
};
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // active the content
  tabContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/// SUB SECTION menue fate animation
const op = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(e => {
      if (e !== link) e.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', op.bind(0.5));
nav.addEventListener('mouseout', op.bind(1));

/// SUB SECTION STICKY NAV
// const initcort = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initcort.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

///// STICKY NAV : OBSERVE API
//  هر وقت بخش مشخص شده روت به مقدار مشخش شده ترشولد رسسید کار فانکشن انجام میشه
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const obsCallback = function (entries, observer) {
//   // entries {treshold of entries}
//   entries.forEach(ent => {
//     console.log(ent);
//   });
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const navH = nav.getBoundingClientRect().height; //حساب کردن ارتفاع نو به صورت دینامیک\
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshold: 0,
  rootMargin: `-${navH}px`,
});
headerObserver.observe(header);

/// SUB SECTION REVEAL SECTIONS

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const revealObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (sec) {
  revealObs.observe(sec);
  sec.classList.add('section--hidden');
});

/// SUB SECTION LAZY PIC REVEAL
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  // replace the pic
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObs = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', //loading 200 px before user reaches out
});
imgTargets.forEach(img => imgObs.observe(img));

/// SUB SECTION SLIDE TESTEMONIALS
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const slider = document.querySelector('.slider');
  let currSlide = 0;
  const maxSlide = slides.length;

  // functions

  const gotoslide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const creatDot = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const nextSlide = function () {
    if (currSlide == maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    gotoslide(currSlide);
    activateDot(currSlide);
  };
  const prevSlide = function () {
    if (currSlide === 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }
    gotoslide(currSlide);
    activateDot(currSlide);
  };

  const init = function () {
    gotoslide(0);
    creatDot();
    activateDot(0);
  };
  init();
  // event handler
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      gotoslide(slide);
      activateDot(slide);
    }
  });
};
slider();
/*
// //////////////////////
// //////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const theHeader = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// its a html collection = it gets updated life time (unlike the nodeList )
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'we use cookies for good functionality and so on ';
message.innerHTML =
  'we use cookies for good functionality and so on <button class= "btn btn--close-cookie">Got it!</button>';
// theHeader.prepend(message);
theHeader.append(message);
// theHeader.append(message.cloneNode(true));
// theHeader.before(message);
// theHeader.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

// Style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.height);
// it dosent work cause its not an inline element we can get them like:
console.log(getComputedStyle(message).height);

console.log(message.style.backgroundColor);
// works 'cause its inline
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orange');

// attributs
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
// it dosent work for unstandard attributs
//  we can read them through  logo.getattribut('THE ATTRIBUTE NAME')
logo.setAttribute('company', 'bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));
// its also true for 'href' attributs in links

// Data Attributs
// data-version-number (in HTML)
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('C', 'D');
logo.classList.remove('C', 'D');
logo.classList.toggle('C', 'D');
logo.classList.contains('C', 'D');
// dont use it overwrites any other classes that are already there
logo.className = 'JONAS';
*/

/*
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('add event listiner');
  h1.removeEventListener('mouseenter', alertH1);
  // not repeating the alert and removing the event listiner
};

h1.addEventListener('mouseenter', alertH1);*/
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// not repeading the alert after 3 seconds
//h1.onmouseenter = function (e) {
//  alert('add event listiner');
//};this is the old school version
/*
const randomint = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomcolor = () =>
  `rgb(${randomint(0, 255)},${randomint(0, 255)},${randomint(0, 255)})`;
// console.log(randomcolor());
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcolor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this); //true

  // stop Propagation
  // e.stopPropagation();
  // not a good idea in practice
});
//it listens for events in bubbling part
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcolor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomcolor();
    console.log('NAV', e.target, e.currentTarget);
  }
  // ,true  => it will listen while capturing (fauls is the defult)
);*/
/*
const h1 = document.querySelector('h1');
//  going downwards
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
// works only for direct childs
h1.firstElementChild.style.color = 'white';

// up wards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);
//  works for direct parent but we neet the undirect parents so...
h1.closest('h1').style.background = 'var(--gradient-secondary)';
// finds the closest parent that contains the class that have been said

// going sideways:siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('html bluh bluh bluh', e);
});

window.addEventListener('load', function (e) {
  console.log('loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
