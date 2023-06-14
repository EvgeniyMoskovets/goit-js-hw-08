import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const GalleryCards = createGalleryCards(galleryItems);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
        `;
    })
    .join('');
}

gallery.insertAdjacentHTML('afterbegin', GalleryCards);

gallery.addEventListener('click', onTargetClick);

function onTargetClick(e) {
  e.preventDefault();
  const imgSelect = e.target.classList.contains('gallery__image');
  const originalImg = e.target.dataset.source;

  if (!imgSelect) {
    return;
  } else {
    let lightbox = new SimpleLightbox('.gallery a');
    lightbox.create(`<img src="${originalImg}" width="800" height="600">`);
    lightbox.show();

    document.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(e) {
      if (e.key === 'Escape') {
        lightbox.close();
        document.removeEventListener('keydown', onEscKeyPress);
      }
    }
  }
}
