// client.js

$(function() {
  $('#get_john').click(function(e) {
    $.get('/john', function(d) {
      $('#john').text(d);
    });
  }).trigger('click');
});
