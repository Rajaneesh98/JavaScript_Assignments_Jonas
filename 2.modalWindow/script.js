'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const modalHandler = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalHandler = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', modalHandler);
}

closeModal.addEventListener('click', closeModalHandler);
overlay.addEventListener('click', closeModalHandler);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalHandler();
  }
});
