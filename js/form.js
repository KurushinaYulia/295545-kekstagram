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
var uploadFilter = document.querySelector('.upload-filter');
var imagePreview = document.querySelector('.filter-image-preview');

uploadFilter.addEventListener('click', function(){
  imagePreview.classList.add('.filter-chrome');
});

// изменение масштаба
var buttonInc = document.querySelector('.upload-resize-controls-button-inc');
var buttonDec = document.querySelector('.upload-resize-controls-button-dec');

//  при нажатии на кнопки должно изменяться значение поля:
var uploadResizeControlsValue = document.querySelector('.upload-resize-controls-value');

buttonInc.addEventListener('click', function(){
  uploadResizeControlsValue.value('75');
  uploadResizeControlsValue.classList.add('transform:scale(0.75)');
});
buttonDec.addEventListener('click', function(){
  uploadResizeControlsValue.value('25');
  uploadResizeControlsValue.classList.add('transform:scale(0.25)');
});


