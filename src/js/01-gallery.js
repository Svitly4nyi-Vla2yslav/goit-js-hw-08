// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

function renderGallery() {
  const gallery = document.querySelector('.gallery');
  const galleryList = galleryItems
    .map(
      item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryList);
}
document.addEventListener('DOMContentLoaded', function () {
  
  renderGallery();

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
  });
});
console.log(galleryItems);

