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
  var submitButton = document.getElementById('submit-phone-form');



  function hideAllVisibles() {
    var visibleClasses = document.querySelectorAll('.visible');
    for (var i = 0; i < visibleClasses.length; i++) {
      visibleClasses[i].classList.remove('visible');
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showPopupWindow);
  }

  submitButton.addEventListener('click', sendUserInfo);

  function showPopupWindow() {

    hideAllVisibles();

    if (this.dataset.popupType === 'form') {

      popupForm.classList.add('visible');
      popupHeaderHeadline.innerHTML = this.dataset.header;
      popupHeaderText.innerHTML = this.dataset.description;

    } else if (this.dataset.popupType === 'info') {

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
      $('html,body').animate({
        scrollTop: $(el).offset().top}, 800);
      return false;
    });

  });

// phone : int, brackets & +
  $('.numbersOnly').keyup(function () {
    this.value = this.value.replace(/[^\d\+()\-]/g, '');
  });


  function sendUserInfo() {
    var mainForm = document.getElementById('main-form');
    var username = mainForm.querySelector('#username');
    var userphone = mainForm.querySelector('#userphone');

    //console.log(userphone.value);
    //console.log(metricVariable);

    if(userphone.value.length <= 6) {
      alert('Введите номер телефона');
      return;
    } // сделать норм проверку

    var uniq = uniqq();

    $.ajax({
      url: '/mailspo.php',
      type: 'POST',
      cache: false,
      data: {
        name: username.value,
        phone: userphone.value,
        num_order: uniq
      },
      success: function(txt) {

        alert('Ваша заявка успешно отправлена');

        yaCounter37745300.reachGoal(metricVariable);

        //clean
        $(':input').val('');

        hideAllVisibles();
      }
    })
  }

})();


function uniqq() {

  var result = "";

  $.ajax({
    url: "/uniq.php",
    async: false,
    success: function (data) {
      result = data;
    }
  });
  return result;
}


//set metric target
var metricVariable;
$('.popup-form-button').click(function () {
  metricVariable = $(this).attr('data-metric');
});
























































