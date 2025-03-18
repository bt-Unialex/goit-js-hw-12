import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImage } from './js/pixabay-api';
import { renderGallary } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loading-text'),
  moreImgBtn: document.getElementById('moreImgBtn'),
  request: document.querySelector('.form input'),
  submitBtn: document.querySelector('.form button'),
};

refs.form.addEventListener('submit', handleSubmitClick);
refs.moreImgBtn.addEventListener('click', handleMoreClick);
let page, per_page, request;

async function handleSubmitClick(event) {
  event.preventDefault();
  refs.request.setAttribute('readonly', true); //readonly for input
  refs.submitBtn.disabled = true; //disable "Submite" button
  refs.loader.classList.remove('hidden'); //show loader text

  page = 1;
  per_page = 20;
  request = refs.request.value.trim();
  const images = await searchImage(request, page, per_page);

  refs.request.removeAttribute('readonly'); // Restore elements
  refs.submitBtn.disabled = false; //  state
  refs.loader.classList.add('hidden'); // hide loader text

  if (!images) {
    return;
  }
  refs.gallery.innerHTML = '';
  refs.request.value = '';
  renderGallary(images, refs.gallery);
  needMoreBtnCheck(images);
}

async function handleMoreClick(event) {
  refs.loader.classList.remove('hidden'); //show loader text
  const images = await searchImage(request, ++page, per_page);

  if (!images) {
    return;
  }
  const lastGalleryCard = refs.gallery.lastElementChild;
  renderGallary(images, refs.gallery);
  refs.loader.classList.add('hidden'); // hide loader text
  needMoreBtnCheck(images);

  const { top: lastCardPos } = lastGalleryCard.getBoundingClientRect();
  window.scrollBy({ top: lastCardPos - 24, behavior: 'smooth' });
}

function needMoreBtnCheck(images) {
  if (images.length < per_page) {
    refs.moreImgBtn.classList.add('hidden'); //hide "More" button
    iziToast.info({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    refs.moreImgBtn.classList.remove('hidden'); //show "More" button
  }
}
