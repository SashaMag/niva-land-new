/**
 * Created by ke1evra on 29.05.2016.
 */
(function() {

  var popupWindow = document.querySelector('.b-popup');
  var closeCross = document.querySelector('.close-cross span');
  var buttons = document.querySelectorAll('.popup-form-button');
  var popupHeaderHeadline = document.querySelector('.popup-header h3');
  var popupHeaderText = document.querySelector('.popup-header .description');
  var popupForm = document.querySelector('.popup-form');
  var popupInfo = document.querySelector('.popup-info');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showPopupWindow);
  }

  function showPopupWindow() {

    if (this.dataset.popupType == 'form') {

      popupForm.classList.add('visible');

      switch (this.dataset.popupHeader) {

        case ('in-data') :
          popupHeaderHeadline.innerHTML = this.dataset.header;
          popupHeaderText.innerHTML = this.dataset.description;
          break;

        default :
          break;
      }

      popupInfo.classList.remove('visible');

    } else if (this.dataset.popupType == 'info') {

      popupForm.classList.remove('visible');
      popupInfo.classList.add('visible');
    }


    popupWindow.classList.add('active');
  }


  function closePopupWindow(event) {
    if(event.target == popupWindow || event.target == closeCross) {
      popupWindow.classList.remove('active');
    }
  }

  popupWindow.addEventListener('click', closePopupWindow);
  closeCross.addEventListener('click', closePopupWindow);
})();

























































