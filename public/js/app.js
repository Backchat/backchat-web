$(document).ready(function() {
  var isVisible=0;
  $('#content').on('click', function() {
    $('#video-modal').css('display', 'block');
    $('#video-modal').append("<iframe width='960' height='540' src='//www.youtube-nocookie.com/embed/y6QGP0OUaV4?rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe>");
    $('#video-overlay').css('display', 'block');
  });

  $('#video-overlay').on('click', function() {
    $('#video-modal').css('display', 'none');
    $('#video-modal iframe').remove();
    $('#video-overlay').css('display', 'none');
  });

  $('#download').on('click', function() {
    switch (isVisible)
    {
    case 0:
      $('#download-modal').css('display', 'block');
      $('#download-overlay').css('display', 'block');
      isVisible=1;
      break;
    case 1:
      $('#download-modal').css('display', 'none');
      $('#download-overlay').css('display', 'none');
      isVisible=0;
      break;
    }
  });
});
