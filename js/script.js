/**
 * Created by ke1evra on 29.05.2016.
 */
(function() {

  var popupWindow = document.querySelector('.b-popup');
  var closeCross = document.querySelector('.close-cross span');
  var closeCross2 = document.querySelector('.close-cross-2 span');
  var buttons = document.querySelectorAll('.popup-form-button');
  var popupHeaderHeadline = document.querySelector('.popup-header h3');
  var popupHeaderText = document.querySelector('.popup-header .description');
  var popupForm = document.querySelector('.popup-form');
  var popupInfo = document.querySelector('.popup-info');

  function hideAllVisibles() {
    var visibleClasses = document.querySelectorAll('.visible');
    for (var i = 0; i < visibleClasses.length; i++) {
      visibleClasses[i].classList.remove('visible');
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showPopupWindow);
  }

  function showPopupWindow() {

    hideAllVisibles();

    if (this.dataset.popupType === 'form') {

      popupForm.classList.add('visible');
      popupHeaderHeadline.innerHTML = this.dataset.header;
      popupHeaderText.innerHTML = this.dataset.description;

    } else if (this.dataset.popupType === 'info') {
      console.log('.niva-' + this.dataset.cartype);

      popupInfo.classList.add('visible');
      var visibleBlock = document.querySelector('.' + this.dataset.infoType);
      visibleBlock.classList.add('visible');
      visibleBlock.querySelector('.' + this.dataset.cartype).classList.add('visible');

    }


    popupWindow.classList.add('active');
  }


  function closePopupWindow(event) {
    if(event.target == popupWindow || event.target == closeCross || event.target == closeCross2) {
      popupWindow.classList.remove('active');
    }
  }

  popupWindow.addEventListener('click', closePopupWindow);
  closeCross.addEventListener('click', closePopupWindow);
  closeCross2.addEventListener('click', closePopupWindow);

  //плавный якорь
  $(document).ready(function() {

    $('a[href^="#"]').click(function(){
      var el = $(this).attr('href');
      $('body').animate({
        scrollTop: $(el).offset().top}, 500);
      return false;
    });

  });

})();

























































