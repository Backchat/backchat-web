$(document).ready(function() {
  var isVisible=0;
  var isIos = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)));
  var isAndroid = (navigator.userAgent.match(/Android/i));
  var IOS_LINK = "https://itunes.apple.com/us/app/backdoor/id659951602?ls=1&mt=8";
  var ANDROID_LINK = "https://play.google.com/store/apps/details?id=com.youtell.backchat";
  var YOUTUBE_LINK = "//www.youtube-nocookie.com/embed/y6QGP0OUaV4?rel=0&autoplay=1";
  $('#backchat').on('click', function() {
    /*if (isIos || isAndroid) {
      window.location.assign(YOUTUBE_LINK);
      $('#video-modal').css('display', 'block');
      $('#video-overlay').css('display', 'block');
    }
    else {*/
      $('#video-modal').css('display', 'block');
      $('#video-modal img').remove();
      $('#video-modal').append("<img src='/img/VideonotdoneyetTEXT.png'></img>");
      /*$('#video-modal').append("<iframe width='960' height='540' src='" + YOUTUBE_LINK + "' frameborder='0' allowfullscreen></iframe>");*/
      $('#video-overlay').css('display', 'block');
    /*}*/
  });
  /* remove when movie exists */
  $('#video-modal').on('click', function() {
    $('#video-modal').css('display', 'none');
    $('#video-overlay').css('display', 'none');
    /**/
    $('#video-modal img').remove();
  })
  /*til here */

  $('#video-overlay').on('click', function() {
    $('#video-modal').css('display', 'none');
    /*$('#video-modal iframe').remove();*/
    $('#video-modal img').remove();
    $('#video-overlay').css('display', 'none');
  });

  $('#ios').on('click', function() {
    window.location.assign(IOS_LINK);
  })

  $('#android').on('click', function() {
    window.location.assign(ANDROID_LINK);
  })

  $('#download').on('click', function() {

    if (isIos) {
      window.location.assign(IOS_LINK);
    }
    else if (isAndroid) {
      window.location.assign(ANDROID_LINK);
    }
    else {
      switch (isVisible)
      {
      case 0:
        $('#download-modal').css('display', 'block');
        $('#download-overlay').css('display', 'block');

        var x=0;
        var modal = document.getElementById('download-modal');
        var dl = document.getElementById('download');
        while(dl!=null){
          x += dl.offsetLeft;
          dl = dl.offsetParent;
        }
        var temp = (document.getElementById('download').offsetWidth - document.getElementById('download-modal').offsetWidth)/2;
        modal.style.left = x + temp + "px";
        modal.style.top = document.getElementById('footer').offsetTop - document.getElementById('download-modal').offsetHeight + "px";

        isVisible=1;
        break;
      case 1:
        $('#download-modal').css('display', 'none');
        $('#download-overlay').css('display', 'none');
        isVisible=0;
        break;
      }
    }
  });
});