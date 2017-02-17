'use strict';

(function () {

  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;
  var LEFT_ARROW_KEY_CODE = 37;
  var RIGHT_ARROW_KEY_CODE = 39;
  // форма кадрирования
  var uploadOverlay = document.querySelector('.upload-overlay');
  // форма загрузки изображений
  var uploadSelectImage = document.querySelector('#upload-select-image');
  // поле загрузки фотографий
  var uploadFile = document.querySelector('#upload-file');
  // кнопка-крестик формы кадрирования
  var uploadFormCancel = document.querySelector('.upload-form-cancel');
  var filterPresetsElements = document.querySelectorAll('.upload-filter-controls input[type=radio]');

  function formKeysProcessing(evt) {
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
      case LEFT_ARROW_KEY_CODE:
        window.initializeFilters.chooseNeighboringFilter(filterPresetsElements, -1);
        break;
      case RIGHT_ARROW_KEY_CODE:
        window.initializeFilters.chooseNeighboringFilter(filterPresetsElements, 1);
        break;
    }
  }

  function setFormKeysProcessingUp() {
    window.addEventListener('keydown', formKeysProcessing);
  }

  // при изменении значения поля загрузки фотографий открывается форма кадрирования
  uploadFile.addEventListener('change', function () {
    uploadOverlay.classList.remove('invisible');
    uploadSelectImage.classList.add('invisible');
    setFormKeysProcessingUp();
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

  // смена фильтра
  window.initializeFilters.init(
      document.querySelector('.filter-image-preview'),
      'upload-filter',
      document.querySelector('.upload-filter-controls'),
      'none',
      function(image, currentFilter){
        if (currentFilter !== 'none') {
          image.classList.remove('filter-' + currentFilter);
        }
      },
      function (image, currentFilter){
        if (currentFilter !== 'none') {
          image.classList.add('filter-' + currentFilter);
        }
      }
  );

   // изменение масштаба
  window.initializeScale(
      document.querySelector('.filter-image-preview'),
      document.querySelector('.upload-resize-controls-button-inc'),
      document.querySelector('.upload-resize-controls-button-dec'),
      100,
      100,
      25,
      25,
      function (image, newValue){
        image.style = 'transform:scale(' + newValue / 100 + ')';
      }
  );
})();
