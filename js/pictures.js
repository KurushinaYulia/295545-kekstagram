'use strict';

(function(){
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data'; 
  var pictures = [];
  var picturesElements = [];
  var templateElement = document.querySelector('#picture-template').content.querySelector('a');
  var picturesContainer = document.querySelector('.pictures.container');

  window.load(DATA_URL, function(loadedPictures) {
    pictures = loadedPictures;
    
    pictures.forEach(function(pictureData) {
      var clonedNode = templateElement.cloneNode(true);

      clonedNode.children[0].src = pictureData.url;

      var pictureStats = clonedNode.querySelectorAll('.picture-stat');
      pictureStats[0].innerHTML = pictureData.comments.length;
      pictureStats[1].innerHTML = pictureData.likes;
      pictures.innerHTML = 'tabindex="2"';

      clonedNode.addEventListener('click', function(evt) {
        window.showGallery(pictureData);
      });

      picturesElements.push(clonedNode);
    });



    //добавление элементов в верстку
    picturesElements.forEach(function(element) {
      picturesContainer.appendChild(element);
    });

    console.dir(picturesElements);
  });

  

})();





