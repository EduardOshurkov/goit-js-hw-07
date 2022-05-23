import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");


const galleryImages = () => galleryItems.map(
    ({ preview, original, description }) =>
   `<li class="gallery__item">
        <a  href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title="${description}"
          />
        </a>
      </li>`
).join(" ");

gallery.insertAdjacentHTML("afterbegin", galleryImages());


new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
