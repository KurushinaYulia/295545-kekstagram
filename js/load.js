'use strict';

window.load = (function() {
  // var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  
  return function(dataUrl, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(evt) {
        onload(JSON.parse(event.target.responseText));
    });
    
    xhr.open('GET', dataUrl);
    xhr.send();
  };
})();