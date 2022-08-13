import { galleryItems } from './gallery-items.js';
// Change code below this line

// const galleryContainer = document.querySelector('.gallery');
// const cardsGallery = createGalleryCardsItem(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

// function createGalleryCardsItem(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//         return `
//             <div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//             <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//                 />
//                 </a>
//         </div>
//         `
//     }).join('');
// }

// galleryContainer.addEventListener('click', onGalleryItemClick);

    // function onGalleryItemClick(evt) {
    // evt.preventDefault();
    //     if (!evt.target.classList.contains('gallery__image')) {
    //         return;
    //     }
    //     console.log(evt.target.dataset.original);
    // }
    






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

// onGalleryContainer.addEventListener('click', onItemsGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
    // if () {

    // }
}
const onLightBoxImages = addEventListener('click', onItemsGalleryClick)
const instance = onLightBoxImages.create(`<img src="assets/images/image.png" width="800" height="600">`)

instance.show()


// console.log(galleryItems);
