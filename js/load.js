'use strict';

window.load = (function() {
   
  return function(dataUrl, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(evt) {
        onLoad(JSON.parse(event.target.responseText));
    });
    
    xhr.open('GET', dataUrl);
    xhr.send();
  };
})();