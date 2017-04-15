console.log('hi')

function set_clip_property() {
  var $header_height = $(.cd-shadow-layer).height(),
      $window_height = $(window).height(),
      $header_top = $window_height - $header_height,
      $window_width = $(window).width();
  $('cd-blurred-bg').css('clip', 'rect('+$header_top+'px, '+$window_width+'px, '+$window_height+'px, 0px)');
}
