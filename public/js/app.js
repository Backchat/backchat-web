$(document).ready(function() {
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
    $('#download-modal').css('display', 'block');
    $('#download-overlay').css('display', 'block');
  });

  $('#download-overlay').on('click', function() {
    $('#download-modal').css('display', 'none');
    $('#download-overlay').css('display', 'none');
  });
});
