'use strict';

window.initializeFilters = (function () {

  function chooseNeighboringFilter(filtersList, direction) {
    var normalizedDirection = direction < 0 ? -1 : 1;
    var checkedElementIndex = 0;

    for (var i = 0; i < filtersList.length; i++) {
      if (filtersList[i].checked) {
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

  function init(image, targetClassForSelect, filterControls, currentFilter, imgFilterCallback) {

    function setAriaPressedStatusByFilterName(filterName) {
      document.querySelector('input[value="' + filterName + '"]').labels[0].setAttribute('aria-pressed', status);
    }

    function processFilterSelect(event) {
      if (event.target.type === 'radio' && event.target.name === targetClassForSelect && event.target.value !== currentFilter) {
        setAriaPressedStatusByFilterName(currentFilter, false);
        imgFilterCallback(image, currentFilter, event.target.value);
        currentFilter = event.target.value;
        setAriaPressedStatusByFilterName(currentFilter, true);
      }
    }

    filterControls.addEventListener('click', processFilterSelect);
  }

  return {
    init: init,
    chooseNeighboringFilter: chooseNeighboringFilter
  };

})();
