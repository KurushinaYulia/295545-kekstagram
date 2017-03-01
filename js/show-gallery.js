'use strict';

window.showGallery = (function () {

  var ENTER_KEY_CODE = 13;
  var galleryOverlay = document.querySelector('.gallery-overlay');
  var galleryOverlayClose = document.querySelector('.gallery-overlay-close');

  function processKey(evt) {
    if (evt.keyCode && evt.keyCode === ENTER_KEY_CODE) {
      closeGallery();
    }
  }

  function closeGallery() {
    galleryOverlay.classList.add('invisible');
    galleryOverlayClose.removeEventListener('click', closeGallery);
    galleryOverlayClose.removeEventListener('keydown', processKey);
  }

  function showGallery(pictureData) {

    var likesCount = document.querySelector('.likes-count');
    var commentsCount = document.querySelector('.comments-count');
    var galleryOverlayImage = document.querySelector('.gallery-overlay-image');

    likesCount.innerHTML = pictureData.likes;
    commentsCount.innerHTML = pictureData.comments.length;
    galleryOverlayImage.src = pictureData.url;

    galleryOverlayClose.addEventListener('click', closeGallery);
    galleryOverlayClose.addEventListener('keydown', processKey);
    galleryOverlay.classList.remove('invisible');
  }

  return showGallery;

})();
