'use strict';
window.initializeScale = (function () {

  function createScaleInit(buttonInc, buttonDec, IMAGE_RESIZE_STEP, image, uploadResizeControlsValue, currentScaleValue, MAX_IMAGE_SIZE, MIN_IMAGE_SIZE, callback) {

    buttonInc.addEventListener('click', function () {
      callback(+IMAGE_RESIZE_STEP);
    });

    buttonDec.addEventListener('click', function () {
      callback(-IMAGE_RESIZE_STEP);
    });

    if (typeof this.callback === 'function') {
      this.callback(image, uploadResizeControlsValue, currentScaleValue, MAX_IMAGE_SIZE, MIN_IMAGE_SIZE);
    }
  }

  return createScaleInit;
})();
