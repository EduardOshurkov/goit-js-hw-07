import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");


const galleryImages = galleryItems.map(
    ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
            <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`
);

gallery.innerHTML = galleryImages.join("");

const onClickOpenImages = (event) => {
    if (event.target.nodeName !== "IMG") {
        return;
    }


    event.preventDefault();

    const imageLink = event.target.dataset.source;

    instance
        .element()
        .querySelector('img')
        .setAttribute("src", imageLink)
    
    instance.show();
};

gallery.addEventListener("click", onClickOpenImages);

const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
  closable: true,
  onShow: () => {
    document.addEventListener("keydown", closeByEscape);
  },
  onClose: (instance) => {
    instance.element().querySelector("img").setAttribute("src", "");

    document.removeEventListener("keydown", closeByEscape);
  },
}); 

function closeByEscape(event) {
  if (event.code === "Escape") {
    if (instance.visible()) {
      instance.close();
    }
  }
}


