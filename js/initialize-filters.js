'use strict';

window.initializeFilters = (function (image, targetClassForSelect, filterControls, filterPresetsElements, currentFilter) {
  return {
      
    chooseNeighboringFilter : function (filtersList, direction) {
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
   },

    processFilterSelect : function (event) {
      function setAriaPressedStatusByFilterName (filterName) {
        document.querySelector('input[value="' + filterName + '"]').labels[0].setAttribute('aria-pressed', status);
      }  
        
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
  }; // конец объекта
  
  return filterControls.addEventListener('click', processFilterSelect);

})();

