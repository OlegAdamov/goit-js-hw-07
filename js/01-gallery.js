import { galleryItems } from './gallery-items.js';
// Change code below this line

const onGalleryContainer = document.querySelector('.gallery');
const onItemsGallery = createItemsGallery(galleryItems);

onGalleryContainer.insertAdjacentHTML('beforeend', onItemsGallery);

function createItemsGallery(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `
                    <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
                </a>
        </div>
        `
    }).join('');
}

onGalleryContainer.addEventListener('click', onItemsGalleryItemClick);

function onItemsGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery")) return;
    const source = event.target.dataset.source;
   
    const instance = basicLightbox.create(`<img src="${source}">`, {

	closable: true,

	className: '',

        onShow: (instance) => {
            document.addEventListener('keydown', keyPress)
    },

        onClose: (instance) => {
            document.removeEventListener('keydown', keyPress);
    }
});
    instance.show();

    function keyPress(event) {
        if (event.key === "Escape") {
            instance.close();
        }
    }

    }

