'use strict';

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;
var LEFT_ARROW_KEY_CODE = 37;
var RIGHT_ARROW_KEY_CODE = 39;

var initializeFilters = function(image, /*targetClassForEnter,*/ targetClassForSelect, filterControls, filterPresetsElements, currentFilter) {
    
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

function setAriaPressedStatusByFilterName(filterName) {
  document.querySelector('input[value="' + filterName + '"]').labels[0].setAttribute('aria-pressed', status);
}

function processFilterSelect(event) {
  if (event.target.type === 'radio' && event.target.name === targetClassForSelect && event.target.value !== currentFilter) {
    if (currentFilter !== 'none') {
      image.classList.remove('filter-' + currentFilter);
    }
    setAriaPressedStatusByFilterName(currentFilter, false);
    currentFilter = event.target.value;
    if (currentFilter !== 'none') {
      image.classList.add('filter-' + currentFilter);
    }
    setAriaPressedStatusByFilterName(currentFilter, true);
  }
}

filterControls.addEventListener('click', processFilterSelect);

};

