'use strict';

/*Создайте модуль pictures.js который с помощью функции window.load */
window.load(function(evt) {
    
  /*будет скачивать список похожих объявлений по адресу: https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data*/ 
    
  /* и сохранять их в массиве pictures.*/
  var picture = JSON.parse(xhr.responseText);

  /*В цикле пройдите по всем записям в массиве pictures и создайте для каждой из них DOM-элемент на основе шаблона, #picture-template который находится в разметке index.html.*/
  for(i = 0; i < picture.lenght; i++) {
    var templatePicture = document.querySelector('.picture-template');
    var elementClone = templatePicture.content.querySelector('????');
    var newElement = elementToClone.cloneNode(true);
    document.body.appendChild(newElement);
  }
    
  /*Заполните каждый из созданных DOM-элементов информацией из соответствующего JavaScript-объекта: src для изображения возьмите из поля url, количество лайков из поля likes, количество комментариев — из длины массива comments.*/




  /*Отрисуйте полученные блоки picture внутри блока pictures*/






  /*В модуле pictures.js добавьте каждому из отрисованных элементов обработчик события клика (и активации с клавиатуры), который будет вызывать функцию showGallery передавая в нее данные соответствующего объекта*/
  newElement.addEventListener('click', showGallery);  
});  