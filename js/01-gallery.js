import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const gallaryCards = createGalleryItemCard(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", gallaryCards);
galleryContainer.addEventListener("click", openModalEvent);


function openModalEvent(e) {
  // const isLinkFromGalleryItem = evt.target.closest(".gallery__link");
  // if (!isLinkFromGalleryItem) {return;}
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  const handleModalCloseOnEscape = (e) => {
    e.preventDefault();
    if (e.code === "Escape") {
      openModal.close();
    }
  };

  const openModal = basicLightbox.create(
    `<img width="600" height="800" src="${getUrlOfLagreImage(e)}">`,
    {
      onShow: (modalWithLargeImage) => {
        document.body.addEventListener("keydown", handleModalCloseOnEscape);
      },
      onClose: (modalWithLargeImage) => {
        document.body.removeEventListener("keydown", handleModalCloseOnEscape);
      },
    }
  );
  openModal.show();
};

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
    </div>`
    })
    .join("");
};

function getUrlOfLagreImage(e) {  
  return e.target.dataset.source;
};


