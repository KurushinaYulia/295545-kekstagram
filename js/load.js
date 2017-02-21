'use strict';

window.load = (function() {
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  
  return function(onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoad);
    
    xhr.open('GET', DATA_URL);
    xhr.send();
  };
})();