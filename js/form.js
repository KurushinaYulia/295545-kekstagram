'use strict';

// форма кадрирования
var uploadOverlay = document.querySelector('.upload-overlay');

// форма загрузки изображений
var uploadSelectImage = document.querySelector('#upload-select-image');

// поле загрузки фотографий
var uploadFile = document.querySelector('#upload-file');

uploadFile.addEventListener('change', function(){
  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');
});

// кнопка-крестик формы кадрирования
var uploadFormCancel = document.querySelector('.upload-form-cancel');

uploadFormCancel.addEventListener('click', function(){
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
});

// смена фильтра
var imagePreview = document.querySelector('.filter-image-preview');
var filterControls = document.querySelector('.upload-filter-controls');
var currentFilter = null;

function processFilterSelect(event) {
    if(event.target.type === 'radio' && event.target.name === 'upload-filter' && event.target.value !== currentFilter) {
    if(currentFilter && currentFilter !== 'none') {
      imagePreview.classList.remove('filter-' + currentFilter);
    }
    currentFilter = event.target.value;
    if(currentFilter !== 'none') {
      imagePreview.classList.add('filter-' + currentFilter);
    }
  }
}

filterControls.addEventListener('click', processFilterSelect);

// изменение масштаба
var buttonInc = document.querySelector('.upload-resize-controls-button-inc');
var buttonDec = document.querySelector('.upload-resize-controls-button-dec');

//  при нажатии на кнопки должно изменяться значение поля:
var uploadResizeControlsValue = document.querySelector('.upload-resize-controls-value');

var currentScaleValue = 100;

var MAX_IMAGE_SIZE = 100;
var MIN_IMAGE_SIZE = 25;
var IMAGE_RESIZE_STEP = 25;

function changeImgSize(modifier) {
  var newValue = currentScaleValue + modifier;
  if(newValue <= MAX_IMAGE_SIZE && newValue >= MIN_IMAGE_SIZE) {
    uploadResizeControlsValue.value = newValue + '%';
    imagePreview.style = 'transform:scale('+newValue / 100+')';
  }
}

buttonInc.addEventListener('click', function(){
  changeImgSize( + IMAGE_RESIZE_STEP );
});

buttonDec.addEventListener('click', function(){
  changeImgSize( - IMAGE_RESIZE_STEP );
});


