'use strict';

window.initializeScale = (function () {

  return function (image, buttonInc, buttonDec, currentScaleValue, MAX_IMAGE_SIZE, MIN_IMAGE_SIZE, IMAGE_RESIZE_STEP, imgScaleCallback) {
    //  при нажатии на кнопку поля загрузки фоток, должно изменяться значение поля:
    var uploadResizeControlsValue = document.querySelector('.upload-resize-controls-value');

    function changeImgSize(modifier) {
      var newValue = currentScaleValue + modifier;
      if (newValue <= MAX_IMAGE_SIZE && newValue >= MIN_IMAGE_SIZE) {
        uploadResizeControlsValue.value = newValue + '%';
        currentScaleValue = newValue;
        imgScaleCallback(image, newValue);
      }
    }

    buttonInc.addEventListener('click', function () {
      changeImgSize(+IMAGE_RESIZE_STEP);
    });

    buttonDec.addEventListener('click', function () {
      changeImgSize(-IMAGE_RESIZE_STEP);
    });
  }

})();
