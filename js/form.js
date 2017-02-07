'use strict';

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

var imagePreview = document.querySelector('.filter-image-preview');
var filterControls = document.querySelector('.upload-filter-controls');
var filterPresetsElements = filterControls.querySelectorAll('input[type=radio]');
var currentFilter = 'none'; //изменил значение по умолчанию

// кнопки изменения масштаба
var buttonInc = document.querySelector('.upload-resize-controls-button-inc');
var buttonDec = document.querySelector('.upload-resize-controls-button-dec');

//  при нажатии на кнопки должно изменяться значение поля:
var uploadResizeControlsValue = document.querySelector('.upload-resize-controls-value');

var currentScaleValue = 100;
var MAX_IMAGE_SIZE = 100;
var MIN_IMAGE_SIZE = 25;
var IMAGE_RESIZE_STEP = 25;




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
function chooseNeighboringFilter(filtersList, direction) { //direction: отрицательные - влево, положительные и ноль - вправо
	var normalizedDirection = direction < 0 ? -1 : 1; //приведем аргумент direction к одному из значений
	var checkedElementIndex = 0;
	
	for(var i = 0; i < filtersList.length; i++) { //находим индекс в массиве выбранного элемента
		if(filtersList[i].checked) {
			checkedElementIndex = i;
			break;
		}
	}
	checkedElementIndex += normalizedDirection;
	if (checkedElementIndex < 0) {
		checkedElementIndex = filtersList.length - 1;
	} else if (checkedElementIndex >= filtersList.length) {
		checkedElementIndex = 0;
	}
	
	filtersList[checkedElementIndex].click();
}

function setAriaPressedStatusByFilterName(filterName, status = false) {
	document.querySelector('input[value="'+filterName+'"]').labels[0].setAttribute('aria-pressed',status);
}

function processFilterSelect(event) {
  if (event.target.type === 'radio' && event.target.name === 'upload-filter' && event.target.value !== currentFilter) {
    if (currentFilter !== 'none') { //и тут убрал лишнее условие, если значение по умолчанию null уже быть не может
      imagePreview.classList.remove('filter-' + currentFilter);
    }
	setAriaPressedStatusByFilterName(currentFilter, false);
	currentFilter = event.target.value;;
    if (currentFilter !== 'none') {
      imagePreview.classList.add('filter-' + currentFilter);
    }	
	setAriaPressedStatusByFilterName(currentFilter, true);
  }
	
}

filterControls.addEventListener('click', processFilterSelect);

function formKeysProcessing(evt) {
	switch(evt.keyCode) {
		case ENTER_KEY_CODE : 
			if(evt.target.classList.contains('upload-filter-label')) {
				evt.target.control.click();
			}
			break;
		case ESCAPE_KEY_CODE :
			uploadOverlay.classList.add('invisible');
    		uploadSelectImage.classList.remove('invisible');
			window.removeEventListener('keydown',formKeysProcessing);
			break;
		case 37 : //лево
			chooseNeighboringFilter(filterPresetsElements, -1);
			break;
			
		case 39 : //вправо
			chooseNeighboringFilter(filterPresetsElements, 1);
			break;
	}
}

function setFormKeysProcessingUp() {
	window.addEventListener('keydown', formKeysProcessing);
}

// изменение масштаба
function changeImgSize(modifier) {
  var newValue = currentScaleValue + modifier;
  if (newValue <= MAX_IMAGE_SIZE && newValue >= MIN_IMAGE_SIZE) {
    uploadResizeControlsValue.value = newValue + '%';
    imagePreview.style = 'transform:scale(' + newValue / 100 + ')';
    currentScaleValue = newValue;
  }
}

buttonInc.addEventListener('click', function () {
  changeImgSize(+IMAGE_RESIZE_STEP);
});

buttonDec.addEventListener('click', function () {
  changeImgSize(-IMAGE_RESIZE_STEP);
});


