import { galleryItems } from "./gallery-items.js";


const galleryContainer = document.querySelector(".gallery");
const gallaryCards = createGalleryItemCard(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", gallaryCards);
galleryContainer.addEventListener("click", onGalleryCardClick);

function createGalleryItemCard(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" 
      href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"          
        />
      </a>
    </div>`;
    })
    .join("");
}

function onGalleryCardClick (evt) {   
    
    const isLinkGalleryItem = evt.target.parentElement.classList.contains('gallery__link');
    const urlLagreImage = evt.target.dataset.source;

if (!isLinkGalleryItem) {
  return;
}

   
    console.log('Large image url: ', urlLagreImage);
    return urlLagreImage;

};


