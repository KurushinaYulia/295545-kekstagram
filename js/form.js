'use strict';

(function (){
  var ENTER_KEY_CODE = 13;
  // форма кадрирования
  var uploadOverlay = document.querySelector('.upload-overlay');
  // форма загрузки изображений
  var uploadSelectImage = document.querySelector('#upload-select-image');
  // поле загрузки фотографий
  var uploadFile = document.querySelector('#upload-file');
  // кнопка-крестик формы кадрирования
  var uploadFormCancel = document.querySelector('.upload-form-cancel');
    
  // при изменении значения поля загрузки фотографий открывается форма кадрирования
  uploadFile.addEventListener('change', function () {
    uploadOverlay.classList.remove('invisible');
    uploadSelectImage.classList.add('invisible');
    window.keyProcessing.setFormKeysProcessingUp();
  });

  // закрытие формы кадрирования
  uploadFormCancel.addEventListener('click', function () {
    uploadOverlay.classList.add('invisible');
    uploadSelectImage.classList.remove('invisible');
  });

  uploadFormCancel.addEventListener('keydown', function (evt) {
    if (evt.keyCode && evt.keyCode === ENTER_KEY_CODE) {
      uploadOverlay.classList.add('invisible');
      uploadSelectImage.classList.remove('invisible');
    }
  });
})();


window.keyProcessing = (function(){
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;
  var LEFT_ARROW_KEY_CODE = 37;
  var RIGHT_ARROW_KEY_CODE = 39;
  return {
    formKeysProcessing : function (evt) {
      switch (evt.keyCode) {
        case ENTER_KEY_CODE :
          if (evt.target.classList.contains('upload-filter-label')) {
            evt.target.control.click();
          }
          break;
        case ESCAPE_KEY_CODE :
          uploadOverlay.classList.add('invisible');
          uploadSelectImage.classList.remove('invisible');
          window.removeEventListener('keydown', formKeysProcessing);
          break;
        case LEFT_ARROW_KEY_CODE :
           window.initializeFilters.chooseNeighboringFilter(filterPresetsElements, -1);
          break;
        case RIGHT_ARROW_KEY_CODE :
           window.initializeFilters.chooseNeighboringFilter(filterPresetsElements, 1);
          break;
      }
    },

    setFormKeysProcessingUp : function () {
      window.addEventListener('keydown', formKeysProcessing);
    },
  }
})();

// смена фильтра
window.initializeFilters(
    document.querySelector('.filter-image-preview'),
    'upload-filter',
    document.querySelector('.upload-filter-controls'),
    document.querySelectorAll('input[type=radio]'),
    'none'
);

// изменение масштаба
window.createScale(
    document.querySelector('.filter-image-preview'),
    document.querySelector('.upload-resize-controls-button-inc'),
    document.querySelector('.upload-resize-controls-button-dec'),
    100,
    100,
    25,
    25
);
