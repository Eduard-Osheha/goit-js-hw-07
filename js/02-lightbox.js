import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const gallaryCards = createGalleryItemCard(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", gallaryCards);

function createGalleryItemCard(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
      </a>
      `;
    })
    .join("");
}

const lightboxModalEfects = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  showCounter: false,
  scrollZoom: true,
  scrollZoomFactor: 0.3,
  focus: true,
  closeText: "&#10008",
  navText: ["&#128064", "&#10140"],
  // captionPosition: "bottom",
  // overlayOpacity: 0.9,
});
