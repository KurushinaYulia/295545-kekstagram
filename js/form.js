'use strict';


// форма кадрирования
var uploadOverlay = document.querySelector('.upload-overlay');

// форма загрузки изображений
var uploadSelectImage = document.querySelector('#upload-select-image');

// поле загрузки фотографий
var uploadFile = document.querySelector('#upload-file');

// кнопка-крестик формы кадрирования
var uploadFormCancel = document.querySelector('.upload-form-cancel');

//  при нажатии на кнопку поля загрузки фоток, должно изменяться значение поля:
var uploadResizeControlsValue = document.querySelector('.upload-resize-controls-value');

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
    case LEFT_ARROW_KEY_CODE :
      //chooseNeighboringFilter(filterPresetsElements, -1); закомментированы временно
      break;
    case RIGHT_ARROW_KEY_CODE :
      //chooseNeighboringFilter(filterPresetsElements, 1);
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

initializeFilters(
    document.querySelector('.filter-image-preview'),
    //'upload-filter-label', уже не нужен
    'upload-filter',
    document.querySelector('.upload-filter-controls'),
    document.querySelectorAll('input[type=radio]'),
    'none'
); 

// изменение масштаба
createScale(
    document.querySelector('.filter-image-preview'),
    document.querySelector('.upload-resize-controls-button-inc'),
    document.querySelector('.upload-resize-controls-button-dec'),
    100, 100, 25, 25);