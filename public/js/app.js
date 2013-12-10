$(document).ready(function() {
  $('#content').on('click', function() {
    $('#video-modal').css('display', 'block');
    $('#overlay').css('display', 'block');
  });

  $('#overlay').on('click', function() {
    $('#video-modal').css('display', 'none');
    $('#video-modal iframe').attr('src', $('#video-modal iframe').attr('src'));
    $('#overlay').css('display', 'none');
  });
});
