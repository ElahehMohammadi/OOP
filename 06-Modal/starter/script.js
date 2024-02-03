'use strict';

//////////// SECTION CLASSES
const modalEL = document.querySelector('.modal');
const overEL = document.querySelector('.overlay');
const showEL = document.querySelectorAll('.show-modal');
const closeEL = document.querySelector('.close-modal');

//////////// SECTION FUNCTIONS

/// SUB SECTION CLOSING
const closeModal = function () {
  modalEL.classList.add('hidden');
  overEL.classList.add('hidden');
};

/// SUB SECTION OPENING
const openModal = function () {
  if (modalEL.classList.contains('hidden')) {
    modalEL.classList.remove('hidden');
    overEL.classList.remove('hidden');
  }
};

//////////// SECTION ACTIONS

/// SUB SECTION SHOWING THE MODAL
for (let show of showEL) {
  show.addEventListener('click', openModal);
}

/// SUB SECTION CLOSING THE MODAL BY BUTTON
closeEL.addEventListener('click', closeModal);

/// SUB SECTION CLOSING THE MODAL BY OUTSIDE
overEL.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEL.classList.contains('hidden')) {
    closeModal();
  }
});
