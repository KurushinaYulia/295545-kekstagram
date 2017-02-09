'use strict';

var createScale = function (image, buttonInc, buttonDec, currentScaleValue, MAX_IMAGE_SIZE, MIN_IMAGE_SIZE, IMAGE_RESIZE_STEP) {
    //  при нажатии на кнопку поля загрузки фоток, должно изменяться значение поля:
  var uploadResizeControlsValue = document.querySelector('.upload-resize-controls-value');

  function changeImgSize(modifier) {
    var newValue = currentScaleValue + modifier;
    if (newValue <= MAX_IMAGE_SIZE && newValue >= MIN_IMAGE_SIZE) {
      uploadResizeControlsValue.value = newValue + '%';
      image.style = 'transform:scale(' + newValue / 100 + ')';
      currentScaleValue = newValue;
    }
  }

  buttonInc.addEventListener('click', function () {
    changeImgSize(+IMAGE_RESIZE_STEP);
  });

  buttonDec.addEventListener('click', function () {
    changeImgSize(-IMAGE_RESIZE_STEP);
  });

  window.createScale = createScale;

};
